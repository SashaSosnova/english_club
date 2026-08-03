import { contentLessons, getLevel, quizIdForUnit } from '../content/catalog'
import type { LessonProgress, ProgressState } from '../types'

export type WeakLesson = {
  lessonId: string
  number: number
  titleRu: string
  grammar: string
  score: number
}

export type UnitProgressRow = {
  unitId: string
  number: number
  titleRu: string
  lessonsDone: number
  lessonsTotal: number
  quiz?: LessonProgress
  quizReady: boolean
}

export function completedQuizIds(progress: ProgressState) {
  return new Set(
    Object.entries(progress.quizzes ?? {})
      .filter(([, v]) => v.completed)
      .map(([id]) => id),
  )
}

export function weakLessons(
  progress: ProgressState,
  levelId: string,
  threshold = 70,
): WeakLesson[] {
  const level = getLevel(levelId)
  if (!level) return []
  const rows: WeakLesson[] = []
  for (const lesson of contentLessons(levelId)) {
    const p = progress.lessons[lesson.id]
    if (!p?.completed) continue
    const score = p.score ?? 100
    if (score < threshold) {
      rows.push({
        lessonId: lesson.id,
        number: lesson.number,
        titleRu: lesson.titleRu,
        grammar: lesson.grammar,
        score,
      })
    }
  }
  return rows.sort((a, b) => a.score - b.score)
}

export function unitProgressRows(
  progress: ProgressState,
  levelId: string,
  completedIds: Set<string>,
): UnitProgressRow[] {
  const level = getLevel(levelId)
  if (!level) return []
  return level.units.map((unit) => {
    const withContent = unit.lessons.filter((l) => l.hasContent)
    const lessonsDone = withContent.filter((l) => completedIds.has(l.id)).length
    const qid = quizIdForUnit(unit.id)
    return {
      unitId: unit.id,
      number: unit.number,
      titleRu: unit.titleRu,
      lessonsDone,
      lessonsTotal: withContent.length,
      quiz: progress.quizzes?.[qid],
      quizReady:
        withContent.length > 0 && lessonsDone === withContent.length,
    }
  })
}

export function levelCompletionPct(
  completedIds: Set<string>,
  levelId: string,
) {
  const list = contentLessons(levelId)
  if (list.length === 0) return 0
  const done = list.filter((l) => completedIds.has(l.id)).length
  return Math.round((done / list.length) * 100)
}
