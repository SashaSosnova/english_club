import type { LevelMeta } from '../types'

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
                'o\'clock',
                'half past',
                'morning',
                'afternoon',
                'evening',
                'today',
                'tomorrow',
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
        lessons: lessons(1, 3, [
          {
            title: 'Present Simple (I/you/we/they)',
            titleRu: 'Present Simple — I/you/we/they',
            grammar: "Present Simple + don't",
            vocab: ['live', 'work', 'study', 'like', 'speak'],
          },
          {
            title: 'Present Simple (he/she/it)',
            titleRu: 'Present Simple — he/she/it',
            grammar: "-s/-es; doesn't",
            vocab: ['get up', 'go', 'start', 'finish', 'watch'],
          },
          {
            title: 'Questions + Wh-',
            titleRu: 'Вопросы Do/Does и Wh-',
            grammar: 'Do/Does…?; What/Where/When/Who/Why/How',
            vocab: ['how often', 'what time', 'usually', 'lunch'],
          },
          {
            title: 'Routine',
            titleRu: 'Распорядок дня',
            grammar: 'Present Simple + time expressions',
            vocab: ['wake up', 'have breakfast', 'go to work', 'busy'],
          },
        ]),
      },
      {
        id: 'l1-u4',
        number: 4,
        title: 'City & ability',
        titleRu: 'Город и умения',
        lessons: lessons(1, 4, [
          {
            title: 'can / can\'t',
            titleRu: 'can / can\'t',
            grammar: 'can / can\'t; Can you…?',
            vocab: ['swim', 'drive', 'help', 'understand'],
          },
          {
            title: 'Directions',
            titleRu: 'Дорога и императив',
            grammar: 'Imperatives; directions',
            vocab: ['turn left', 'straight on', 'near', 'opposite'],
          },
          {
            title: 'Frequency',
            titleRu: 'Наречия частотности',
            grammar: 'always / usually / often / sometimes / never',
            vocab: ['always', 'often', 'sometimes', 'never'],
          },
          {
            title: 'City & transport',
            titleRu: 'Город и транспорт',
            grammar: 'review can + directions + frequency',
            vocab: ['bus', 'train', 'ticket', 'station', 'hotel'],
          },
        ]),
      },
      {
        id: 'l1-u5',
        number: 5,
        title: 'Place, time & now',
        titleRu: 'Место, время и сейчас',
        lessons: lessons(1, 5, [
          {
            title: 'Prepositions of place',
            titleRu: 'Предлоги места',
            grammar: 'in, on, at, next to, between…',
            vocab: ['left', 'right', 'near', 'entrance'],
          },
          {
            title: 'Prepositions of time',
            titleRu: 'Предлоги времени',
            grammar: 'in / on / at',
            vocab: ['Monday', 'birthday', 'night', 'meeting'],
          },
          {
            title: 'Present Continuous',
            titleRu: 'Present Continuous',
            grammar: 'am/is/are + V-ing',
            vocab: ['doing', 'wearing', 'waiting', 'raining'],
          },
          {
            title: 'Simple vs Continuous',
            titleRu: 'Simple vs Continuous',
            grammar: 'habits vs now',
            vocab: ['usually', 'now', 'at the moment', 'today'],
          },
        ]),
      },
      {
        id: 'l1-u6',
        number: 6,
        title: 'Past & plans',
        titleRu: 'Прошлое и планы',
        lessons: lessons(1, 6, [
          {
            title: 'was / were',
            titleRu: 'was / were',
            grammar: 'was / were; questions',
            vocab: ['yesterday', 'last week', 'ago', 'late'],
          },
          {
            title: 'Past Simple regular',
            titleRu: 'Past Simple — правильные',
            grammar: 'V-ed',
            vocab: ['worked', 'visited', 'watched', 'stayed'],
          },
          {
            title: 'Past Simple irregular',
            titleRu: 'Past Simple — неправильные',
            grammar: 'core irregulars',
            vocab: ['went', 'had', 'saw', 'bought', 'met'],
          },
          {
            title: 'Past questions & plans',
            titleRu: 'Вопросы о прошлом и планы',
            grammar: 'Did…?; going to; would like',
            vocab: ['tomorrow', 'plan', 'trip', "I'd like"],
          },
        ]),
      },
    ],
  },
  {
    id: 'level-2',
    number: 2,
    cefr: 'A2',
    title: 'Everyday English',
    titleRu: 'Повседневный английский',
    goal: 'Путешествия, истории, короткие клипы с EN-субтитрами.',
    units: [
      {
        id: 'l2-u1',
        number: 1,
        title: 'Arrangements & past',
        titleRu: 'Договорённости и прошлое',
        lessons: lessons(2, 1, [
          {
            title: 'Continuous for future',
            titleRu: 'Continuous для будущего',
            grammar: 'Present Continuous for arrangements',
            vocab: ['meet', 'fly', 'book', 'tonight'],
          },
          {
            title: 'Past expansion',
            titleRu: 'Past Simple шире',
            grammar: 'Past Simple + time markers',
            vocab: ['trip', 'delayed', 'enjoyed', 'expensive'],
          },
          {
            title: 'used to',
            titleRu: 'used to',
            grammar: 'used to + V',
            vocab: ['used to', 'habit', 'before', 'change'],
          },
          {
            title: 'will vs going to',
            titleRu: 'will vs going to',
            grammar: 'will vs going to',
            vocab: ['probably', 'promise', 'forecast'],
          },
        ]),
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

export function nextPlayableLesson(levelId: string, completedIds: Set<string>) {
  const list = allLessonsFlat(levelId)
  return (
    list.find((l) => l.hasContent && !completedIds.has(l.id)) ??
    list.find((l) => l.hasContent) ??
    null
  )
}
