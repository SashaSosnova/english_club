/**
 * Playwright UI smoke for English Club.
 * Run: npx --yes playwright test --config=...  OR node via:
 *   npx --yes playwright install chromium
 *   node scripts/qa-ui-smoke.mjs
 */
import { chromium } from 'playwright'

const BASE = process.env.QA_BASE_URL || 'http://localhost:5173/'
const notes = []
const bugs = []

function note(msg) {
  notes.push(msg)
  console.log(`  ✓ ${msg}`)
}

function bug(severity, msg) {
  bugs.push({ severity, msg })
  console.log(`  ✗ [${severity}] ${msg}`)
}

async function main() {
  console.log(`English Club QA — UI smoke @ ${BASE}\n`)

  let browser
  try {
    browser = await chromium.launch({ headless: true })
  } catch (e) {
    console.error('Failed to launch Chromium. Install with:')
    console.error('  npx --yes playwright install chromium')
    console.error(String(e))
    process.exit(2)
  }

  const context = await browser.newContext()
  const page = await context.newPage()
  const consoleErrors = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text())
  })
  page.on('pageerror', (err) => {
    consoleErrors.push(String(err))
  })

  try {
    // 1) Home
    const res = await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 })
    if (!res || res.status() !== 200) {
      bug('critical', `Home HTTP status ${res?.status()}`)
    } else {
      note(`Home loads (HTTP ${res.status()})`)
    }

    await page.waitForSelector('.screen.home, .hero', { timeout: 10000 })
    const title = await page.title()
    if (!/English Club/i.test(title)) {
      bug('major', `Document title missing English Club: "${title}"`)
    } else {
      note(`Title: ${title}`)
    }

    const brand = page.locator('.eyebrow', { hasText: 'English Club' })
    if ((await brand.count()) === 0) {
      bug('major', 'Brand "English Club" not visible on home')
    } else {
      note('Brand "English Club" visible')
    }

    const continueCta = page.locator('button.card-cta').filter({
      hasText: /Продолжить|Тест юнита|Урок/,
    })
    if ((await continueCta.count()) === 0) {
      bug('major', 'Continue CTA not found on home')
    } else {
      note('Continue CTA present')
    }

    const levels = page.locator('.level-list .level-row, section.level-list button')
    if ((await levels.count()) < 1) {
      bug('major', 'Levels list empty/missing')
    } else {
      note(`Levels list: ${await levels.count()} row(s)`)
    }

    // 2) Level 1
    await levels.first().click()
    await page.waitForSelector('.unit-block, .lesson-list', { timeout: 10000 })
    note('Opened Level 1')

    const unit1 = page.locator('.unit-block').first()
    const lessonRows = unit1.locator('.lesson-row:not(.quiz-row)')
    const lessonCount = await lessonRows.count()
    if (lessonCount < 4) {
      bug('major', `Unit 1 expected ≥4 lessons, got ${lessonCount}`)
    } else {
      note(`Unit 1 shows ${lessonCount} lessons`)
    }

    const firstLesson = lessonRows.nth(0)
    const secondLesson = lessonRows.nth(1)
    const firstDisabled = await firstLesson.isDisabled()
    const secondDisabled = await secondLesson.isDisabled()
    if (firstDisabled) {
      bug('critical', 'Lesson 1 should be unlocked but is disabled')
    } else {
      note('Lesson 1 unlocked')
    }
    if (!secondDisabled) {
      bug('major', 'Lesson 2 should be locked (empty progress) but is enabled')
    } else {
      note('Lesson 2 locked (empty progress)')
    }

    // 3) Lesson 1 path: explain → drill → builder (or enough steps)
    await firstLesson.click()
    await page.waitForSelector('.screen.lesson', { timeout: 10000 })
    note('Opened Lesson 1')

    // Explain step
    const nextBtn = page.locator('button.btn.primary', { hasText: 'Дальше' })
    if ((await nextBtn.count()) > 0 && (await nextBtn.first().isVisible())) {
      await nextBtn.first().click()
      note('Passed explain → next')
    } else {
      bug('minor', 'Explain "Дальше" not immediately visible')
    }

    // Drill: click correct option (answer gets .correct after choice; pick any then check feedback)
    await page.waitForSelector('.options .option, .builder-pool .chip, .flashcard', {
      timeout: 10000,
    })

    let didDrill = false
    if ((await page.locator('.options .option').count()) > 0) {
      // Choose first option; if wrong, still advances after Дальше
      // Prefer clicking until we see feedback, then Дальше
      const options = page.locator('.options .option')
      // Try to find correct by answering all... better: click each until feedback says Верно or wrong, then next
      await options.first().click()
      await page.waitForSelector('.feedback', { timeout: 5000 })
      const feedback = await page.locator('.feedback').innerText()
      // If wrong, the correct answer is highlighted; for smoke just continue
      note(`Drill answered (feedback: ${feedback.slice(0, 40)})`)
      didDrill = true
      await page.locator('button.btn.primary', { hasText: 'Дальше' }).click()
    }

    // Advance until builder or cards (max ~8 steps)
    let sawBuilderOrCards = false
    for (let i = 0; i < 10; i++) {
      if ((await page.locator('.builder-pool .chip').count()) > 0) {
        sawBuilderOrCards = true
        // Build correct answer by clicking chips in answer order is hard without knowing order.
        // Click all pool chips then check.
        const chips = page.locator('.builder-pool .chip')
        const n = await chips.count()
        for (let c = 0; c < n; c++) {
          // pool mutates; always click first remaining
          await page.locator('.builder-pool .chip').first().click()
        }
        await page.locator('button.btn.primary', { hasText: 'Проверить' }).click()
        await page.locator('button.btn.primary', { hasText: 'Дальше' }).click()
        note('Completed a builder step')
        break
      }
      if ((await page.locator('.flashcard').count()) > 0) {
        sawBuilderOrCards = true
        await page.locator('.flashcard').click()
        // skip through cards quickly
        for (let k = 0; k < 8; k++) {
          const doneCards = page.locator('button.btn.primary', {
            hasText: /В словарь|Дальше/,
          })
          if ((await doneCards.count()) === 0) break
          const label = await doneCards.first().innerText()
          await doneCards.first().click()
          if (/В словарь/.test(label)) break
        }
        note('Completed a cards step')
        break
      }
      if ((await page.locator('.options .option').count()) > 0) {
        await page.locator('.options .option').first().click()
        await page.locator('button.btn.primary', { hasText: 'Дальше' }).click()
        continue
      }
      const dalshe = page.locator('button.btn.primary', { hasText: 'Дальше' })
      if ((await dalshe.count()) > 0 && (await dalshe.first().isVisible())) {
        await dalshe.first().click()
        continue
      }
      break
    }

    if (!didDrill) bug('major', 'Did not complete a drill step in Lesson 1')
    if (!sawBuilderOrCards) {
      bug('minor', 'Did not reach builder/cards in Lesson 1 within step budget')
    } else {
      note('Lesson 1 interactive path advanced without crash')
    }

    // Exit lesson to home via X then back, or seed progress
    await page.locator('button.btn.ghost', { hasText: '✕' }).click()
    // may be on level screen
    const back = page.locator('button.btn.ghost', { hasText: 'Назад' })
    if ((await back.count()) > 0) await back.first().click()
    await page.waitForSelector('.screen.home, .hero', { timeout: 10000 })
    note('Returned to Home')

    // 6) Progress screen
    await page.locator('button.card-cta.secondary', { hasText: 'Прогресс' }).click()
    await page.waitForTimeout(500)
    const progressVisible =
      (await page.locator('text=Прогресс').count()) > 0 ||
      (await page.locator('.screen').count()) > 0
    if (!progressVisible) bug('major', 'Progress screen failed to open')
    else note('Progress screen opens')

    // back
    const back2 = page.locator('button.btn.ghost, button.btn', {
      hasText: /Назад|←/,
    })
    if ((await back2.count()) > 0) await back2.first().click()
    await page.waitForSelector('.screen.home, .hero', { timeout: 10000 })

    // 7) Review (may be disabled)
    const reviewBtn = page.locator('button.card-cta.secondary', {
      hasText: 'Повтор слов',
    })
    const reviewDisabled = await reviewBtn.isDisabled()
    if (reviewDisabled) {
      note('Review disabled/empty (OK)')
    } else {
      await reviewBtn.click()
      await page.waitForTimeout(400)
      note('Review screen opened')
      const back3 = page.locator('button.btn.ghost, button.btn', {
        hasText: /Назад|←/,
      })
      if ((await back3.count()) > 0) await back3.first().click()
    }

    // 8) Seed unit 1 complete → quiz
    const seed = {
      version: 1,
      currentLevelId: 'level-1',
      lessons: {
        'l1-u1-l1': { completed: true, completedAt: new Date().toISOString(), score: 90 },
        'l1-u1-l2': { completed: true, completedAt: new Date().toISOString(), score: 90 },
        'l1-u1-l3': { completed: true, completedAt: new Date().toISOString(), score: 90 },
        'l1-u1-l4': { completed: true, completedAt: new Date().toISOString(), score: 90 },
      },
      quizzes: {},
      srs: {},
      streakDays: 1,
      lastStudyDate: new Date().toISOString().slice(0, 10),
    }
    await page.evaluate((state) => {
      localStorage.setItem('english-club-progress-v1', JSON.stringify(state))
    }, seed)
    await page.reload({ waitUntil: 'networkidle' })
    await page.waitForSelector('.screen.home, .hero', { timeout: 10000 })
    note('Seeded unit-1 completion in localStorage')

    // Continue may be quiz CTA
    const quizCta = page.locator('button.card-cta').filter({
      hasText: /Тест юнита|Unit 1 Quiz|Quiz/,
    })
    const homeQuizVisible = (await quizCta.count()) > 0
    if (homeQuizVisible) {
      note('Home Continue shows unit quiz')
    }

    // Open Level 1 → Unit Quiz
    await page.locator('.level-list .level-row, section.level-list button').first().click()
    await page.waitForSelector('.unit-block', { timeout: 10000 })
    const quizRow = page.locator('.lesson-row.quiz-row').first()
    const quizLocked = await quizRow.isDisabled()
    if (quizLocked) {
      bug('critical', 'Unit Quiz still locked after seeding 4 lessons')
    } else {
      note('Unit Quiz unlocked after seeding')
      await quizRow.click()
      await page.waitForSelector('.screen.lesson', { timeout: 10000 })
      note('Unit Quiz opened')

      // Answer 1–2 drill questions
      for (let q = 0; q < 2; q++) {
        if ((await page.locator('.options .option').count()) > 0) {
          await page.locator('.options .option').first().click()
          await page.locator('button.btn.primary', { hasText: 'Дальше' }).click()
          note(`Quiz question ${q + 1} answered`)
        } else if ((await page.locator('.builder-pool .chip').count()) > 0) {
          const n = await page.locator('.builder-pool .chip').count()
          for (let c = 0; c < n; c++) {
            await page.locator('.builder-pool .chip').first().click()
          }
          await page.locator('button.btn.primary', { hasText: 'Проверить' }).click()
          await page.locator('button.btn.primary', { hasText: 'Дальше' }).click()
          note(`Quiz builder question ${q + 1} answered`)
        } else {
          bug('minor', `Quiz Q${q + 1}: unexpected question UI`)
          break
        }
      }
    }

    if (consoleErrors.length) {
      for (const err of consoleErrors.slice(0, 10)) {
        bug('major', `Console error: ${err}`)
      }
    } else {
      note('No console errors observed')
    }
  } catch (e) {
    bug('critical', `Smoke run crashed: ${e?.message || e}`)
    console.error(e)
  } finally {
    await browser.close()
  }

  console.log('\n—— UI Summary ——')
  console.log(`Notes: ${notes.length}`)
  if (bugs.length) {
    console.log(`Bugs: ${bugs.length}`)
    for (const b of bugs) console.log(`  [${b.severity}] ${b.msg}`)
    process.exit(1)
  }
  console.log('PASSED — UI smoke OK')
  process.exit(0)
}

main()
