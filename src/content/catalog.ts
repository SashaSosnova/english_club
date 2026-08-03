import type { LevelMeta, NextAction } from '../types'

function lessons(
  level: number,
  unit: number,
  items: { title: string; titleRu: string; grammar: string; vocab: string[] }[],
  contentThrough = 0,
): LevelMeta['units'][0]['lessons'] {
  return items.map((item, i) => {
    const number = (unit - 1) * 4 + i + 1
    return {
      id: `l${level}-u${unit}-l${i + 1}`,
      number,
      title: item.title,
      titleRu: item.titleRu,
      grammar: item.grammar,
      vocab: item.vocab,
      hasContent: number <= contentThrough,
    }
  })
}

export const levels: LevelMeta[] = [
  {
    id: 'level-1',
    number: 1,
    cefr: 'A1',
    title: 'Foundations',
    titleRu: 'Основы',
    goal: 'Говорить о себе, дне, еде и городе; понимать медленную речь.',
    units: [
      {
        id: 'l1-u1',
        number: 1,
        title: 'Me & people',
        titleRu: 'Я и люди вокруг',
        lessons: lessons(
          1,
          1,
          [
            {
              title: 'Hello & to be',
              titleRu: 'Знакомство и to be',
              grammar: 'am / is / are; negatives; Yes/No questions',
              vocab: [
                'hello',
                'hi',
                'goodbye',
                'name',
                'nice to meet you',
                'from',
                'country',
                'city',
                'yes',
                'no',
                'please',
                'thank you',
              ],
            },
            {
              title: 'a/an & things',
              titleRu: 'Артикли и вещи вокруг',
              grammar: 'a/an; this / that',
              vocab: [
                'pen',
                'book',
                'phone',
                'bag',
                'table',
                'chair',
                'door',
                'window',
                'water',
                'coffee',
                'ticket',
                'map',
              ],
            },
            {
              title: 'Family & possessives',
              titleRu: 'Семья и притяжательные',
              grammar: "my/your/his/her; possessive 's",
              vocab: [
                'mother',
                'father',
                'sister',
                'brother',
                'husband',
                'wife',
                'child',
                'children',
                'friend',
                'parents',
                'family',
                'people',
              ],
            },
            {
              title: 'Numbers & time',
              titleRu: 'Числа и время',
              grammar: "What's the time?; at + time; on + day",
              vocab: [
                "o'clock",
                'half past',
                'morning',
                'twelve',
                'fifteen',
                'twenty',
                'How much is it?',
                'weekend',
              ],
            },
          ],
          4,
        ),
      },
      {
        id: 'l1-u2',
        number: 2,
        title: 'Home & food',
        titleRu: 'Дом и еда',
        lessons: lessons(
          1,
          2,
          [
            {
              title: 'Plurals & these/those',
              titleRu: 'Множественное число',
              grammar: 'plurals; these / those',
              vocab: [
                'apple',
                'key',
                'bus',
                'man',
                'woman',
                'shoes',
                'glasses',
                'sandwich',
              ],
            },
            {
              title: 'There is / there are',
              titleRu: 'There is / there are',
              grammar: 'There is / There are; questions',
              vocab: [
                'room',
                'kitchen',
                'bathroom',
                'sofa',
                'fridge',
                'lamp',
                'wall',
                'floor',
              ],
            },
            {
              title: 'have got',
              titleRu: 'have got',
              grammar: "have got / has got; Have you got…?",
              vocab: [
                'car',
                'bike',
                'laptop',
                'pet',
                'job',
                'idea',
                'problem',
              ],
            },
            {
              title: 'Food & café',
              titleRu: 'Еда и кафе',
              grammar: "a/an + some; Can I have…; I'd like…",
              vocab: [
                'menu',
                'order',
                'tea',
                'juice',
                'salad',
                'soup',
                'bill',
                "I'd like",
                'bottle',
              ],
            },
          ],
          8,
        ),
      },
      {
        id: 'l1-u3',
        number: 3,
        title: 'Daily life',
        titleRu: 'Повседневная жизнь',
        lessons: lessons(
          1,
          3,
          [
            {
              title: 'Present Simple (I/you/we/they)',
              titleRu: 'Present Simple — I/you/we/they',
              grammar: "Present Simple + don't",
              vocab: [
                'live',
                'work',
                'study',
                'like',
                'want',
                'need',
                'speak',
                'cook',
              ],
            },
            {
              title: 'Present Simple (he/she/it)',
              titleRu: 'Present Simple — he/she/it',
              grammar: "-s/-es; doesn't",
              vocab: [
                'get up',
                'go',
                'start',
                'finish',
                'watch',
                'read',
                'play',
                'listen',
              ],
            },
            {
              title: 'Questions + Wh-',
              titleRu: 'Вопросы Do/Does и Wh-',
              grammar: 'Do/Does…?; What/Where/When/Who/Why/How',
              vocab: [
                'how often',
                'what time',
                'usually',
                'before',
                'after',
                'lunch',
                'dinner',
                'because',
              ],
            },
            {
              title: 'Routine',
              titleRu: 'Распорядок дня',
              grammar: 'Present Simple + time expressions',
              vocab: [
                'wake up',
                'have breakfast',
                'go to work',
                'go home',
                'busy',
                'free',
                'break',
                'sleep',
              ],
            },
          ],
          12,
        ),
      },
      {
        id: 'l1-u4',
        number: 4,
        title: 'City & ability',
        titleRu: 'Город и умения',
        lessons: lessons(
          1,
          4,
          [
            {
              title: "can / can't",
              titleRu: "can / can't",
              grammar: "can / can't; Can you…?",
              vocab: [
                'swim',
                'drive',
                'help',
                'understand',
                'wait',
                'open',
                'hear',
                'sing',
              ],
            },
            {
              title: 'Directions',
              titleRu: 'Дорога и императив',
              grammar: 'Imperatives; directions',
              vocab: [
                'turn left',
                'turn right',
                'straight on',
                'corner',
                'cross',
                'near',
                'next to',
                'opposite',
              ],
            },
            {
              title: 'Frequency',
              titleRu: 'Наречия частотности',
              grammar: 'always / usually / often / sometimes / never',
              vocab: [
                'always',
                'usually',
                'often',
                'sometimes',
                'rarely',
                'never',
                'once',
                'twice',
              ],
            },
            {
              title: 'City & transport',
              titleRu: 'Город и транспорт',
              grammar: 'review can + directions + frequency',
              vocab: [
                'metro',
                'station',
                'ticket',
                'stop',
                'airport',
                'centre',
                'museum',
                'hotel',
              ],
            },
          ],
          24,
        ),
      },
      {
        id: 'l1-u5',
        number: 5,
        title: 'Place, time & now',
        titleRu: 'Место, время и сейчас',
        lessons: lessons(
          1,
          5,
          [
            {
              title: 'Prepositions of place',
              titleRu: 'Предлоги места',
              grammar: 'in, on, at, next to, between…',
              vocab: [
                'next to',
                'between',
                'behind',
                'in front of',
                'entrance',
                'exit',
                'bridge',
                'square',
              ],
            },
            {
              title: 'Prepositions of time',
              titleRu: 'Предлоги времени',
              grammar: 'in / on / at',
              vocab: [
                'Monday',
                'birthday',
                'holiday',
                'noon',
                'midnight',
                'appointment',
                'meeting',
                'date',
              ],
            },
            {
              title: 'Present Continuous',
              titleRu: 'Present Continuous',
              grammar: 'am/is/are + V-ing',
              vocab: [
                'right now',
                'wearing',
                'waiting',
                'sitting',
                'standing',
                'raining',
                'happening',
                'talking',
              ],
            },
            {
              title: 'Simple vs Continuous',
              titleRu: 'Simple vs Continuous',
              grammar: 'habits vs now',
              vocab: [
                'usually',
                'now',
                'at the moment',
                'today',
                'this week',
                'strange',
                'normal',
                'tired',
              ],
            },
          ],
          24,
        ),
      },
      {
        id: 'l1-u6',
        number: 6,
        title: 'Past & plans',
        titleRu: 'Прошлое и планы',
        lessons: lessons(
          1,
          6,
          [
            {
              title: 'was / were',
              titleRu: 'was / were',
              grammar: 'was / were; questions',
              vocab: [
                'yesterday',
                'last night',
                'last week',
                'ago',
                'ill',
                'late',
                'early',
                'away',
              ],
            },
            {
              title: 'Past Simple regular',
              titleRu: 'Past Simple — правильные',
              grammar: 'V-ed',
              vocab: [
                'worked',
                'visited',
                'watched',
                'played',
                'cooked',
                'stayed',
                'walked',
                'called',
              ],
            },
            {
              title: 'Past Simple irregular',
              titleRu: 'Past Simple — неправильные',
              grammar: 'core irregulars',
              vocab: [
                'went',
                'saw',
                'bought',
                'had',
                'met',
                'took',
                'ate',
                'left',
              ],
            },
            {
              title: 'Past questions & plans',
              titleRu: 'Вопросы о прошлом и планы',
              grammar: 'Did…?; going to; would like',
              vocab: [
                'tomorrow',
                'next week',
                'plan',
                'trip',
                'enjoy',
                'fun',
                'hungry',
                'ready',
              ],
            },
          ],
          24,
        ),
      },
    ],
  },
  {
    id: 'level-2',
    number: 2,
    cefr: 'A2',
    title: 'Everyday English',
    titleRu: 'Повседневный английский',
    goal: 'Путешествия, истории, listening TTS; позже — клипы с EN-субтитрами.',
    units: [
      {
        id: 'l2-u1',
        number: 1,
        title: 'Arrangements & past',
        titleRu: 'Договорённости и прошлое',
        lessons: lessons(
          2,
          1,
          [
            {
              title: 'Continuous for future',
              titleRu: 'Continuous для будущего',
              grammar: 'Present Continuous for arrangements',
              vocab: [
                'fly',
                'stay',
                'book',
                'appointment',
                'tonight',
                'invite',
                'join',
                'this weekend',
              ],
            },
            {
              title: 'Past expansion',
              titleRu: 'Past Simple шире',
              grammar: 'Past Simple + time markers',
              vocab: [
                'flight',
                'delayed',
                'missed',
                'arrived',
                'spent',
                'crowded',
                'expensive',
                'journey',
              ],
            },
            {
              title: 'used to',
              titleRu: 'used to',
              grammar: 'used to + V',
              vocab: [
                'used to',
                'habit',
                'abroad',
                'shy',
                'afraid',
                'change',
              ],
            },
            {
              title: 'will vs going to',
              titleRu: 'will vs going to',
              grammar: 'will vs going to',
              vocab: [
                'probably',
                'maybe',
                'promise',
                'forecast',
                'decision',
                'soon',
              ],
            },
          ],
          28,
        ),
      },
      {
        id: 'l2-u2',
        number: 2,
        title: 'Comparing & advice',
        titleRu: 'Сравнение и советы',
        lessons: lessons(
          2,
          2,
          [
            {
              title: 'Comparatives',
              titleRu: 'Сравнительная степень',
              grammar: 'comparatives',
              vocab: ['cheaper', 'better', 'more comfortable'],
            },
            {
              title: 'Superlatives',
              titleRu: 'Превосходная степень',
              grammar: 'superlatives',
              vocab: ['the best', 'the nearest'],
            },
            {
              title: 'should / must / have to',
              titleRu: 'should / must / have to',
              grammar: 'modals of advice & obligation',
              vocab: ['should', 'must', 'passport', 'visa'],
            },
            {
              title: 'may / might',
              titleRu: 'may / might',
              grammar: 'possibility',
              vocab: ['might', 'available', 'full'],
            },
          ],
          28,
        ),
      },
      {
        id: 'l2-u3',
        number: 3,
        title: 'Conditionals & Perfect',
        titleRu: 'Условие и Perfect',
        lessons: lessons(
          2,
          3,
          [
            {
              title: 'First Conditional',
              titleRu: 'First Conditional',
              grammar: 'If + Present, will…',
              vocab: ['if', 'miss', 'refund'],
            },
            {
              title: 'Present Perfect intro',
              titleRu: 'Present Perfect — введение',
              grammar: 'ever / never / just…',
              vocab: ['ever', 'never', 'already', 'yet'],
            },
            {
              title: 'Perfect vs Past',
              titleRu: 'Perfect vs Past Simple',
              grammar: 'experience vs finished time',
              vocab: ['recently', 'ago', 'last year'],
            },
            {
              title: 'Travel story',
              titleRu: 'Travel story',
              grammar: 'mixed tenses review',
              vocab: ['luggage', 'gate', 'boarding pass'],
            },
          ],
          28,
        ),
      },
      {
        id: 'l2-u4',
        number: 4,
        title: 'Hotel, food & shopping',
        titleRu: 'Отель, еда и покупки',
        lessons: lessons(
          2,
          4,
          [
            {
              title: 'something / anything…',
              titleRu: 'something / anything…',
              grammar: 'compounds',
              vocab: ['something', 'anything', 'wrong'],
            },
            {
              title: 'too / enough',
              titleRu: 'too / enough',
              grammar: 'too / enough',
              vocab: ['too hot', 'enough'],
            },
            {
              title: 'Restaurant requests',
              titleRu: 'Ресторан',
              grammar: 'polite requests',
              vocab: ['allergy', 'bill', 'recommend'],
            },
            {
              title: 'Shopping & returns',
              titleRu: 'Покупки и возврат',
              grammar: 'functional review',
              vocab: ['receipt', 'exchange', 'size'],
            },
          ],
          28,
        ),
      },
      {
        id: 'l2-u5',
        number: 5,
        title: 'People, places & purpose',
        titleRu: 'Люди, места и цель',
        lessons: lessons(
          2,
          5,
          [
            {
              title: 'Relative pronouns',
              titleRu: 'who / which / that',
              grammar: 'relative pronouns',
              vocab: ['who', 'which', 'that'],
            },
            {
              title: 'Passive Present',
              titleRu: 'Passive Present',
              grammar: 'is made / is called',
              vocab: ['made', 'spoken', 'famous for'],
            },
            {
              title: 'Gerunds',
              titleRu: 'Gerunds after like/enjoy',
              grammar: 'like + V-ing',
              vocab: ['enjoy', 'hate', 'travelling'],
            },
            {
              title: 'Infinitive of purpose',
              titleRu: 'to + V (цель)',
              grammar: 'infinitive of purpose',
              vocab: ['to buy', 'to learn', 'to visit'],
            },
          ],
          28,
        ),
      },
      {
        id: 'l2-u6',
        number: 6,
        title: 'Opinions, health & linking',
        titleRu: 'Мнения, здоровье, связки',
        lessons: lessons(
          2,
          6,
          [
            {
              title: 'Articles review',
              titleRu: 'Артикли — повтор',
              grammar: 'a/an/the/zero traps',
              vocab: ['school', 'hospital', 'cinema'],
            },
            {
              title: 'Linking words',
              titleRu: 'Связующие слова',
              grammar: 'and/but/because/so/then',
              vocab: ['because', 'so', 'after that'],
            },
            {
              title: 'Doctor & pharmacy',
              titleRu: 'Врач и аптека',
              grammar: 'should + symptoms',
              vocab: ['headache', 'medicine', 'pharmacy'],
            },
            {
              title: 'Emotions & opinions',
              titleRu: 'Эмоции и мнения',
              grammar: 'agree / disagree',
              vocab: ['I think', 'agree', 'worried'],
            },
          ],
          28,
        ),
      },
      {
        id: 'l2-u7',
        number: 7,
        title: 'Messages & A2 exit',
        titleRu: 'Сообщения и выход из A2',
        lessons: lessons(
          2,
          7,
          [
            {
              title: 'Reported speech intro',
              titleRu: 'Reported speech — введение',
              grammar: 'say/tell + that',
              vocab: ['said', 'told', 'message'],
            },
            {
              title: 'Housing problems',
              titleRu: 'Проблемы с жильём',
              grammar: 'problem language',
              vocab: ['rent', 'noisy', 'repair'],
            },
            {
              title: 'Tech help',
              titleRu: 'Помощь с техникой',
              grammar: 'instructions',
              vocab: ['password', 'restart', 'support'],
            },
            {
              title: 'Level Review',
              titleRu: 'Обзор уровня A2',
              grammar: 'spiral review',
              vocab: ['travel', 'opinion', 'story'],
            },
          ],
          28,
        ),
      },
    ],
  },
  {
    id: 'level-3',
    number: 3,
    cefr: 'B1',
    title: 'Confidence',
    titleRu: 'Уверенность',
    goal: 'Связные истории, книги и фильмы с EN-субтитрами.',
    units: [],
  },
  {
    id: 'level-4',
    number: 4,
    cefr: 'B2',
    title: 'Fluency bridge',
    titleRu: 'Мост к беглости',
    goal: 'Литература, фильмы без RU, свободное общение в поездках.',
    units: [],
  },
]

export function getLevel(levelId: string) {
  return levels.find((l) => l.id === levelId)
}

export function getLessonMeta(lessonId: string) {
  for (const level of levels) {
    for (const unit of level.units) {
      const lesson = unit.lessons.find((l) => l.id === lessonId)
      if (lesson) return { level, unit, lesson }
    }
  }
  return null
}

export function allLessonsFlat(levelId: string) {
  const level = getLevel(levelId)
  if (!level) return []
  return level.units.flatMap((u) => u.lessons)
}

export function contentLessons(levelId: string) {
  return allLessonsFlat(levelId).filter((l) => l.hasContent)
}

export function getUnit(levelId: string, unitId: string) {
  return getLevel(levelId)?.units.find((u) => u.id === unitId) ?? null
}

export function isLessonUnlocked(
  levelId: string,
  lessonId: string,
  completedIds: Set<string>,
) {
  const list = contentLessons(levelId)
  const idx = list.findIndex((l) => l.id === lessonId)
  if (idx < 0) return false
  if (idx === 0) return true
  return completedIds.has(list[idx - 1].id)
}

export function isUnitComplete(unitId: string, completedIds: Set<string>) {
  for (const level of levels) {
    const unit = level.units.find((u) => u.id === unitId)
    if (!unit) continue
    const withContent = unit.lessons.filter((l) => l.hasContent)
    if (withContent.length === 0) return false
    return withContent.every((l) => completedIds.has(l.id))
  }
  return false
}

export function isQuizUnlocked(unitId: string, completedIds: Set<string>) {
  return isUnitComplete(unitId, completedIds)
}

export function quizIdForUnit(unitId: string) {
  return `quiz-${unitId}`
}

export function nextPlayableLesson(levelId: string, completedIds: Set<string>) {
  const list = contentLessons(levelId)
  const next = list.find(
    (l) => !completedIds.has(l.id) && isLessonUnlocked(levelId, l.id, completedIds),
  )
  return next ?? null
}

export function pendingUnitQuiz(
  levelId: string,
  completedIds: Set<string>,
  completedQuizIds: Set<string>,
) {
  const level = getLevel(levelId)
  if (!level) return null
  for (const unit of level.units) {
    const qid = quizIdForUnit(unit.id)
    if (
      isUnitComplete(unit.id, completedIds) &&
      !completedQuizIds.has(qid) &&
      unit.lessons.some((l) => l.hasContent)
    ) {
      return unit
    }
  }
  return null
}

export function nextAction(
  levelId: string,
  completedIds: Set<string>,
  completedQuizIds: Set<string>,
): NextAction | null {
  const quizUnit = pendingUnitQuiz(levelId, completedIds, completedQuizIds)
  if (quizUnit) {
    return {
      type: 'quiz',
      quizId: quizIdForUnit(quizUnit.id),
      unitId: quizUnit.id,
      label: `Unit ${quizUnit.number} Quiz`,
      detail: quizUnit.titleRu,
    }
  }
  const lesson = nextPlayableLesson(levelId, completedIds)
  if (!lesson) return null
  return {
    type: 'lesson',
    lessonId: lesson.id,
    label: `Урок ${lesson.number}. ${lesson.titleRu}`,
    detail: lesson.grammar,
  }
}

export function isLevelUnlocked(
  levelId: string,
  completedIds: Set<string>,
) {
  if (levelId === 'level-1') return true
  if (levelId === 'level-2') {
    // In dev, A2 is open for testing; in production — after Level 1 lessons.
    if (import.meta.env.DEV) return true
    const l1 = contentLessons('level-1')
    return l1.length > 0 && l1.every((l) => completedIds.has(l.id))
  }
  return false
}

/** Continue across levels: finish A1 path, then A2. */
export function continueAction(
  completedIds: Set<string>,
  completedQuizIds: Set<string>,
): NextAction | null {
  const a1 = nextAction('level-1', completedIds, completedQuizIds)
  if (a1) return a1
  if (!isLevelUnlocked('level-2', completedIds)) return null
  return nextAction('level-2', completedIds, completedQuizIds)
}

export function activeLevelId(completedIds: Set<string>) {
  const l1Done = contentLessons('level-1').every((l) =>
    completedIds.has(l.id),
  )
  if (l1Done && isLevelUnlocked('level-2', completedIds)) return 'level-2'
  return 'level-1'
}
