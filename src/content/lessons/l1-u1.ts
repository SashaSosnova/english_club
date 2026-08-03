import type { LessonContent } from '../../types'

export const lessonContents: Record<string, LessonContent> = {
  'l1-u1-l1': {
    lessonId: 'l1-u1-l1',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'to be — am / is / are',
        points: [
          'I am (I\'m) — я есть',
          'you/we/they are (you\'re…) — ты/мы/они',
          'he/she/it is (he\'s…) — он/она/оно',
          'Отрицание: I\'m not, she isn\'t, they aren\'t',
          'Вопрос: Are you…? Is she…? — Yes, I am. / No, she isn\'t.',
        ],
        examples: [
          'I am Anna. I\'m from Spain.',
          'He is a teacher. She isn\'t from London.',
          'Are you a student? — Yes, I am.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'She ___ from Italy.',
        promptRu: 'Выберите правильную форму to be',
        options: ['am', 'is', 'are'],
        answer: 'is',
        explainRu: 'Для he/she/it используем is.',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'I ___ a student.',
        options: ['am', 'is', 'are'],
        answer: 'am',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'They ___ not from Russia.',
        options: ['am', 'is', 'are'],
        answer: 'are',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: '___ you from Berlin?',
        options: ['Am', 'Is', 'Are'],
        answer: 'Are',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Соберите предложение',
        promptRu: 'Nice to meet you.',
        tokens: ['Nice', 'to', 'meet', 'you', '.'],
        answer: ['Nice', 'to', 'meet', 'you', '.'],
      },
      {
        type: 'builder',
        id: 'e7',
        prompt: 'Соберите вопрос',
        promptRu: 'Where are you from?',
        tokens: ['Where', 'are', 'you', 'from', '?'],
        answer: ['Where', 'are', 'you', 'from', '?'],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'c1',
            term: 'hello',
            translation: 'привет / здравствуйте',
            example: 'Hello! My name is Sam.',
          },
          {
            id: 'c2',
            term: 'nice to meet you',
            translation: 'приятно познакомиться',
            example: 'Nice to meet you, Anna.',
          },
          {
            id: 'c3',
            term: 'from',
            translation: 'из (откуда)',
            example: 'I am from Poland.',
          },
          {
            id: 'c4',
            term: 'country',
            translation: 'страна',
            example: 'What country are you from?',
          },
          {
            id: 'c5',
            term: 'thank you',
            translation: 'спасибо',
            example: 'Thank you!',
          },
          {
            id: 'c6',
            term: 'please',
            translation: 'пожалуйста (просьба)',
            example: 'Coffee, please.',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e9',
        title: 'At a language club',
        lines: [
          { id: 'd1', speaker: 'Sam', text: 'Hi! My name is Sam.' },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              { text: 'Hello! Nice to meet you.', correct: true },
              { text: 'I am coffee.', correct: false },
              { text: 'Goodbye!', correct: false },
            ],
          },
          { id: 'd3', speaker: 'Sam', text: 'Where are you from?' },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              { text: 'I am from Russia.', correct: true },
              { text: 'Yes, I are.', correct: false },
              { text: 'She is a table.', correct: false },
            ],
          },
          { id: 'd5', speaker: 'Sam', text: 'Nice! See you in class.' },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Introduce yourself',
        promptRu:
          'Представьтесь в 4–5 предложениях: имя, откуда вы, город, студент/работа.',
        hints: [
          'My name is…',
          'I am from…',
          'I am a…',
          'Nice to meet you.',
        ],
        minSentences: 4,
      },
    ],
  },

  'l1-u1-l2': {
    lessonId: 'l1-u1-l2',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'a / an и this / that',
        points: [
          'a — перед согласным звуком: a book, a pen',
          'an — перед гласным звуком: an apple, an idea',
          'this — этот/эта (близко); that — тот/та (дальше)',
          'Это не «перевод слова», а звук в начале следующего слова.',
        ],
        examples: [
          'This is a phone.',
          'That is an umbrella.',
          'This is my ticket.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'This is ___ book.',
        options: ['a', 'an'],
        answer: 'a',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'I have ___ apple.',
        options: ['a', 'an'],
        answer: 'an',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: '___ is my bag. (близко к вам)',
        options: ['This', 'That'],
        answer: 'This',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: '___ is a map. (далеко)',
        options: ['This', 'That'],
        answer: 'That',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Соберите фразу для путешествия',
        tokens: ['This', 'is', 'my', 'ticket', '.'],
        answer: ['This', 'is', 'my', 'ticket', '.'],
      },
      {
        type: 'cloze',
        id: 'e7',
        text: 'Hello! This is ___ pen, and that is ___ orange.',
        gaps: [
          { id: 'g1', answer: 'a', options: ['a', 'an'] },
          { id: 'g2', answer: 'an', options: ['a', 'an'] },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'c1',
            term: 'phone',
            translation: 'телефон',
            example: 'This is my phone.',
          },
          {
            id: 'c2',
            term: 'ticket',
            translation: 'билет',
            example: 'This is my ticket.',
          },
          {
            id: 'c3',
            term: 'map',
            translation: 'карта',
            example: 'That is a map.',
          },
          {
            id: 'c4',
            term: 'window',
            translation: 'окно',
            example: 'The window is open.',
          },
          {
            id: 'c5',
            term: 'coffee',
            translation: 'кофе',
            example: 'Coffee, please.',
          },
          {
            id: 'c6',
            term: 'bag',
            translation: 'сумка',
            example: 'This is a bag.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'Things around you',
        promptRu: 'Назовите 6 предметов вокруг себя: This is a… / That is an…',
        hints: ['This is a…', 'That is an…', 'book', 'phone', 'chair'],
        minSentences: 6,
      },
    ],
  },

  'l1-u1-l3': {
    lessonId: 'l1-u1-l3',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Притяжательные: my / your и \'s',
        points: [
          'my, your, his, her, our, their — чей?',
          "Anna's brother = брат Анны (имя + 's)",
          'This is my mother. Her name is Olga.',
        ],
        examples: [
          "This is Tom's bike.",
          'Her sister is a doctor.',
          'Our parents are in the city.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'This is ___ sister. (моя)',
        options: ['my', 'her', 'their'],
        answer: 'my',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: '___ name is Paul. (его)',
        options: ['Her', 'His', 'Your'],
        answer: 'His',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: "This is ___ bag. (Анна)",
        options: ["Anna", "Anna's", 'Annas'],
        answer: "Anna's",
      },
      {
        type: 'builder',
        id: 'e5',
        prompt: 'Соберите предложение',
        tokens: ['Her', 'brother', 'is', 'a', 'student', '.'],
        answer: ['Her', 'brother', 'is', 'a', 'student', '.'],
      },
      {
        type: 'cards',
        id: 'e6',
        cards: [
          {
            id: 'c1',
            term: 'mother',
            translation: 'мама',
            example: 'My mother is kind.',
          },
          {
            id: 'c2',
            term: 'father',
            translation: 'папа',
            example: 'His father is a teacher.',
          },
          {
            id: 'c3',
            term: 'parents',
            translation: 'родители',
            example: 'Our parents are at home.',
          },
          {
            id: 'c4',
            term: 'friend',
            translation: 'друг / подруга',
            example: 'This is my friend.',
          },
          {
            id: 'c5',
            term: 'family',
            translation: 'семья',
            example: 'I love my family.',
          },
          {
            id: 'c6',
            term: 'children',
            translation: 'дети',
            example: 'Their children are young.',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e7',
        title: 'Talking about family',
        lines: [
          { id: 'd1', speaker: 'Sam', text: 'Is this your family?' },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              { text: 'Yes. This is my mother.', correct: true },
              { text: 'Yes. This am mother.', correct: false },
            ],
          },
          { id: 'd3', speaker: 'Sam', text: "What is your brother's name?" },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              { text: 'His name is Ivan.', correct: true },
              { text: 'Her name is Ivan.', correct: false },
            ],
          },
        ],
      },
      {
        type: 'produce',
        id: 'e8',
        prompt: 'My family',
        promptRu: 'Опишите 2 человек из семьи: кто они и как их зовут.',
        hints: ['This is my…', 'Her/His name is…', 'He/She is…'],
        minSentences: 4,
      },
    ],
  },

  'l1-u1-l4': {
    lessonId: 'l1-u1-l4',
    durationMin: 40,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Время и дни',
        points: [
          "What's the time? — Который час?",
          "It's 7 o'clock. / It's half past 7.",
          'at + время: at 7, at half past 7',
          'on + день: on Monday, on Saturday',
        ],
        examples: [
          "It's 9 o'clock in the morning.",
          'See you at 6.',
          'We meet on Saturday.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'We meet ___ Monday.',
        options: ['in', 'on', 'at'],
        answer: 'on',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'The class is ___ 10 o\'clock.',
        options: ['in', 'on', 'at'],
        answer: 'at',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: "It's half ___ six.",
        options: ['past', 'to', 'at'],
        answer: 'past',
      },
      {
        type: 'builder',
        id: 'e5',
        prompt: 'Соберите вопрос о встрече',
        tokens: ['When', 'do', 'we', 'meet', '?'],
        answer: ['When', 'do', 'we', 'meet', '?'],
      },
      {
        type: 'cloze',
        id: 'e6',
        text: 'See you ___ Saturday ___ half past five.',
        gaps: [
          { id: 'g1', answer: 'on', options: ['on', 'at', 'in'] },
          { id: 'g2', answer: 'at', options: ['on', 'at', 'in'] },
        ],
      },
      {
        type: 'cards',
        id: 'e7',
        cards: [
          {
            id: 'c1',
            term: "o'clock",
            translation: 'ровно (о часах)',
            example: "It's 8 o'clock.",
          },
          {
            id: 'c2',
            term: 'half past',
            translation: 'половина (пол-…)',
            example: "It's half past 3.",
          },
          {
            id: 'c3',
            term: 'morning',
            translation: 'утро',
            example: 'Good morning!',
          },
          {
            id: 'c4',
            term: 'tomorrow',
            translation: 'завтра',
            example: 'See you tomorrow.',
          },
          {
            id: 'c5',
            term: 'weekend',
            translation: 'выходные',
            example: 'See you at the weekend.',
          },
          {
            id: 'c6',
            term: 'today',
            translation: 'сегодня',
            example: 'Today is Monday.',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e8',
        title: 'When do we meet?',
        lines: [
          { id: 'd1', speaker: 'Sam', text: 'When do we meet?' },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              { text: 'On Saturday at 5.', correct: true },
              { text: 'In Saturday on 5.', correct: false },
            ],
          },
          { id: 'd3', speaker: 'Sam', text: "Great. What's the time now?" },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              { text: "It's 4 o'clock.", correct: true },
              { text: 'I am 4 o\'clock.', correct: false },
            ],
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'Unit challenge',
        promptRu:
          'Unit Challenge: представьтесь и предложите встречу (день + время). 5–6 предложений.',
        hints: [
          'My name is…',
          'I am from…',
          'Let\'s meet on…',
          'at… o\'clock',
        ],
        minSentences: 5,
      },
    ],
  },
}
