import type { LessonContent } from '../../types'
import { lessonContents as unit1 } from './l1-u1'
import { lessonContents as unit2 } from './l1-u2'
import { lessonContents as unit3 } from './l1-u3'
import { lessonContents as unit4 } from './l1-u4'
import { lessonContents as unit5 } from './l1-u5'
import { lessonContents as unit6 } from './l1-u6'
import { lessonContents as l2unit1 } from './l2-u1'
import { lessonContents as l2unit2 } from './l2-u2'
import { lessonContents as l2unit3 } from './l2-u3'
import { lessonContents as l2unit4 } from './l2-u4'
import { lessonContents as l2unit5 } from './l2-u5'
import { lessonContents as l2unit6 } from './l2-u6'
import { lessonContents as l2unit7 } from './l2-u7'

const all: Record<string, LessonContent> = {
  ...unit1,
  ...unit2,
  ...unit3,
  ...unit4,
  ...unit5,
  ...unit6,
  ...l2unit1,
  ...l2unit2,
  ...l2unit3,
  ...l2unit4,
  ...l2unit5,
  ...l2unit6,
  ...l2unit7,
}

export function getLessonContent(lessonId: string): LessonContent | null {
  return all[lessonId] ?? null
}
