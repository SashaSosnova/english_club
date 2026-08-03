import type { LessonContent } from '../../types'
import { lessonContents as unit1 } from './l1-u1'

const all: Record<string, LessonContent> = {
  ...unit1,
}

export function getLessonContent(lessonId: string): LessonContent | null {
  return all[lessonId] ?? null
}
