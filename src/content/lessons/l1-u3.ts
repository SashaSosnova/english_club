import type { LessonContent } from '../../types'

export const lessonContents: Record<string, LessonContent> = {
  'l1-u3-l1': {
    lessonId: 'l1-u3-l1',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Present Simple — I / you / we / they',
        points: [
          'Для привычек и фактов: I live in Moscow. We speak English.',
          'Утверждение: I/you/we/they + V (без -s)',
          "Отрицание: don't + V — I don't like coffee.",
          'Слова-подсказки: every day, often, usually, always',
        ],
        examples: [
          'I work in an office.',
          'They study English.',
          "We don't eat meat.",
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'I ___ in a small flat.',
        options: ['live', 'lives', 'living'],
        answer: 'live',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'We ___ coffee in the morning.',
        options: ['drink', 'drinks', 'drinking'],
        answer: 'drink',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: "They ___ speak Spanish.",
        options: ["don't", "doesn't", "aren't"],
        answer: "don't",
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'I ___ to work. (отрицание want)',
        options: ["don't want", "doesn't want", 'not want'],
        answer: "don't want",
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Соберите предложение',
        tokens: ['I', 'speak', 'English', 'every', 'day', '.'],
        answer: ['I', 'speak', 'English', 'every', 'day', '.'],
      },
      {
        type: 'cloze',
        id: 'e7',
        text: 'We ___ in the city, but we ___ cook at home every day.',
        gaps: [
          { id: 'g1', answer: 'live', options: ['live', 'lives', "don't live"] },
          {
            id: 'g2',
            answer: "don't",
            options: ["don't", "doesn't", 'not'],
          },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'u3c1',
            term: 'live',
            translation: 'жить',
            example: 'I live in a city.',
          },
          {
            id: 'u3c2',
            term: 'work',
            translation: 'работать',
            example: 'I work from home.',
          },
          {
            id: 'u3c3',
            term: 'study',
            translation: 'учиться / изучать',
            example: 'We study English.',
          },
          {
            id: 'u3c4',
            term: 'like',
            translation: 'нравиться',
            example: 'I like tea.',
          },
          {
            id: 'u3c5',
            term: 'want',
            translation: 'хотеть',
            example: 'I want a break.',
          },
          {
            id: 'u3c6',
            term: 'need',
            translation: 'нуждаться',
            example: 'I need help.',
          },
          {
            id: 'u3c7',
            term: 'speak',
            translation: 'говорить (на языке)',
            example: 'They speak English.',
          },
          {
            id: 'u3c8',
            term: 'cook',
            translation: 'готовить',
            example: 'We cook at home.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'About my life',
        promptRu:
          '6 предложений о себе: где живёте, работа/учёба, что любите и не любите.',
        hints: ['I live…', 'I work/study…', 'I like…', "I don't like…"],
        minSentences: 6,
      },
    ],
  },

  'l1-u3-l2': {
    lessonId: 'l1-u3-l2',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Present Simple — he / she / it',
        points: [
          'he/she/it + V-s: She works. He likes tea.',
          'go → goes, watch → watches, study → studies',
          "Отрицание: doesn't + V (без -s) — She doesn't work here.",
          'Частая ошибка: She live ✗ → She lives ✓',
        ],
        examples: [
          'Anna gets up at 7.',
          'He watches TV in the evening.',
          "She doesn't drive.",
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'She ___ in London.',
        options: ['live', 'lives', 'living'],
        answer: 'lives',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'He ___ to work by bus.',
        options: ['go', 'goes', 'going'],
        answer: 'goes',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: "Tom ___ like coffee.",
        options: ["don't", "doesn't", "isn't"],
        answer: "doesn't",
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'She ___ English every day. (study)',
        options: ['study', 'studys', 'studies'],
        answer: 'studies',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Исправьте идею: она начинает работу в 9',
        tokens: ['She', 'starts', 'work', 'at', '9', '.'],
        answer: ['She', 'starts', 'work', 'at', '9', '.'],
      },
      {
        type: 'cloze',
        id: 'e7',
        text: 'Anna ___ up at 7. She ___ watch TV in the morning.',
        gaps: [
          {
            id: 'g1',
            answer: 'gets',
            options: ['get', 'gets', 'getting'],
          },
          {
            id: 'g2',
            answer: "doesn't",
            options: ["don't", "doesn't", "isn't"],
          },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'u3c9',
            term: 'get up',
            translation: 'вставать',
            example: 'She gets up early.',
          },
          {
            id: 'u3c10',
            term: 'start',
            translation: 'начинать',
            example: 'He starts work at 9.',
          },
          {
            id: 'u3c11',
            term: 'finish',
            translation: 'заканчивать',
            example: 'She finishes at 6.',
          },
          {
            id: 'u3c12',
            term: 'watch',
            translation: 'смотреть',
            example: 'He watches films.',
          },
          {
            id: 'u3c13',
            term: 'read',
            translation: 'читать',
            example: 'She reads every night.',
          },
          {
            id: 'u3c14',
            term: 'play',
            translation: 'играть',
            example: 'He plays tennis.',
          },
          {
            id: 'u3c15',
            term: 'listen',
            translation: 'слушать',
            example: 'She listens to podcasts.',
          },
          {
            id: 'u3c16',
            term: 'help',
            translation: 'помогать',
            example: 'He helps his parents.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: "A friend's day",
        promptRu:
          'Расскажите о дне друга/партнёра: 6 предложений с he/she + Present Simple.',
        hints: ['She gets up…', 'He works…', "She doesn't…", 'In the evening…'],
        minSentences: 6,
      },
    ],
  },

  'l1-u3-l3': {
    lessonId: 'l1-u3-l3',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Questions: Do / Does + Wh-',
        points: [
          'Do you/we/they + V? — Do you live here?',
          'Does he/she/it + V (без -s)? — Does she work?',
          'Wh- + do/does + subject + V: Where do you live?',
          'What do you do? = Чем занимаетесь (работа/учёба)',
        ],
        examples: [
          'Do you speak English?',
          'Does he cook at home?',
          'What time do you get up?',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: '___ you work on Saturday?',
        options: ['Do', 'Does', 'Are'],
        answer: 'Do',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: '___ she live in Berlin?',
        options: ['Do', 'Does', 'Is'],
        answer: 'Does',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'Where ___ you live?',
        options: ['do', 'does', 'are'],
        answer: 'do',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'What time ___ he finish work?',
        options: ['do', 'does', 'is'],
        answer: 'does',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Соберите вопрос',
        tokens: ['What', 'do', 'you', 'do', '?'],
        answer: ['What', 'do', 'you', 'do', '?'],
      },
      {
        type: 'dialogue',
        id: 'e7',
        title: 'Small interview',
        lines: [
          { id: 'd1', speaker: 'Sam', text: 'Hi! What do you do?' },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              { text: 'I work in an office.', correct: true },
              { text: 'I works in an office.', correct: false },
            ],
          },
          { id: 'd3', speaker: 'Sam', text: 'Where do you live?' },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              { text: 'I live in the city centre.', correct: true },
              { text: 'I does live in the city.', correct: false },
            ],
          },
          {
            id: 'd5',
            speaker: 'Sam',
            text: 'Nice! Do you study English every day?',
          },
          {
            id: 'd6',
            speaker: 'You',
            choices: [
              { text: 'Yes, I do. Usually after dinner.', correct: true },
              { text: 'Yes, I does.', correct: false },
            ],
          },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'u3c17',
            term: 'how often',
            translation: 'как часто',
            example: 'How often do you cook?',
          },
          {
            id: 'u3c18',
            term: 'what time',
            translation: 'во сколько',
            example: 'What time do you start?',
          },
          {
            id: 'u3c19',
            term: 'usually',
            translation: 'обычно',
            example: 'I usually walk.',
          },
          {
            id: 'u3c20',
            term: 'before',
            translation: 'до / перед',
            example: 'I read before bed.',
          },
          {
            id: 'u3c21',
            term: 'after',
            translation: 'после',
            example: 'I study after lunch.',
          },
          {
            id: 'u3c22',
            term: 'lunch',
            translation: 'обед',
            example: 'I have lunch at 1.',
          },
          {
            id: 'u3c23',
            term: 'dinner',
            translation: 'ужин',
            example: 'We have dinner together.',
          },
          {
            id: 'u3c24',
            term: 'because',
            translation: 'потому что',
            example: 'I walk because I like it.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'Ask me questions',
        promptRu:
          'Напишите 6 вопросов другу на английском (Do/Does + Wh-).',
        hints: [
          'Where do you…?',
          'What time do you…?',
          'How often do you…?',
          'Does she…?',
        ],
        minSentences: 6,
      },
    ],
  },

  'l1-u3-l4': {
    lessonId: 'l1-u3-l4',
    durationMin: 40,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Routine day — собираем всё вместе',
        points: [
          'Порядок дня: wake up → have breakfast → go to work → have lunch → go home → have dinner → sleep',
          'have breakfast / lunch / dinner — устойчивые сочетания',
          'busy / free — занят / свободен',
          'Повторяем Present Simple для I и he/she',
        ],
        examples: [
          'I wake up at 7 and have breakfast.',
          'She goes to work by metro.',
          'In the evening I am free.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'I ___ up at half past six.',
        options: ['wake', 'wakes', 'waking'],
        answer: 'wake',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'She ___ breakfast at home.',
        options: ['have', 'has', 'having'],
        answer: 'has',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'They ___ to work by bus.',
        options: ['go', 'goes', 'going'],
        answer: 'go',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: '___ you free in the evening?',
        options: ['Do', 'Are', 'Does'],
        answer: 'Are',
        explainRu: 'free — это состояние с to be: Are you free?',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Соберите часть распорядка',
        tokens: ['I', 'have', 'lunch', 'at', 'one', "o'clock", '.'],
        answer: ['I', 'have', 'lunch', 'at', 'one', "o'clock", '.'],
      },
      {
        type: 'cloze',
        id: 'e7',
        text: 'I ___ to work at 8. I ___ home at 6 and then I ___ dinner.',
        gaps: [
          { id: 'g1', answer: 'go', options: ['go', 'goes', 'going'] },
          { id: 'g2', answer: 'go', options: ['go', 'goes', 'come'] },
          { id: 'g3', answer: 'have', options: ['have', 'has', 'am'] },
        ],
      },
      {
        type: 'dialogue',
        id: 'e8',
        title: 'A typical day',
        lines: [
          { id: 'd1', speaker: 'Sam', text: 'What time do you wake up?' },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              { text: 'I wake up at 7.', correct: true },
              { text: 'I wakes up at 7.', correct: false },
            ],
          },
          { id: 'd3', speaker: 'Sam', text: 'Do you have breakfast at home?' },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              { text: 'Yes, I do. Then I go to work.', correct: true },
              { text: 'Yes, I does. Then I goes to work.', correct: false },
            ],
          },
          { id: 'd5', speaker: 'Sam', text: 'Are you busy in the evening?' },
          {
            id: 'd6',
            speaker: 'You',
            choices: [
              {
                text: 'Sometimes. I study English after dinner.',
                correct: true,
              },
              { text: 'Sometimes. I studying English.', correct: false },
            ],
          },
        ],
      },
      {
        type: 'cards',
        id: 'e9',
        cards: [
          {
            id: 'u3c25',
            term: 'wake up',
            translation: 'просыпаться',
            example: 'I wake up at 7.',
          },
          {
            id: 'u3c26',
            term: 'have breakfast',
            translation: 'завтракать',
            example: 'I have breakfast quickly.',
          },
          {
            id: 'u3c27',
            term: 'go to work',
            translation: 'идти/ехать на работу',
            example: 'She goes to work by metro.',
          },
          {
            id: 'u3c28',
            term: 'go home',
            translation: 'идти домой',
            example: 'I go home at 6.',
          },
          {
            id: 'u3c29',
            term: 'busy',
            translation: 'занятый',
            example: 'I am busy today.',
          },
          {
            id: 'u3c30',
            term: 'free',
            translation: 'свободный',
            example: 'Are you free tomorrow?',
          },
          {
            id: 'u3c31',
            term: 'break',
            translation: 'перерыв',
            example: 'I have a break at 11.',
          },
          {
            id: 'u3c32',
            term: 'sleep',
            translation: 'спать',
            example: 'I sleep 7 hours.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Unit Challenge — My typical day',
        promptRu:
          'Unit Challenge: опишите свой типичный день (8 предложений). Используйте Present Simple и время.',
        hints: [
          'I wake up at…',
          'I have breakfast…',
          'I go to work…',
          'In the evening…',
        ],
        minSentences: 8,
      },
    ],
  },
}
