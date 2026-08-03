import type {
  BuilderExercise,
  ClozeExercise,
  DrillExercise,
} from '../types'
import { getLevel, quizIdForUnit } from './catalog'
import { getLessonContent } from './lessons'

export type QuizQuestion = DrillExercise | ClozeExercise | BuilderExercise

export type UnitQuiz = {
  id: string
  unitId: string
  levelId: string
  unitNumber: number
  title: string
  titleRu: string
  questions: QuizQuestion[]
}

function collect(unitId: string, levelId: string) {
  const unit = getLevel(levelId)?.units.find((u) => u.id === unitId)
  const drills: DrillExercise[] = []
  const cloze: ClozeExercise[] = []
  const builders: BuilderExercise[] = []
  if (!unit) return { drills, cloze, builders }

  for (const lesson of unit.lessons) {
    const content = getLessonContent(lesson.id)
    if (!content) continue
    for (const ex of content.exercises) {
      if (ex.type === 'drill') drills.push(ex)
      if (ex.type === 'cloze') cloze.push(ex)
      if (ex.type === 'builder') builders.push(ex)
    }
  }
  return { drills, cloze, builders }
}

function takeSpread<T extends { id: string }>(
  items: T[],
  count: number,
  prefix: string,
): T[] {
  if (items.length === 0 || count <= 0) return []
  const step = Math.max(1, Math.floor(items.length / count))
  const out: T[] = []
  for (let i = 0; i < items.length && out.length < count; i += step) {
    out.push({ ...items[i], id: `${prefix}-${out.length + 1}` })
  }
  let j = 0
  while (out.length < Math.min(count, items.length)) {
    out.push({ ...items[j], id: `${prefix}-${out.length + 1}` })
    j += 1
  }
  return out
}

/** Up to 6 drills + 1 cloze + 1 builder when available. */
export function getUnitQuiz(levelId: string, unitId: string): UnitQuiz | null {
  const level = getLevel(levelId)
  const unit = level?.units.find((u) => u.id === unitId)
  if (!level || !unit) return null

  const { drills, cloze, builders } = collect(unitId, levelId)
  if (drills.length < 4) return null

  const qid = quizIdForUnit(unitId)
  const questions: QuizQuestion[] = [
    ...takeSpread(drills, 6, `${qid}-d`),
    ...takeSpread(cloze, 1, `${qid}-c`),
    ...takeSpread(builders, 1, `${qid}-b`),
  ]

  return {
    id: qid,
    unitId,
    levelId,
    unitNumber: unit.number,
    title: `Unit ${unit.number} Quiz`,
    titleRu: `Тест юнита ${unit.number}: ${unit.titleRu}`,
    questions,
  }
}

export function getQuizById(quizId: string): UnitQuiz | null {
  if (!quizId.startsWith('quiz-')) return null
  const unitId = quizId.slice('quiz-'.length)
  for (const levelId of ['level-1', 'level-2', 'level-3', 'level-4']) {
    const level = getLevel(levelId)
    if (!level) continue
    if (level.units.some((u) => u.id === unitId)) {
      return getUnitQuiz(level.id, unitId)
    }
  }
  return null
}
