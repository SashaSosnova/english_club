import type { DrillExercise } from '../types'
import { getLevel, quizIdForUnit } from './catalog'
import { getLessonContent } from './lessons'

export type UnitQuiz = {
  id: string
  unitId: string
  levelId: string
  unitNumber: number
  title: string
  titleRu: string
  questions: DrillExercise[]
}

function pickDrills(unitId: string, levelId: string): DrillExercise[] {
  const unit = getLevel(levelId)?.units.find((u) => u.id === unitId)
  if (!unit) return []
  const drills: DrillExercise[] = []
  for (const lesson of unit.lessons) {
    const content = getLessonContent(lesson.id)
    if (!content) continue
    for (const ex of content.exercises) {
      if (ex.type === 'drill') drills.push(ex)
    }
  }
  return drills
}

/** Stable subset: take up to 8 drills spread across the unit. */
export function getUnitQuiz(levelId: string, unitId: string): UnitQuiz | null {
  const level = getLevel(levelId)
  const unit = level?.units.find((u) => u.id === unitId)
  if (!level || !unit) return null

  const drills = pickDrills(unitId, levelId)
  if (drills.length < 4) return null

  const step = Math.max(1, Math.floor(drills.length / 8))
  const questions: DrillExercise[] = []
  for (let i = 0; i < drills.length && questions.length < 8; i += step) {
    const d = drills[i]
    questions.push({
      ...d,
      id: `${quizIdForUnit(unitId)}-q${questions.length + 1}`,
    })
  }
  while (questions.length < Math.min(8, drills.length)) {
    const d = drills[questions.length]
    questions.push({
      ...d,
      id: `${quizIdForUnit(unitId)}-q${questions.length + 1}`,
    })
  }

  return {
    id: quizIdForUnit(unitId),
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
  for (const level of [getLevel('level-1'), getLevel('level-2')]) {
    if (!level) continue
    if (level.units.some((u) => u.id === unitId)) {
      return getUnitQuiz(level.id, unitId)
    }
  }
  return null
}
