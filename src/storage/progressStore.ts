import type { CardItem, ProgressState, SrsCardState } from '../types'

const KEY = 'english-club-progress-v1'

const defaultState = (): ProgressState => ({
  version: 1,
  currentLevelId: 'level-1',
  lessons: {},
  srs: {},
  streakDays: 0,
})

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw) as ProgressState
    if (parsed.version !== 1) return defaultState()
    return parsed
  } catch {
    return defaultState()
  }
}

export function saveProgress(state: ProgressState) {
  localStorage.setItem(KEY, JSON.stringify(state))
}

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

function addDays(isoDate: string, days: number) {
  const d = new Date(isoDate + 'T12:00:00')
  d.setDate(d.getDate() + days)
  return d.toISOString()
}

export function touchStreak(state: ProgressState): ProgressState {
  const today = todayKey()
  if (state.lastStudyDate === today) return state

  let streak = 1
  if (state.lastStudyDate) {
    const prev = new Date(state.lastStudyDate + 'T12:00:00')
    const now = new Date(today + 'T12:00:00')
    const diff = Math.round((now.getTime() - prev.getTime()) / 86400000)
    streak = diff === 1 ? state.streakDays + 1 : 1
  }

  return {
    ...state,
    streakDays: streak,
    lastStudyDate: today,
  }
}

export function completeLesson(
  state: ProgressState,
  lessonId: string,
  score: { correct: number; total: number },
): ProgressState {
  const next = touchStreak(state)
  return {
    ...next,
    lessons: {
      ...next.lessons,
      [lessonId]: {
        completed: true,
        completedAt: new Date().toISOString(),
        score: score.total ? Math.round((score.correct / score.total) * 100) : 100,
        answersCorrect: score.correct,
        answersTotal: score.total,
      },
    },
  }
}

export function upsertSrsCards(
  state: ProgressState,
  cards: CardItem[],
): ProgressState {
  const srs = { ...state.srs }
  const now = new Date().toISOString()
  for (const card of cards) {
    if (srs[card.id]) continue
    srs[card.id] = {
      cardId: card.id,
      term: card.term,
      translation: card.translation,
      example: card.example,
      ease: 2.3,
      intervalDays: 0,
      dueAt: now,
      reps: 0,
    }
  }
  return { ...state, srs }
}

export function reviewSrsCard(
  state: ProgressState,
  cardId: string,
  knew: boolean,
): ProgressState {
  const card = state.srs[cardId]
  if (!card) return state

  let intervalDays: number
  let ease = card.ease
  let reps = card.reps

  if (!knew) {
    intervalDays = 0
    reps = 0
    ease = Math.max(1.3, ease - 0.2)
  } else if (reps === 0) {
    intervalDays = 1
    reps = 1
  } else if (reps === 1) {
    intervalDays = 3
    reps = 2
  } else {
    intervalDays = Math.max(1, Math.round(card.intervalDays * ease))
    reps += 1
    ease += 0.05
  }

  const updated: SrsCardState = {
    ...card,
    ease,
    intervalDays,
    reps,
    dueAt: addDays(todayKey(), intervalDays),
  }

  return touchStreak({
    ...state,
    srs: { ...state.srs, [cardId]: updated },
  })
}

export function dueSrsCards(state: ProgressState, limit = 12): SrsCardState[] {
  const now = Date.now()
  return Object.values(state.srs)
    .filter((c) => new Date(c.dueAt).getTime() <= now)
    .sort((a, b) => a.dueAt.localeCompare(b.dueAt))
    .slice(0, limit)
}
