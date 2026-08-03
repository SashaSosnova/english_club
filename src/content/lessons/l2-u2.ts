import type { LessonContent } from '../../types'

export const lessonContents: Record<string, LessonContent> = {
  'l2-u2-l1': {
    lessonId: 'l2-u2-l1',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Comparatives (-er / more)',
        points: [
          'Comparative = сравнение двух вещей: A is bigger than B',
          'Короткие прилагательные: -er (cheap → cheaper, fast → faster)',
          'Длинные (2+ слога): more + adj (more expensive, more comfortable)',
          'Неправильные: good → better, bad → worse, far → further',
          'much / a lot перед comparative: much cheaper, a lot better',
        ],
        examples: [
          'This hotel is cheaper than that one.',
          'The train is faster than the bus.',
          'London is more expensive than my city.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'This room is ___ than the other one. (big)',
        options: ['bigger', 'more big', 'biggest'],
        answer: 'bigger',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'The flight was ___ than I expected. (bad)',
        options: ['worse', 'badder', 'more bad'],
        answer: 'worse',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'The museum is ___ interesting than the park.',
        options: ['more', 'most', 'er'],
        answer: 'more',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'Train tickets are ___ cheaper online.',
        options: ['much', 'very', 'more'],
        answer: 'much',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Compare two hotels',
        tokens: ['This', 'hotel', 'is', 'cheaper', 'than', 'that', 'one', '.'],
        answer: ['This', 'hotel', 'is', 'cheaper', 'than', 'that', 'one', '.'],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Choosing a hotel',
        titleRu: 'Друзья сравнивают два отеля',
        lines: [
          {
            speaker: 'Emma',
            text: 'Which hotel do you prefer — the City View or the Grand?',
          },
          {
            speaker: 'Tom',
            text: 'The City View is cheaper, but the Grand is more comfortable.',
          },
          {
            speaker: 'Emma',
            text: 'Is the City View nearer to the station?',
          },
          {
            speaker: 'Tom',
            text: 'Yes, much nearer. But the rooms are smaller.',
          },
          {
            speaker: 'Emma',
            text: 'The Grand has a better restaurant, though.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'Which hotel is cheaper?',
            options: ['The City View', 'The Grand', 'Both are the same'],
            answer: 'The City View',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Which hotel is more comfortable?',
            options: ['The Grand', 'The City View', 'Neither'],
            answer: 'The Grand',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e8',
        title: 'Pick a ticket',
        lines: [
          {
            id: 'd1',
            speaker: 'Clerk',
            text: 'The morning train is faster. The afternoon one is cheaper.',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: 'I think the morning train is better. It is much faster.',
                correct: true,
              },
              {
                text: 'Morning train is more fast than afternoon good.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Clerk',
            text: 'The afternoon train is more comfortable, though.',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: 'Hmm. The afternoon one is cheaper, so I will take that.',
                correct: true,
              },
              {
                text: 'Afternoon is cheap more than fast yesterday.',
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
            id: 'a2c29',
            term: 'cheaper',
            translation: 'дешевле',
            example: 'This ticket is cheaper than that one.',
          },
          {
            id: 'a2c30',
            term: 'more expensive',
            translation: 'дороже',
            example: 'Flights are more expensive in summer.',
          },
          {
            id: 'a2c31',
            term: 'better',
            translation: 'лучше',
            example: 'The view is better from here.',
          },
          {
            id: 'a2c32',
            term: 'worse',
            translation: 'хуже',
            example: 'The weather got worse.',
          },
          {
            id: 'a2c33',
            term: 'faster',
            translation: 'быстрее',
            example: 'The train is faster than the bus.',
          },
          {
            id: 'a2c34',
            term: 'than',
            translation: 'чем (сравнение)',
            example: 'Rome is warmer than London.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Compare two places',
        promptRu:
          'Сравните два города или два отеля (6 предложений с comparatives).',
        hints: [
          '… is cheaper / more expensive than…',
          '… is better / worse than…',
          'much + comparative',
        ],
        minSentences: 6,
      },
    ],
  },

  'l2-u2-l2': {
    lessonId: 'l2-u2-l2',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Superlatives (the -est / the most)',
        points: [
          'Superlative = самый из группы: the biggest, the most popular',
          'Короткие adj: the + -est (the cheapest, the nearest)',
          'Длинные: the most + adj (the most comfortable, the most interesting)',
          'Неправильные: the best, the worst, the furthest',
          'ever / in my life / in the world — усиливают superlative',
        ],
        examples: [
          'This is the best meal I have ever had.',
          'It is the most popular beach in the area.',
          'That was the worst journey of my life.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'It is ___ restaurant in town. (good)',
        options: ['the best', 'the better', 'the most good'],
        answer: 'the best',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'That was ___ trip I have ever taken. (bad)',
        options: ['the worst', 'the worse', 'the most bad'],
        answer: 'the worst',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'This is ___ popular museum here. (most)',
        options: ['the most', 'the more', 'the -est'],
        answer: 'the most',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'The station is ___ place to catch a bus. (near)',
        options: ['the nearest', 'the nearer', 'the most near'],
        answer: 'the nearest',
      },
      {
        type: 'cloze',
        id: 'e6',
        text: 'Barcelona has ___ beaches in Spain. The Sagrada Familia is ___ building I have ever seen.',
        gaps: [
          {
            id: 'g1',
            answer: 'the best',
            options: ['the best', 'the better', 'best'],
          },
          {
            id: 'g2',
            answer: 'the most amazing',
            options: ['the most amazing', 'the more amazing', 'most amazing'],
          },
        ],
      },
      {
        type: 'builder',
        id: 'e7',
        prompt: 'Superlative opinion',
        tokens: ['It', 'is', 'the', 'best', 'meal', 'I', 'have', 'ever', 'had', '.'],
        answer: ['It', 'is', 'the', 'best', 'meal', 'I', 'have', 'ever', 'had', '.'],
      },
      {
        type: 'listening',
        id: 'e8',
        title: 'City review',
        titleRu: 'Обзор города для туристов',
        lines: [
          {
            speaker: 'Guide',
            text: 'Welcome to Brighton. It has the best fish and chips on the coast.',
          },
          {
            speaker: 'Guide',
            text: 'The Royal Pavilion is the most popular attraction here.',
          },
          {
            speaker: 'Guide',
            text: 'The beach is the nearest place to relax after a long walk.',
          },
          {
            speaker: 'Guide',
            text: 'In my opinion, the pier has the worst coffee in town.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What is the most popular attraction?',
            options: [
              'The Royal Pavilion',
              'The pier',
              'The fish and chips shop',
            ],
            answer: 'The Royal Pavilion',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Where does the guide think the worst coffee is?',
            options: ['On the pier', 'At the beach', 'At the Pavilion'],
            answer: 'On the pier',
          },
        ],
      },
      {
        type: 'cards',
        id: 'e9',
        cards: [
          {
            id: 'a2c35',
            term: 'the best',
            translation: 'лучший',
            example: 'This is the best view.',
          },
          {
            id: 'a2c36',
            term: 'the worst',
            translation: 'худший',
            example: 'It was the worst flight ever.',
          },
          {
            id: 'a2c37',
            term: 'the most popular',
            translation: 'самый популярный',
            example: 'It is the most popular beach.',
          },
          {
            id: 'a2c38',
            term: 'the nearest',
            translation: 'ближайший',
            example: 'Where is the nearest station?',
          },
          {
            id: 'a2c39',
            term: 'ever',
            translation: 'когда-либо',
            example: 'The best meal I have ever had.',
          },
          {
            id: 'a2c40',
            term: 'in my life',
            translation: 'в моей жизни',
            example: 'The best trip in my life.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'The best trip / meal in my life',
        promptRu:
          'Расскажите о лучшей поездке или лучшем блюде в вашей жизни (6 предложений, superlatives).',
        hints: [
          'the best… I have ever…',
          'the most… in my life',
          'the worst… (optional contrast)',
        ],
        minSentences: 6,
      },
    ],
  },

  'l2-u2-l3': {
    lessonId: 'l2-u2-l3',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'should / must / have to',
        points: [
          'should = совет (не обязательно): You should arrive early.',
          'must / have to = обязанность: You must show your passport.',
          "mustn't = запрет (нельзя): You mustn't smoke here.",
          "don't have to = не обязательно (можно не): You don't have to pay now.",
          'have to часто = внешнее правило; must — сильнее / официальнее',
        ],
        examples: [
          'You should book tickets in advance.',
          'You have to queue at security.',
          "You don't have to print your boarding pass.",
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'You ___ show your passport at the border.',
        options: ['have to', 'should', "don't have to"],
        answer: 'have to',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'You ___ be careful with your luggage. (совет)',
        options: ['should', 'must', "mustn't"],
        answer: 'should',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'You ___ smoke on the plane. (запрет)',
        options: ["mustn't", "don't have to", 'should'],
        answer: "mustn't",
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'You ___ pay extra for hand luggage on this airline.',
        options: ["don't have to", 'must', "mustn't"],
        answer: "don't have to",
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Airport advice',
        tokens: ['You', 'should', 'arrive', 'two', 'hours', 'early', '.'],
        answer: ['You', 'should', 'arrive', 'two', 'hours', 'early', '.'],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Airport rules',
        titleRu: 'Объявление в аэропорту',
        lines: [
          {
            speaker: 'Announcer',
            text: 'Passengers must have a valid passport and boarding pass.',
          },
          {
            speaker: 'Announcer',
            text: 'You must not leave bags unattended.',
          },
          {
            speaker: 'Announcer',
            text: 'You should arrive at the gate thirty minutes before departure.',
          },
          {
            speaker: 'Announcer',
            text: 'You do not have to check in again if you already have a boarding pass.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What must passengers have?',
            options: [
              'Passport and boarding pass',
              'Only a ticket',
              'A visa for every country',
            ],
            answer: 'Passport and boarding pass',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Do you have to check in again if you already have a boarding pass?',
            options: ['No', 'Yes', 'Only on international flights'],
            answer: 'No',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e8',
        title: 'Advice for a tourist',
        lines: [
          {
            id: 'd1',
            speaker: 'Friend',
            text: 'I am flying to London tomorrow. Any advice?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: 'You should arrive early. You have to show your passport.',
                correct: true,
              },
              {
                text: 'You must to arrive early and should showing passport.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Friend',
            text: 'Do I need a printed ticket?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: "No, you don't have to print it. But you mustn't forget your ID.",
                correct: true,
              },
              {
                text: "No, you mustn't print and don't have forget ID.",
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
            id: 'a2c41',
            term: 'should',
            translation: 'следует (совет)',
            example: 'You should take a jacket.',
          },
          {
            id: 'a2c42',
            term: 'must',
            translation: 'должен (обязан)',
            example: 'You must have a ticket.',
          },
          {
            id: 'a2c43',
            term: 'have to',
            translation: 'приходится / нужно',
            example: 'I have to work tomorrow.',
          },
          {
            id: 'a2c44',
            term: 'passport',
            translation: 'паспорт',
            example: 'Show your passport, please.',
          },
          {
            id: 'a2c45',
            term: 'on time',
            translation: 'вовремя',
            example: 'The train left on time.',
          },
          {
            id: 'a2c46',
            term: 'careful',
            translation: 'осторожный',
            example: 'Be careful with your bag.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Travel advice',
        promptRu:
          '5 советов другу перед поездкой (should / must / have to / mustn\'t).',
        hints: [
          'You should…',
          'You have to…',
          "You mustn't…",
          "You don't have to…",
        ],
        minSentences: 5,
      },
    ],
  },

  'l2-u2-l4': {
    lessonId: 'l2-u2-l4',
    durationMin: 40,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'may / might (possibility)',
        points: [
          'may / might = возможность (не уверены): It might rain. We may be late.',
          'might чуть менее уверенно, но на A2 почти одинаково',
          'Отрицание: may not / might not — возможно, что не…',
          'Вопросы: Might it rain? May I sit here? (may = разрешение — отдельно)',
          'Часто с depend on, traffic, cancel, available',
        ],
        examples: [
          'We might miss the train if traffic is bad.',
          'The hotel may be full tonight.',
          'It might not open until ten.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'It ___ rain this afternoon.',
        options: ['might', 'must', 'should to'],
        answer: 'might',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'We ___ be late because of the traffic.',
        options: ['may', 'have to', 'must not'],
        answer: 'may',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'The restaurant ___ be closed on Mondays.',
        options: ['might', 'must', 'should'],
        answer: 'might',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'They ___ cancel the flight if the weather gets worse.',
        options: ['might', 'have to not', 'should not'],
        answer: 'might',
      },
      {
        type: 'listening',
        id: 'e6',
        title: 'Hotel reception',
        titleRu: 'Разговор на ресепшене отеля',
        lines: [
          {
            speaker: 'Guest',
            text: 'Do you have a room for tonight?',
          },
          {
            speaker: 'Receptionist',
            text: 'We might have one left, but I am not sure yet.',
          },
          {
            speaker: 'Guest',
            text: 'Could it be a quiet room?',
          },
          {
            speaker: 'Receptionist',
            text: 'It may be available on the third floor. The rooms at the front might be noisier.',
          },
          {
            speaker: 'Guest',
            text: 'Fine. I might stay two nights, depending on the weather.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'Is the receptionist sure there is a room?',
            options: ['No, not yet', 'Yes, definitely', 'The hotel is full'],
            answer: 'No, not yet',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Which rooms might be noisier?',
            options: [
              'Rooms at the front',
              'Rooms on the third floor',
              'All rooms are quiet',
            ],
            answer: 'Rooms at the front',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e7',
        title: 'Uncertain plans',
        lines: [
          {
            id: 'd1',
            speaker: 'Sam',
            text: 'Are we still going to the beach tomorrow?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: 'It might rain, so we may stay in the city instead.',
                correct: true,
              },
              {
                text: 'It must raining and we should staying city.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Sam',
            text: 'What about the museum?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: 'It might be closed on Monday, but we can check online.',
                correct: true,
              },
              {
                text: 'It might closed Monday and we checking never.',
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
            id: 'a2c47',
            term: 'might',
            translation: 'может (возможно)',
            example: 'It might rain later.',
          },
          {
            id: 'a2c48',
            term: 'may',
            translation: 'может (возможно)',
            example: 'We may be late.',
          },
          {
            id: 'a2c49',
            term: 'possible',
            translation: 'возможный',
            example: 'Is it possible to change the date?',
          },
          {
            id: 'a2c50',
            term: 'depend on',
            translation: 'зависеть от',
            example: 'It depends on the traffic.',
          },
          {
            id: 'a2c51',
            term: 'available',
            translation: 'доступный / свободный',
            example: 'Are any seats available?',
          },
          {
            id: 'a2c52',
            term: 'cancel',
            translation: 'отменять',
            example: 'They might cancel the flight.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'Unit Challenge',
        promptRu:
          'Unit Challenge: 1) сравните два варианта (comparatives); 2) 2 совета перед поездкой (should/must); 3) 2 плана с неопределённостью (might/may). Всего 8+ предложений.',
        hints: [
          '… is cheaper / better than…',
          'You should… / You have to…',
          'I might… / We may…',
        ],
        minSentences: 8,
      },
    ],
  },
}
