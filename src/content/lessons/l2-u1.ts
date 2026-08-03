import type { LessonContent } from '../../types'

export const lessonContents: Record<string, LessonContent> = {
  'l2-u1-l1': {
    lessonId: 'l2-u1-l1',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Present Continuous for arrangements',
        points: [
          'Present Continuous часто = договорённый план (не только «сейчас»)',
          "I'm meeting Sam on Friday. She's flying tomorrow.",
          'Обычно есть время: tonight, on Monday, this weekend, at 7',
          'Сравните с going to: оба про будущее; Continuous — когда уже договорились',
        ],
        examples: [
          "I'm flying to London on Monday.",
          "We're staying at a hotel near the station.",
          'Are you joining us tonight?',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'I ___ meeting Anna tomorrow.',
        options: ['am', 'is', 'are'],
        answer: 'am',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'She ___ flying on Sunday.',
        options: ['is', 'am', 'are'],
        answer: 'is',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'We ___ staying at the Grand Hotel.',
        options: ['are', 'is', 'am'],
        answer: 'are',
      },
      {
        type: 'builder',
        id: 'e5',
        prompt: 'Travel arrangement',
        tokens: ["I'm", 'flying', 'on', 'Monday', '.'],
        answer: ["I'm", 'flying', 'on', 'Monday', '.'],
      },
      {
        type: 'listening',
        id: 'e6',
        title: 'Planning Friday',
        titleRu: 'Послушайте диалог друзей (TTS + субтитры)',
        lines: [
          { speaker: 'Sam', text: 'What are you doing this weekend?' },
          {
            speaker: 'Mia',
            text: "I'm meeting my sister on Friday evening.",
          },
          { speaker: 'Sam', text: 'Nice! Are you free on Saturday?' },
          {
            speaker: 'Mia',
            text: "Yes. I'm joining a language club at 11.",
          },
          {
            speaker: 'Sam',
            text: "Great. I'm staying in the city centre. Let's have coffee after.",
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'When is Mia meeting her sister?',
            options: ['Friday evening', 'Saturday morning', 'Monday'],
            answer: 'Friday evening',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'What is Mia doing on Saturday?',
            options: [
              'Joining a language club',
              'Flying to London',
              'Working all day',
            ],
            answer: 'Joining a language club',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e7',
        title: 'Make arrangements',
        lines: [
          { id: 'd1', speaker: 'Sam', text: 'Are you free on Monday?' },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: "Sorry, I'm flying to Berlin on Monday.",
                correct: true,
              },
              {
                text: 'Sorry, I fly Berlin Monday always.',
                correct: false,
              },
            ],
          },
          { id: 'd3', speaker: 'Sam', text: 'What about Tuesday?' },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: "Tuesday is good. I'm staying in town.",
                correct: true,
              },
              {
                text: 'Tuesday good. I staying in town yesterday.',
                correct: false,
              },
            ],
          },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'a2c1',
            term: 'fly',
            translation: 'лететь',
            example: "I'm flying tomorrow.",
          },
          {
            id: 'a2c2',
            term: 'stay',
            translation: 'останавливаться / оставаться',
            example: "We're staying at a hotel.",
          },
          {
            id: 'a2c3',
            term: 'book',
            translation: 'бронировать',
            example: "I'm booking a ticket.",
          },
          {
            id: 'a2c4',
            term: 'appointment',
            translation: 'запись / встреча',
            example: 'I have an appointment at 3.',
          },
          {
            id: 'a2c5',
            term: 'tonight',
            translation: 'сегодня вечером',
            example: 'Are you free tonight?',
          },
          {
            id: 'a2c6',
            term: 'invite',
            translation: 'приглашать',
            example: "I'm inviting friends.",
          },
          {
            id: 'a2c7',
            term: 'join',
            translation: 'присоединяться',
            example: 'Are you joining us?',
          },
          {
            id: 'a2c8',
            term: 'this weekend',
            translation: 'в эти выходные',
            example: "I'm working this weekend.",
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'My plans this week',
        promptRu:
          'Напишите 6 предложений о договорённостях на неделю (Present Continuous).',
        hints: [
          "I'm meeting…",
          "I'm flying…",
          "We're staying…",
          'on Monday / tonight',
        ],
        minSentences: 6,
      },
    ],
  },

  'l2-u1-l2': {
    lessonId: 'l2-u1-l2',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Past Simple + time markers',
        points: [
          'Past Simple + маркер времени: yesterday, last week, two days ago, in 2019',
          'Если время закончено — Past Simple (не Present Perfect)',
          'Повторяем irregulars: went, had, took, missed, spent, arrived',
        ],
        examples: [
          'Our flight was delayed yesterday.',
          'We spent three days in Rome last year.',
          'I missed the train two hours ago.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'We ___ to the airport early. (go)',
        options: ['went', 'go', 'gone'],
        answer: 'went',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'The flight was ___ .',
        options: ['delayed', 'delay', 'delaying'],
        answer: 'delayed',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'They ___ a lot of money. (spend)',
        options: ['spent', 'spend', 'spended'],
        answer: 'spent',
      },
      {
        type: 'cloze',
        id: 'e5',
        text: 'Last summer we ___ a cheap flight. The plane ___ late, but we ___ the city.',
        gaps: [
          { id: 'g1', answer: 'took', options: ['took', 'take', 'taken'] },
          { id: 'g2', answer: 'arrived', options: ['arrived', 'arrive', 'arrives'] },
          { id: 'g3', answer: 'enjoyed', options: ['enjoyed', 'enjoy', 'enjoys'] },
        ],
      },
      {
        type: 'listening',
        id: 'e6',
        title: 'Airport delay',
        titleRu: 'История о задержке рейса',
        lines: [
          {
            speaker: 'Narrator',
            text: 'Last Monday I went to the airport at six.',
          },
          {
            speaker: 'Narrator',
            text: 'My flight was delayed for three hours.',
          },
          {
            speaker: 'Narrator',
            text: 'I bought a coffee and waited near the gate.',
          },
          {
            speaker: 'Narrator',
            text: 'Finally we left at ten. I arrived late, but I enjoyed the trip.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'How long was the delay?',
            options: ['Three hours', 'Ten minutes', 'One day'],
            answer: 'Three hours',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Did the narrator enjoy the trip?',
            options: ['Yes', 'No', 'We do not know'],
            answer: 'Yes',
          },
        ],
      },
      {
        type: 'cards',
        id: 'e7',
        cards: [
          {
            id: 'a2c9',
            term: 'flight',
            translation: 'рейс / полёт',
            example: 'My flight was delayed.',
          },
          {
            id: 'a2c10',
            term: 'delayed',
            translation: 'задержанный',
            example: 'The train was delayed.',
          },
          {
            id: 'a2c11',
            term: 'missed',
            translation: 'опоздал на / пропустил',
            example: 'I missed the bus.',
          },
          {
            id: 'a2c12',
            term: 'arrived',
            translation: 'прибыл',
            example: 'We arrived at night.',
          },
          {
            id: 'a2c13',
            term: 'spent',
            translation: 'провёл / потратил',
            example: 'We spent two days there.',
          },
          {
            id: 'a2c14',
            term: 'crowded',
            translation: 'многолюдный',
            example: 'The station was crowded.',
          },
          {
            id: 'a2c15',
            term: 'expensive',
            translation: 'дорогой',
            example: 'The hotel was expensive.',
          },
          {
            id: 'a2c16',
            term: 'journey',
            translation: 'поездка / путь',
            example: 'It was a long journey.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e8',
        prompt: 'A short trip story',
        promptRu: 'Короткая история о поездке (8 предложений) в Past Simple.',
        hints: [
          'Last year / yesterday…',
          'went / took / missed…',
          'delayed / arrived / enjoyed…',
        ],
        minSentences: 8,
      },
    ],
  },

  'l2-u1-l3': {
    lessonId: 'l2-u1-l3',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'used to',
        points: [
          'used to + V — привычка или состояние в прошлом (сейчас не так)',
          'I used to live abroad. She used to be shy.',
          "Отрицание: didn't use to + V",
          'Вопрос: Did you use to…?',
        ],
        examples: [
          'I used to eat meat, but now I don\'t.',
          'We used to live in a small flat.',
          "He didn't use to speak English.",
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'I ___ to walk to school.',
        options: ['used', 'use', 'using'],
        answer: 'used',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: "She ___ use to drive. (отрицание)",
        options: ["didn't", "doesn't", "wasn't"],
        answer: "didn't",
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: '___ you use to live here?',
        options: ['Did', 'Do', 'Are'],
        answer: 'Did',
      },
      {
        type: 'builder',
        id: 'e5',
        prompt: 'Past habit',
        tokens: ['I', 'used', 'to', 'live', 'abroad', '.'],
        answer: ['I', 'used', 'to', 'live', 'abroad', '.'],
      },
      {
        type: 'listening',
        id: 'e6',
        title: 'I used to live in…',
        titleRu: 'Короткий рассказ о прошлом',
        lines: [
          {
            speaker: 'Anna',
            text: 'I used to live in a small town.',
          },
          {
            speaker: 'Anna',
            text: 'I used to be shy at school.',
          },
          {
            speaker: 'Anna',
            text: "I didn't use to speak English.",
          },
          {
            speaker: 'Anna',
            text: 'Now I live in the city and I study every day.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'Where did Anna use to live?',
            options: ['A small town', 'London', 'A hotel'],
            answer: 'A small town',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Does she study English now?',
            options: ['Yes', 'No', 'Only at school in the past'],
            answer: 'Yes',
          },
        ],
      },
      {
        type: 'cards',
        id: 'e7',
        cards: [
          {
            id: 'a2c17',
            term: 'used to',
            translation: 'раньше (привычка)',
            example: 'I used to swim every day.',
          },
          {
            id: 'a2c18',
            term: 'habit',
            translation: 'привычка',
            example: 'It was a bad habit.',
          },
          {
            id: 'a2c19',
            term: 'abroad',
            translation: 'за границей',
            example: 'I used to live abroad.',
          },
          {
            id: 'a2c20',
            term: 'shy',
            translation: 'застенчивый',
            example: 'I used to be shy.',
          },
          {
            id: 'a2c21',
            term: 'afraid',
            translation: 'бояться (be afraid of)',
            example: 'I used to be afraid of planes.',
          },
          {
            id: 'a2c22',
            term: 'change',
            translation: 'меняться / изменение',
            example: 'Things change.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e8',
        prompt: 'I used to…',
        promptRu: '5 предложений I used to… / I didn\'t use to… о вашей жизни.',
        hints: ['I used to…', "I didn't use to…", 'but now…'],
        minSentences: 5,
      },
    ],
  },

  'l2-u1-l4': {
    lessonId: 'l2-u1-l4',
    durationMin: 40,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'will vs going to',
        points: [
          'going to — план / намерение / доказательство: Look at the sky — it\'s going to rain.',
          'will — спонтанное решение, обещание, мнение о будущем: I\'ll help you. I think it will be fine.',
          'Often both are possible; choose the clearer meaning',
        ],
        examples: [
          "I'm going to book a hotel tonight. (plan)",
          "I'll open the window. (now decision)",
          'It will probably be sunny tomorrow.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'I ___ going to visit my parents.',
        options: ['am', 'will', 'do'],
        answer: 'am',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'The bag is heavy. I ___ carry it.',
        options: ["'ll", 'am going', 'used to'],
        answer: "'ll",
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'Look at those clouds! It ___ rain.',
        options: ["'s going to", 'will to', 'used to'],
        answer: "'s going to",
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'I think she ___ call later.',
        options: ['will', 'going to is', 'used'],
        answer: 'will',
      },
      {
        type: 'listening',
        id: 'e6',
        title: 'Weather & plans',
        titleRu: 'Прогноз и планы (упрощённо)',
        lines: [
          {
            speaker: 'Host',
            text: 'Good morning. It will probably be sunny today.',
          },
          {
            speaker: 'Host',
            text: 'But take a jacket. It is going to be cold tonight.',
          },
          {
            speaker: 'Sam',
            text: "Thanks. I'll take my jacket. I'm going to walk to work.",
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What will the weather probably be today?',
            options: ['Sunny', 'Snowy', 'Stormy'],
            answer: 'Sunny',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'What is Sam going to do?',
            options: ['Walk to work', 'Fly abroad', 'Stay at home all day'],
            answer: 'Walk to work',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e7',
        title: 'Weekend mix',
        lines: [
          {
            id: 'd1',
            speaker: 'Sam',
            text: 'What are you going to do this weekend?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: "I'm going to visit a museum. I'll call you on Sunday.",
                correct: true,
              },
              {
                text: 'I used to visit museum tomorrow will.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Sam',
            text: 'It might rain. Do you want an umbrella?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              { text: "Yes, please. I'll take it.", correct: true },
              { text: 'Yes. I going take it yesterday.', correct: false },
            ],
          },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'a2c23',
            term: 'probably',
            translation: 'вероятно',
            example: 'It will probably be hot.',
          },
          {
            id: 'a2c24',
            term: 'maybe',
            translation: 'может быть',
            example: 'Maybe I will stay.',
          },
          {
            id: 'a2c25',
            term: 'promise',
            translation: 'обещать / обещание',
            example: "I'll call you — I promise.",
          },
          {
            id: 'a2c26',
            term: 'forecast',
            translation: 'прогноз',
            example: 'The forecast looks good.',
          },
          {
            id: 'a2c27',
            term: 'decision',
            translation: 'решение',
            example: "I'll help — quick decision.",
          },
          {
            id: 'a2c28',
            term: 'soon',
            translation: 'скоро',
            example: 'See you soon.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'Unit Challenge',
        promptRu:
          'Unit Challenge: 1) планы на выходные (going to / Continuous); 2) короткая past-история о поездке; 3) 2 прогноза с will. Всего 8+ предложений.',
        hints: [
          "I'm going to…",
          "I'm meeting…",
          'Last year I…',
          'It will probably…',
        ],
        minSentences: 8,
      },
    ],
  },
}
