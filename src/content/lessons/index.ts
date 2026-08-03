import type { LessonContent } from '../../types'
import { lessonContents as unit1 } from './l1-u1'
import { lessonContents as unit2 } from './l1-u2'
import { lessonContents as unit3 } from './l1-u3'

const all: Record<string, LessonContent> = {
  ...unit1,
  ...unit2,
  ...unit3,
}

export function getLessonContent(lessonId: string): LessonContent | null {
  return all[lessonId] ?? null
}
