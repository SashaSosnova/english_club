export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2'

export type ExerciseType =
  | 'explain'
  | 'drill'
  | 'builder'
  | 'cloze'
  | 'cards'
  | 'dialogue'
  | 'listening'
  | 'produce'

export type LessonMeta = {
  id: string
  number: number
  title: string
  titleRu: string
  grammar: string
  vocab: string[]
  hasContent: boolean
}

export type UnitMeta = {
  id: string
  number: number
  title: string
  titleRu: string
  lessons: LessonMeta[]
}

export type LevelMeta = {
  id: string
  number: number
  cefr: CefrLevel
  title: string
  titleRu: string
  goal: string
  units: UnitMeta[]
}

export type DrillExercise = {
  type: 'drill'
  id: string
  prompt: string
  promptRu?: string
  options: string[]
  answer: string
  explainRu?: string
}

export type BuilderExercise = {
  type: 'builder'
  id: string
  prompt: string
  promptRu?: string
  tokens: string[]
  answer: string[]
}

export type ClozeExercise = {
  type: 'cloze'
  id: string
  text: string
  gaps: { id: string; answer: string; options: string[] }[]
}

export type CardItem = {
  id: string
  term: string
  translation: string
  example: string
}

export type CardsExercise = {
  type: 'cards'
  id: string
  cards: CardItem[]
}

export type DialogueLine = {
  id: string
  speaker: string
  text?: string
  choices?: { text: string; correct: boolean }[]
}

export type DialogueExercise = {
  type: 'dialogue'
  id: string
  title: string
  lines: DialogueLine[]
}

export type ProduceExercise = {
  type: 'produce'
  id: string
  prompt: string
  promptRu: string
  hints: string[]
  minSentences: number
}

export type ExplainBlock = {
  type: 'explain'
  id: string
  title: string
  points: string[]
  examples: string[]
}

/** TTS scene with EN captions (text as subtitles) + short gist drills */
export type ListeningExercise = {
  type: 'listening'
  id: string
  title: string
  titleRu?: string
  lines: { speaker: string; text: string }[]
  gist: DrillExercise[]
}

export type Exercise =
  | ExplainBlock
  | DrillExercise
  | BuilderExercise
  | ClozeExercise
  | CardsExercise
  | DialogueExercise
  | ListeningExercise
  | ProduceExercise

export type LessonContent = {
  lessonId: string
  durationMin: number
  exercises: Exercise[]
}

export type LessonProgress = {
  completed: boolean
  completedAt?: string
  score?: number
  answersCorrect?: number
  answersTotal?: number
}

export type SrsCardState = {
  cardId: string
  term: string
  translation: string
  example: string
  ease: number
  intervalDays: number
  dueAt: string
  reps: number
}

export type ProgressState = {
  version: 1
  currentLevelId: string
  lessons: Record<string, LessonProgress>
  quizzes: Record<string, LessonProgress>
  srs: Record<string, SrsCardState>
  streakDays: number
  lastStudyDate?: string
}

export type NextAction =
  | { type: 'lesson'; lessonId: string; label: string; detail: string }
  | { type: 'quiz'; quizId: string; unitId: string; label: string; detail: string }
