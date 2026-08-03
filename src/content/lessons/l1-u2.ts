import type { LessonContent } from '../../types'

export const lessonContents: Record<string, LessonContent> = {
  'l1-u2-l1': {
    lessonId: 'l1-u2-l1',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Plurals & these / those',
        points: [
          'Обычно + -s: apple → apples, key → keys',
          '-es после s/ss/sh/ch/x: bus → buses, sandwich → sandwiches',
          'Неправильные: man → men, woman → women, child → children, person → people',
          'these — эти (близко), those — те (дальше)',
        ],
        examples: [
          'These are my keys.',
          'Those are buses.',
          'These people are students.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'one apple → two ___',
        options: ['apple', 'apples', 'appleses'],
        answer: 'apples',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'one bus → two ___',
        options: ['bus', 'buss', 'buses'],
        answer: 'buses',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'one child → two ___',
        options: ['childs', 'children', 'childes'],
        answer: 'children',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: '___ are my shoes. (близко)',
        options: ['This', 'These', 'Those'],
        answer: 'These',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Соберите предложение',
        tokens: ['Those', 'are', 'my', 'glasses', '.'],
        answer: ['Those', 'are', 'my', 'glasses', '.'],
      },
      {
        type: 'cloze',
        id: 'e7',
        text: '___ are sandwiches, and ___ are oranges. (близко / далеко)',
        gaps: [
          { id: 'g1', answer: 'These', options: ['This', 'These', 'Those'] },
          { id: 'g2', answer: 'those', options: ['that', 'these', 'those'] },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'u2c1',
            term: 'apple',
            translation: 'яблоко',
            example: 'These are apples.',
          },
          {
            id: 'u2c2',
            term: 'key / keys',
            translation: 'ключ / ключи',
            example: 'Where are my keys?',
          },
          {
            id: 'u2c3',
            term: 'bus / buses',
            translation: 'автобус / автобусы',
            example: 'Those buses are late.',
          },
          {
            id: 'u2c4',
            term: 'man / men',
            translation: 'мужчина / мужчины',
            example: 'These men are teachers.',
          },
          {
            id: 'u2c5',
            term: 'woman / women',
            translation: 'женщина / женщины',
            example: 'Those women are friends.',
          },
          {
            id: 'u2c6',
            term: 'shoes',
            translation: 'обувь / туфли',
            example: 'These are my shoes.',
          },
          {
            id: 'u2c7',
            term: 'glasses',
            translation: 'очки',
            example: 'Where are my glasses?',
          },
          {
            id: 'u2c8',
            term: 'sandwich',
            translation: 'сэндвич',
            example: 'I have two sandwiches.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'Picture on the table',
        promptRu:
          'Опишите «стол с вещами»: 5–6 предложений с these/those и множественным числом.',
        hints: ['These are…', 'Those are…', 'apples', 'keys', 'shoes'],
        minSentences: 5,
      },
    ],
  },

  'l1-u2-l2': {
    lessonId: 'l1-u2-l2',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'There is / There are',
        points: [
          'There is — есть (один): There is a sofa.',
          'There are — есть (много): There are two chairs.',
          'Отрицание: There isn\'t… / There aren\'t…',
          'Вопрос: Is there…? Are there…? — Yes, there is. / No, there aren\'t.',
        ],
        examples: [
          'There is a lamp in my room.',
          'There are three windows.',
          'Is there a fridge in the kitchen?',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: '___ a sofa in the room.',
        options: ['There is', 'There are', 'There am'],
        answer: 'There is',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: '___ two bedrooms.',
        options: ['There is', 'There are', 'There'],
        answer: 'There are',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: '___ a plant on the table?',
        options: ['Is there', 'Are there', 'There is'],
        answer: 'Is there',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'There ___ a TV. (отрицание)',
        options: ["isn't", "aren't", "am not"],
        answer: "isn't",
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Соберите вопрос',
        tokens: ['Are', 'there', 'pictures', 'on', 'the', 'wall', '?'],
        answer: ['Are', 'there', 'pictures', 'on', 'the', 'wall', '?'],
      },
      {
        type: 'cloze',
        id: 'e7',
        text: 'In my kitchen ___ a fridge, and ___ four chairs.',
        gaps: [
          {
            id: 'g1',
            answer: 'there is',
            options: ['there is', 'there are', 'is there'],
          },
          {
            id: 'g2',
            answer: 'there are',
            options: ['there is', 'there are', 'are there'],
          },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'u2c9',
            term: 'room',
            translation: 'комната',
            example: 'There is a big room.',
          },
          {
            id: 'u2c10',
            term: 'kitchen',
            translation: 'кухня',
            example: 'There is a fridge in the kitchen.',
          },
          {
            id: 'u2c11',
            term: 'bathroom',
            translation: 'ванная',
            example: 'Is there a bathroom?',
          },
          {
            id: 'u2c12',
            term: 'sofa',
            translation: 'диван',
            example: 'There is a sofa.',
          },
          {
            id: 'u2c13',
            term: 'fridge',
            translation: 'холодильник',
            example: 'The fridge is white.',
          },
          {
            id: 'u2c14',
            term: 'lamp',
            translation: 'лампа',
            example: 'There is a lamp next to the bed.',
          },
          {
            id: 'u2c15',
            term: 'wall',
            translation: 'стена',
            example: 'There are pictures on the wall.',
          },
          {
            id: 'u2c16',
            term: 'floor',
            translation: 'пол',
            example: 'There is a bag on the floor.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'In my room',
        promptRu:
          'Опишите свою комнату: 6 предложений с There is / There are / There isn\'t.',
        hints: [
          'There is a…',
          'There are…',
          "There isn't a…",
          'sofa',
          'window',
        ],
        minSentences: 6,
      },
    ],
  },

  'l1-u2-l3': {
    lessonId: 'l1-u2-l3',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'have got / has got',
        points: [
          "I/you/we/they have got → I've got…",
          "he/she/it has got → She's got…",
          "Отрицание: haven't got / hasn't got",
          'Вопрос: Have you got…? Has she got…?',
          'В американском часто говорят have/has без got — пока учим британскую форму.',
        ],
        examples: [
          "I've got a bike.",
          "She hasn't got a car.",
          'Have you got a minute?',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'I ___ a laptop.',
        options: ['have got', 'has got', 'have'],
        answer: 'have got',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'He ___ a dog.',
        options: ['have got', 'has got', 'haves got'],
        answer: 'has got',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'We ___ a car. (отрицание)',
        options: ["haven't got", "hasn't got", "haven't"],
        answer: "haven't got",
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: '___ you got a pet?',
        options: ['Have', 'Has', 'Do'],
        answer: 'Have',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Соберите фразу',
        tokens: ["I've", 'got', 'an', 'idea', '.'],
        answer: ["I've", 'got', 'an', 'idea', '.'],
      },
      {
        type: 'dialogue',
        id: 'e7',
        title: 'Have you got…?',
        lines: [
          { id: 'd1', speaker: 'Sam', text: 'Have you got a bike?' },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              { text: "Yes, I've got a bike.", correct: true },
              { text: 'Yes, I has got a bike.', correct: false },
              { text: 'Yes, there is a bike.', correct: false },
            ],
          },
          { id: 'd3', speaker: 'Sam', text: 'Has your sister got a laptop?' },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              { text: "Yes, she's got a laptop.", correct: true },
              { text: "Yes, she's have got a laptop.", correct: false },
            ],
          },
          {
            id: 'd5',
            speaker: 'Sam',
            text: "Nice. I've got an idea for the weekend.",
          },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'u2c17',
            term: "I've got",
            translation: 'у меня есть',
            example: "I've got a question.",
          },
          {
            id: 'u2c18',
            term: "she's got",
            translation: 'у неё есть',
            example: "She's got a job.",
          },
          {
            id: 'u2c19',
            term: 'pet',
            translation: 'домашнее животное',
            example: 'Have you got a pet?',
          },
          {
            id: 'u2c20',
            term: 'laptop',
            translation: 'ноутбук',
            example: "I've got a new laptop.",
          },
          {
            id: 'u2c21',
            term: 'bike',
            translation: 'велосипед',
            example: "He's got a bike.",
          },
          {
            id: 'u2c22',
            term: 'job',
            translation: 'работа',
            example: "She's got a good job.",
          },
          {
            id: 'u2c23',
            term: 'idea',
            translation: 'идея',
            example: "I've got an idea.",
          },
          {
            id: 'u2c24',
            term: 'problem',
            translation: 'проблема',
            example: "We've got a problem.",
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: "I've got / I haven't got",
        promptRu:
          '5 предложений: что у вас есть и чего нет (I\'ve got / I haven\'t got).',
        hints: ["I've got…", "I haven't got…", 'car', 'pet', 'laptop'],
        minSentences: 5,
      },
    ],
  },

  'l1-u2-l4': {
    lessonId: 'l1-u2-l4',
    durationMin: 40,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'В кафе: заказ и вежливость',
        points: [
          'Can I have…, please? — можно мне…?',
          "I'd like… — я бы хотел(а)… (полезно запомнить целиком)",
          'The bill, please. — счёт, пожалуйста',
          'a/an с едой: a salad, an orange juice (если countable / порция)',
          'some — немного (часто с едой/напитками): some water, some bread',
        ],
        examples: [
          'Can I have a coffee, please?',
          "I'd like a salad.",
          'The bill, please.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'Can I have ___ tea, please?',
        options: ['a', 'an', 'two'],
        answer: 'a',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: "I'd like ___ orange juice.",
        options: ['a', 'an', 'the'],
        answer: 'an',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: '___ bill, please.',
        options: ['A', 'An', 'The'],
        answer: 'The',
      },
      {
        type: 'builder',
        id: 'e5',
        prompt: 'Соберите заказ',
        tokens: ['Can', 'I', 'have', 'a', 'coffee', ',', 'please', '?'],
        answer: ['Can', 'I', 'have', 'a', 'coffee', ',', 'please', '?'],
      },
      {
        type: 'cloze',
        id: 'e6',
        text: "I'd like ___ salad and ___ water, please.",
        gaps: [
          { id: 'g1', answer: 'a', options: ['a', 'an', 'some'] },
          { id: 'g2', answer: 'some', options: ['a', 'an', 'some'] },
        ],
      },
      {
        type: 'dialogue',
        id: 'e7',
        title: 'In a café',
        lines: [
          {
            id: 'd1',
            speaker: 'Waiter',
            text: 'Hello! What would you like?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              { text: "I'd like a salad and a tea, please.", correct: true },
              { text: 'I am a salad.', correct: false },
              { text: 'There are bill.', correct: false },
            ],
          },
          {
            id: 'd3',
            speaker: 'Waiter',
            text: 'Sure. Anything else?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              { text: 'No, thank you. The bill, please.', correct: true },
              { text: 'No, I have got bill.', correct: false },
            ],
          },
          {
            id: 'd5',
            speaker: 'Waiter',
            text: 'Of course. Here you are.',
          },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'u2c25',
            term: 'menu',
            translation: 'меню',
            example: 'Can I see the menu?',
          },
          {
            id: 'u2c26',
            term: 'order',
            translation: 'заказ / заказывать',
            example: 'Are you ready to order?',
          },
          {
            id: 'u2c27',
            term: 'salad',
            translation: 'салат',
            example: "I'd like a salad.",
          },
          {
            id: 'u2c28',
            term: 'soup',
            translation: 'суп',
            example: 'Can I have some soup?',
          },
          {
            id: 'u2c29',
            term: 'juice',
            translation: 'сок',
            example: 'An orange juice, please.',
          },
          {
            id: 'u2c30',
            term: 'bill',
            translation: 'счёт',
            example: 'The bill, please.',
          },
          {
            id: 'u2c31',
            term: "I'd like",
            translation: 'я бы хотел(а)',
            example: "I'd like some bread.",
          },
          {
            id: 'u2c32',
            term: 'bottle',
            translation: 'бутылка',
            example: 'A bottle of water, please.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'Unit Challenge',
        promptRu:
          'Unit Challenge: 1) опишите кухню (There is/are); 2) сделайте заказ в кафе. Всего 6–8 предложений.',
        hints: [
          'There is…',
          'There are…',
          'Can I have…, please?',
          "I'd like…",
          'The bill, please.',
        ],
        minSentences: 6,
      },
    ],
  },
}
