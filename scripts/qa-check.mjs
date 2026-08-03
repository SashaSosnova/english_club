/**
 * Content integrity + unlock logic checks for English Club.
 * Run: npx --yes tsx scripts/qa-check.mjs
 */
import {
  contentLessons,
  isLessonUnlocked,
  isQuizUnlocked,
  levels,
} from '../src/content/catalog.ts'
import { getLessonContent } from '../src/content/lessons/index.ts'
import { getUnitQuiz } from '../src/content/quizzes.ts'

const LEVEL_ID = 'level-1'
const errors = []
const warnings = []

function fail(msg) {
  errors.push(msg)
}

function warn(msg) {
  warnings.push(msg)
}

function sortedMultiset(arr) {
  return [...arr].sort((a, b) => String(a).localeCompare(String(b)))
}

function sameMultiset(a, b) {
  if (a.length !== b.length) return false
  const sa = sortedMultiset(a)
  const sb = sortedMultiset(b)
  return sa.every((v, i) => v === sb[i])
}

console.log('English Club QA — content integrity\n')

const LEVEL_IDS = ['level-1', 'level-2']
const allWithContent = []

for (const levelId of LEVEL_IDS) {
  const level = levels.find((l) => l.id === levelId)
  if (!level) {
    fail(`Level ${levelId} not found in catalog`)
    continue
  }
  const withContent = contentLessons(levelId)
  allWithContent.push(...withContent)
  console.log(`1) ${levelId} hasContent lessons — ${withContent.length}`)

  for (const lesson of withContent) {
    const content = getLessonContent(lesson.id)
    if (!content) {
      fail(`Missing lesson content for ${lesson.id} (${lesson.titleRu})`)
      continue
    }
    if (content.lessonId !== lesson.id) {
      fail(
        `lessonId mismatch: catalog=${lesson.id} content.lessonId=${content.lessonId}`,
      )
    }

    const exercises = content.exercises ?? []
    if (exercises.length < 1) {
      fail(`${lesson.id}: no exercises`)
      continue
    }

    const ids = exercises.map((e) => e.id)
    const unique = new Set(ids)
    if (unique.size !== ids.length) {
      const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
      fail(
        `${lesson.id}: duplicate exercise ids: ${[...new Set(dupes)].join(', ')}`,
      )
    }

    for (const ex of exercises) {
      if (ex.type === 'drill') {
        if (!ex.options?.includes(ex.answer)) {
          fail(
            `${lesson.id}/${ex.id}: drill answer "${ex.answer}" not in options [${ex.options?.join(', ')}]`,
          )
        }
      }

      if (ex.type === 'cloze') {
        for (const gap of ex.gaps ?? []) {
          if (!gap.options?.includes(gap.answer)) {
            fail(
              `${lesson.id}/${ex.id}/${gap.id}: cloze answer "${gap.answer}" not in options`,
            )
          }
        }
      }

      if (ex.type === 'builder') {
        if (!sameMultiset(ex.answer ?? [], ex.tokens ?? [])) {
          fail(`${lesson.id}/${ex.id}: builder answer is not a permutation of tokens`)
        }
      }

      if (ex.type === 'dialogue') {
        for (const line of ex.lines ?? []) {
          if (!line.choices?.length) continue
          const correct = line.choices.filter((c) => c.correct)
          if (correct.length < 1) {
            fail(
              `${lesson.id}/${ex.id}/${line.id}: dialogue choice line has no correct:true`,
            )
          }
        }
      }

      if (ex.type === 'listening') {
        if (!ex.lines?.length) {
          fail(`${lesson.id}/${ex.id}: listening has no lines`)
        }
        for (const g of ex.gist ?? []) {
          if (g.type === 'drill' && !g.options?.includes(g.answer)) {
            fail(
              `${lesson.id}/${ex.id}/${g.id}: listening gist answer not in options`,
            )
          }
        }
      }
    }
  }
}

const withContent = contentLessons(LEVEL_ID)
console.log('2) Exercises / unique ids / drills / cloze / builder / dialogue / listening — done')

console.log('3) Unit quizzes')
const quizPairs = [
  ...['l1-u1', 'l1-u2', 'l1-u3', 'l1-u4', 'l1-u5', 'l1-u6'].map((id) => [
    'level-1',
    id,
  ]),
  ...['l2-u1', 'l2-u2', 'l2-u3', 'l2-u4', 'l2-u5', 'l2-u6', 'l2-u7'].map(
    (id) => ['level-2', id],
  ),
]
for (const [levelId, unitId] of quizPairs) {
  const quiz = getUnitQuiz(levelId, unitId)
  if (!quiz) {
    fail(`getUnitQuiz('${levelId}', '${unitId}') returned null`)
    continue
  }
  if (quiz.questions.length < 4) {
    fail(
      `${unitId} quiz has only ${quiz.questions.length} questions (expected ≥4)`,
    )
  }
  const types = new Set(quiz.questions.map((q) => q.type))
  console.log(
    `   ${unitId}: ${quiz.questions.length} q — types: ${[...types].join(', ')}`,
  )
}

console.log('4) Unlock logic')
const empty = new Set()
const lesson1 = withContent[0]
const lesson2 = withContent[1]
if (!lesson1 || !lesson2) {
  fail('Need at least 2 content lessons for unlock checks')
} else {
  if (!isLessonUnlocked(LEVEL_ID, lesson1.id, empty)) {
    fail(`Lesson ${lesson1.id} should be unlocked with empty completed set`)
  } else {
    console.log(`   ✓ ${lesson1.id} unlocked with empty set`)
  }
  if (isLessonUnlocked(LEVEL_ID, lesson2.id, empty)) {
    fail(`Lesson ${lesson2.id} should be locked until ${lesson1.id} completed`)
  } else {
    console.log(`   ✓ ${lesson2.id} locked until previous completed`)
  }
  const after1 = new Set([lesson1.id])
  if (!isLessonUnlocked(LEVEL_ID, lesson2.id, after1)) {
    fail(`Lesson ${lesson2.id} should unlock after completing ${lesson1.id}`)
  } else {
    console.log(`   ✓ ${lesson2.id} unlocks after ${lesson1.id}`)
  }
}

const level1 = levels.find((l) => l.id === 'level-1')
const unit1 = level1?.units.find((u) => u.id === 'l1-u1')
if (unit1) {
  const u1Lessons = unit1.lessons.filter((l) => l.hasContent)
  if (isQuizUnlocked('l1-u1', empty)) {
    fail('Unit 1 quiz should be locked with empty completed set')
  } else {
    console.log('   ✓ Unit 1 quiz locked with empty set')
  }
  const three = new Set(u1Lessons.slice(0, 3).map((l) => l.id))
  if (isQuizUnlocked('l1-u1', three)) {
    fail('Unit 1 quiz should stay locked until all 4 lessons completed')
  } else {
    console.log('   ✓ Unit 1 quiz locked with 3/4 lessons')
  }
  const allFour = new Set(u1Lessons.map((l) => l.id))
  if (!isQuizUnlocked('l1-u1', allFour)) {
    fail('Unit 1 quiz should unlock after all 4 unit lessons completed')
  } else {
    console.log('   ✓ Unit 1 quiz unlocks after 4 lessons')
  }
}

printSummaryAndExit()

function printSummaryAndExit() {
  console.log('\n—— Summary ——')
  if (warnings.length) {
    console.log(`Warnings (${warnings.length}):`)
    for (const w of warnings) console.log(`  ⚠ ${w}`)
  }
  if (errors.length) {
    console.log(`FAILED — ${errors.length} error(s):`)
    for (const e of errors) console.log(`  ✗ ${e}`)
    process.exit(1)
  }
  console.log('PASSED — all integrity checks OK')
  process.exit(0)
}
