import type { LessonContent } from '../../types'

export const lessonContents: Record<string, LessonContent> = {
  'l2-u3-l1': {
    lessonId: 'l2-u3-l1',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'First Conditional',
        points: [
          'First Conditional = реальное будущее условие: If + Present Simple, will + V',
          'If I miss the train, I will take a taxi.',
          'Порядок можно менять: I will call you if I am late.',
          'unless = if not (лёгкое введение): I will stay unless it rains.',
          'Не используем will после if: If it will rain ✗ → If it rains ✓',
        ],
        examples: [
          'If we leave now, we will catch the bus.',
          'If the flight is cancelled, I will ask for a refund.',
          'Unless you hurry, you will miss it.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'If I ___ the train, I will take a taxi. (miss)',
        options: ['miss', 'will miss', 'missed'],
        answer: 'miss',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'If it rains, we ___ stay at the hotel.',
        options: ['will', 'are', 'stayed'],
        answer: 'will',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'If you ___ early, you will feel tired. (not eat)',
        options: ["don't eat", "won't eat", "didn't eat"],
        answer: "don't eat",
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'I will call you if I ___ late.',
        options: ['am', 'will be', 'was'],
        answer: 'am',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Travel problem',
        tokens: ['If', 'I', 'miss', 'the', 'train', ',', 'I', 'will', 'take', 'a', 'taxi', '.'],
        answer: ['If', 'I', 'miss', 'the', 'train', ',', 'I', 'will', 'take', 'a', 'taxi', '.'],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Problem solving',
        titleRu: 'Друзья решают транспортную проблему',
        lines: [
          {
            speaker: 'Lisa',
            text: 'Oh no, the train is delayed. What shall we do?',
          },
          {
            speaker: 'Ben',
            text: 'If we wait, we will miss the museum. It closes at five.',
          },
          {
            speaker: 'Lisa',
            text: 'If we take a taxi, we will get there on time.',
          },
          {
            speaker: 'Ben',
            text: 'Good idea. If the traffic is bad, we will still arrive before four.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What will happen if they wait?',
            options: [
              'They will miss the museum',
              'They will catch the train',
              'The museum will open later',
            ],
            answer: 'They will miss the museum',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'What does Ben suggest?',
            options: [
              'Take a taxi',
              'Go home',
              'Wait for the next train',
            ],
            answer: 'Take a taxi',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e8',
        title: 'What if…?',
        lines: [
          {
            id: 'd1',
            speaker: 'Clerk',
            text: 'Your flight might be delayed. Do you have a plan?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: 'If it is delayed, I will stay at the airport hotel.',
                correct: true,
              },
              {
                text: 'If it will delayed, I stay at hotel airport.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Clerk',
            text: 'And if they cancel it completely?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: 'If they cancel it, I will ask for a refund.',
                correct: true,
              },
              {
                text: 'If they cancel, I will asked refund yesterday.',
                correct: false,
              },
            ],
          },
        ],
      },
      {
        type: 'cards',
        id: 'e9',
        cards: [
          {
            id: 'a2c53',
            term: 'if',
            translation: 'если',
            example: 'If I am late, call me.',
          },
          {
            id: 'a2c54',
            term: 'unless',
            translation: 'если не / пока не',
            example: 'I will walk unless it rains.',
          },
          {
            id: 'a2c55',
            term: 'miss',
            translation: 'опоздать на / пропустить',
            example: 'If I miss the bus, I will walk.',
          },
          {
            id: 'a2c56',
            term: 'catch',
            translation: 'успеть на (транспорт)',
            example: 'If we hurry, we will catch it.',
          },
          {
            id: 'a2c57',
            term: 'cancel',
            translation: 'отменять',
            example: 'If they cancel, I will rebook.',
          },
          {
            id: 'a2c58',
            term: 'refund',
            translation: 'возврат денег',
            example: 'I will ask for a refund.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Travel conditionals',
        promptRu:
          '6 предложений First Conditional о поездках (If + Present, will).',
        hints: [
          'If I miss…, I will…',
          'If the weather is…, we will…',
          'Unless…, I will…',
        ],
        minSentences: 6,
      },
    ],
  },

  'l2-u3-l2': {
    lessonId: 'l2-u3-l2',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Present Perfect intro',
        points: [
          'Present Perfect = have/has + V3 (past participle): I have visited Rome.',
          'ever / never — опыт за жизнь: Have you ever been to London?',
          'just — только что: I have just arrived.',
          'already — уже: She has already eaten.',
          'yet — ещё (в вопросах/отрицаниях): Have you finished yet?',
          'been to = был там и вернулся; gone to = уехал туда (ещё там) — light only',
        ],
        examples: [
          'Have you ever tried sushi?',
          "I have never flown business class.",
          'We have just checked in.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'Have you ever ___ to Japan? (be)',
        options: ['been', 'went', 'gone'],
        answer: 'been',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'I have ___ tried Indian food. (never)',
        options: ['never', 'ever', 'yet'],
        answer: 'never',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'She ___ left yet. She is still here. (not)',
        options: ["hasn't", "didn't", "wasn't"],
        answer: "hasn't",
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'We have ___ arrived at the hotel. (just)',
        options: ['just', 'yet', 'ever'],
        answer: 'just',
      },
      {
        type: 'cloze',
        id: 'e6',
        text: 'A: Have you ___ seen the Northern Lights? B: No, never. But I have ___ read about them.',
        gaps: [
          { id: 'g1', answer: 'ever', options: ['ever', 'never', 'just'] },
          { id: 'g2', answer: 'already', options: ['already', 'yet', 'ever'] },
        ],
      },
      {
        type: 'builder',
        id: 'e7',
        prompt: 'Life experience',
        tokens: ['Have', 'you', 'ever', 'been', 'to', 'London', '?'],
        answer: ['Have', 'you', 'ever', 'been', 'to', 'London', '?'],
      },
      {
        type: 'listening',
        id: 'e8',
        title: 'Have you ever…?',
        titleRu: 'Разговор о жизненном опыте',
        lines: [
          {
            speaker: 'Kate',
            text: 'Have you ever been to Scotland?',
          },
          {
            speaker: 'Dan',
            text: 'Yes, I have. I went there two years ago.',
          },
          {
            speaker: 'Kate',
            text: 'Have you ever tried haggis?',
          },
          {
            speaker: 'Dan',
            text: 'No, never. I have just arrived, actually. I have not eaten yet.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'Has Dan ever been to Scotland?',
            options: ['Yes', 'No', 'We do not know'],
            answer: 'Yes',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Has Dan tried haggis?',
            options: ['No, never', 'Yes, many times', 'He has just eaten it'],
            answer: 'No, never',
          },
        ],
      },
      {
        type: 'cards',
        id: 'e9',
        cards: [
          {
            id: 'a2c59',
            term: 'ever',
            translation: 'когда-либо',
            example: 'Have you ever been abroad?',
          },
          {
            id: 'a2c60',
            term: 'never',
            translation: 'никогда',
            example: 'I have never driven on the left.',
          },
          {
            id: 'a2c61',
            term: 'just',
            translation: 'только что',
            example: 'I have just landed.',
          },
          {
            id: 'a2c62',
            term: 'already',
            translation: 'уже',
            example: 'We have already booked.',
          },
          {
            id: 'a2c63',
            term: 'yet',
            translation: 'ещё (не)',
            example: 'Have you packed yet?',
          },
          {
            id: 'a2c64',
            term: 'experience',
            translation: 'опыт',
            example: 'It was a great experience.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Have you ever…? interview',
        promptRu:
          '6 вопросов Have you ever…? и коротких ответов (Yes, I have / No, never).',
        hints: [
          'Have you ever been to…?',
          'Have you ever tried…?',
          'Have you ever flown…?',
        ],
        minSentences: 6,
      },
    ],
  },

  'l2-u3-l3': {
    lessonId: 'l2-u3-l3',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Present Perfect vs Past Simple',
        points: [
          'Present Perfect — опыт / результат сейчас, время не важно: I have seen that film.',
          'Past Simple — конкретное время в прошлом: I saw it last month.',
          'Маркеры Past Simple: yesterday, last week, ago, in 2020, when…',
          'Маркеры PP: ever, never, just, already, yet, recently, so far',
          'Типичная ошибка RU: ✗ I have seen it yesterday → ✓ I saw it yesterday',
        ],
        examples: [
          'Have you seen this film? — Yes, I saw it last month.',
          'I have lived here for two years. (still here)',
          'I lived in Berlin in 2019. (finished time)',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'I ___ that museum last year. (visit)',
        options: ['visited', 'have visited', 'have visit'],
        answer: 'visited',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'Have you ___ been to Edinburgh?',
        options: ['ever', 'yesterday', 'last week'],
        answer: 'ever',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'She ___ the book two days ago. (read — Past Simple)',
        options: ['read', 'has read', 'have read'],
        answer: 'read',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'I have not finished ___ .',
        options: ['yet', 'yesterday', 'in 2020'],
        answer: 'yet',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Correct tense',
        tokens: ['I', 'saw', 'that', 'film', 'last', 'month', '.'],
        answer: ['I', 'saw', 'that', 'film', 'last', 'month', '.'],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Film chat',
        titleRu: 'Диалог о фильме',
        lines: [
          {
            speaker: 'Amy',
            text: 'Have you seen this film? Everyone is talking about it.',
          },
          {
            speaker: 'Leo',
            text: 'Yes, I saw it last month at the cinema.',
          },
          {
            speaker: 'Amy',
            text: 'Really? I have not seen it yet.',
          },
          {
            speaker: 'Leo',
            text: 'You should go. I have already watched it twice.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'When did Leo see the film?',
            options: ['Last month', 'Yesterday', 'He has not seen it'],
            answer: 'Last month',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Has Amy seen the film?',
            options: ['Not yet', 'Yes, twice', 'Yes, last month'],
            answer: 'Not yet',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e8',
        title: 'When did you…?',
        lines: [
          {
            id: 'd1',
            speaker: 'Host',
            text: 'Have you ever travelled alone?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: 'Yes, I have. I travelled to Prague alone last summer.',
                correct: true,
              },
              {
                text: 'Yes, I have travelled alone last summer ever.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Host',
            text: 'And have you been to Prague recently?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: 'No, not since last year. I have been busy lately.',
                correct: true,
              },
              {
                text: 'No, I went recently yesterday have been.',
                correct: false,
              },
            ],
          },
        ],
      },
      {
        type: 'cards',
        id: 'e9',
        cards: [
          {
            id: 'a2c65',
            term: 'recently',
            translation: 'недавно',
            example: 'I have recently moved.',
          },
          {
            id: 'a2c66',
            term: 'so far',
            translation: 'пока / до сих пор',
            example: 'So far, so good.',
          },
          {
            id: 'a2c67',
            term: 'ago',
            translation: 'назад',
            example: 'I met her two years ago.',
          },
          {
            id: 'a2c68',
            term: 'last year',
            translation: 'в прошлом году',
            example: 'We went there last year.',
          },
          {
            id: 'a2c69',
            term: 'still',
            translation: 'всё ещё',
            example: 'I still have not packed.',
          },
          {
            id: 'a2c70',
            term: 'when',
            translation: 'когда',
            example: 'When did you arrive?',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Experiences + when',
        promptRu:
          '6 предложений: опыт (Present Perfect) + детали когда (Past Simple).',
        hints: [
          'I have… but I last… in 2020.',
          'Have you ever…? — Yes, I… last year.',
          'I have not… yet.',
        ],
        minSentences: 6,
      },
    ],
  },

  'l2-u3-l4': {
    lessonId: 'l2-u3-l4',
    durationMin: 40,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Travel story mix',
        points: [
          'Смешиваем Past Simple (что случилось), Present Perfect (опыт/результат), First Conditional (планы)',
          'Airport vocab: luggage, gate, boarding pass, customs, aisle/window seat',
          'lost vs found; have you ever lost your luggage?',
          'If I lose my bag, I will go to the desk.',
        ],
        examples: [
          'I have never lost my luggage, but my friend lost hers yesterday.',
          'If we do not hurry, we will miss our gate.',
          'Have you got your boarding pass? I have already checked in.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'Have you ever ___ your boarding pass? (lose)',
        options: ['lost', 'lose', 'losed'],
        answer: 'lost',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'If we do not hurry, we ___ miss our flight.',
        options: ['will', 'would', 'are'],
        answer: 'will',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'I ___ my suitcase at the airport yesterday. (leave)',
        options: ['left', 'have left', 'leaved'],
        answer: 'left',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'The gate number is 12. We have ___ found it.',
        options: ['already', 'yesterday', 'last week'],
        answer: 'already',
      },
      {
        type: 'cloze',
        id: 'e6',
        text: 'I have never ___ through customs alone. Last time I ___ my passport at the hotel, but luckily the staff ___ it.',
        gaps: [
          { id: 'g1', answer: 'been', options: ['been', 'went', 'was'] },
          { id: 'g2', answer: 'left', options: ['left', 'have left', 'leave'] },
          { id: 'g3', answer: 'found', options: ['found', 'have found', 'finds'] },
        ],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'At the airport',
        titleRu: 'Проблема с багажом у выхода на посадку',
        lines: [
          {
            speaker: 'Narrator',
            text: 'Anna has flown many times, but she has never lost her luggage before.',
          },
          {
            speaker: 'Anna',
            text: 'Excuse me, my suitcase is not here.',
          },
          {
            speaker: 'Agent',
            text: 'Do you have your boarding pass and baggage tag?',
          },
          {
            speaker: 'Anna',
            text: 'Yes, here they are. If you find it, will you call me?',
          },
          {
            speaker: 'Agent',
            text: 'Of course. Go to gate 14 now. Your flight boards in twenty minutes.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'Has Anna ever lost her luggage before?',
            options: ['No, never', 'Yes, many times', 'Yes, yesterday only'],
            answer: 'No, never',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Which gate should Anna go to?',
            options: ['Gate 14', 'Gate 12', 'The customs desk'],
            answer: 'Gate 14',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e8',
        title: 'Boarding',
        lines: [
          {
            id: 'd1',
            speaker: 'Staff',
            text: 'Boarding pass, please. Window or aisle?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: 'Aisle, please. I have never had a window seat on a long flight.',
                correct: true,
              },
              {
                text: 'Aisle please I never had window seat long flight yesterday.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Staff',
            text: 'Your bag looks heavy. Need help?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: 'No, thank you. If it is too heavy, I will repack at the gate.',
                correct: true,
              },
              {
                text: 'No thanks if heavy I repacked gate yesterday will.',
                correct: false,
              },
            ],
          },
        ],
      },
      {
        type: 'cards',
        id: 'e9',
        cards: [
          {
            id: 'a2c71',
            term: 'luggage',
            translation: 'багаж',
            example: 'Where is my luggage?',
          },
          {
            id: 'a2c72',
            term: 'boarding pass',
            translation: 'посадочный талон',
            example: 'Show your boarding pass.',
          },
          {
            id: 'a2c73',
            term: 'gate',
            translation: 'выход на посадку',
            example: 'Go to gate 14.',
          },
          {
            id: 'a2c74',
            term: 'customs',
            translation: 'таможня',
            example: 'We went through customs.',
          },
          {
            id: 'a2c75',
            term: 'aisle',
            translation: 'проход (между рядами)',
            example: 'I prefer an aisle seat.',
          },
          {
            id: 'a2c76',
            term: 'window seat',
            translation: 'место у окна',
            example: 'She booked a window seat.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Unit Challenge',
        promptRu:
          'Unit Challenge: «My travel experience» — 10+ предложений: ever/never, Past Simple детали, 2 First Conditional, совет (should).',
        hints: [
          'I have never… / I have already…',
          'Last year I…',
          'If I…, I will…',
          'You should…',
        ],
        minSentences: 10,
      },
    ],
  },
}
