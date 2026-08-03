import type { LessonContent } from '../../types'

export const lessonContents: Record<string, LessonContent> = {
  'l2-u4-l1': {
    lessonId: 'l2-u4-l1',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'something / anything / nothing / everything',
        points: [
          'something — что-то (утверждение): There is something wrong with the shower.',
          'anything — что-нибудь (вопрос/отрицание): Is there anything I can do? I don\'t have anything.',
          'nothing — ничего (= not anything): There is nothing in the fridge.',
          'everything — всё: Everything is fine now.',
          'somebody/anybody/nobody; somewhere/anywhere/nowhere — та же логика',
          'В вопросах чаще any-: Is there anybody…? Но some- тоже бывает (предложение/ожидание): Would you like something?',
        ],
        examples: [
          'There is something wrong with the Wi-Fi.',
          "I don't have anything for breakfast.",
          'There isn\'t anybody at reception.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'There is ___ wrong with the air conditioning.',
        options: ['something', 'anything', 'nothing'],
        answer: 'something',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: "I don't have ___ to wear tonight.",
        options: ['anything', 'something', 'everything'],
        answer: 'anything',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: "There isn't ___ at reception right now.",
        options: ['anybody', 'somebody', 'nobody'],
        answer: 'anybody',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'There is ___ in the minibar. It is empty.',
        options: ['nothing', 'everything', 'something'],
        answer: 'nothing',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Hotel complaint',
        tokens: [
          'There',
          'is',
          'something',
          'wrong',
          'with',
          'the',
          'shower',
          '.',
        ],
        answer: [
          'There',
          'is',
          'something',
          'wrong',
          'with',
          'the',
          'shower',
          '.',
        ],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Hotel complaint',
        titleRu: 'Жалоба в отеле (TTS + субтитры)',
        lines: [
          {
            speaker: 'Guest',
            text: 'Excuse me. There is something wrong with my room.',
          },
          {
            speaker: 'Receptionist',
            text: 'I am sorry to hear that. What is the problem?',
          },
          {
            speaker: 'Guest',
            text: 'The shower is not working and there is nothing in the minibar.',
          },
          {
            speaker: 'Receptionist',
            text: 'Is there anything else I can help with?',
          },
          {
            speaker: 'Guest',
            text: 'No, that is everything for now. Thank you.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What is wrong with the room?',
            options: [
              'The shower and minibar',
              'The bed is too small',
              'The room is too noisy',
            ],
            answer: 'The shower and minibar',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Does the guest mention anything else?',
            options: ['No', 'Yes — the Wi-Fi', 'Yes — the heating'],
            answer: 'No',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e8',
        title: 'Report a problem',
        lines: [
          {
            id: 'd1',
            speaker: 'Receptionist',
            text: 'Good evening. How can I help you?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: 'There is something wrong with the heating in my room.',
                correct: true,
              },
              {
                text: 'There is anything wrong with heating my room.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Receptionist',
            text: 'I am sorry. Is there anything else?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: 'No, that is everything. Could someone come up, please?',
                correct: true,
              },
              {
                text: 'No, that is nothing. Someone come up please.',
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
            id: 'a2c77',
            term: 'something',
            translation: 'что-то',
            example: 'There is something wrong with the TV.',
          },
          {
            id: 'a2c78',
            term: 'anything',
            translation: 'что-нибудь / что-либо',
            example: 'Is there anything I can do?',
          },
          {
            id: 'a2c79',
            term: 'nothing',
            translation: 'ничего',
            example: 'There is nothing in the fridge.',
          },
          {
            id: 'a2c80',
            term: 'everything',
            translation: 'всё',
            example: 'Everything is ready.',
          },
          {
            id: 'a2c81',
            term: 'somebody',
            translation: 'кто-то',
            example: 'Somebody is at the door.',
          },
          {
            id: 'a2c82',
            term: 'wrong',
            translation: 'не так / неисправный',
            example: 'Something is wrong with the lift.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Report a small problem',
        promptRu:
          'Опишите 5–6 проблем в отеле или квартире: There is something wrong with… / Is there anybody…?',
        hints: [
          'There is something wrong with…',
          "There isn't anything…",
          'Is there anybody who…?',
        ],
        minSentences: 5,
      },
    ],
  },

  'l2-u4-l2': {
    lessonId: 'l2-u4-l2',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'too / enough',
        points: [
          'too + прилагательное — слишком: The room is too small.',
          'not + adj + enough — недостаточно: The bed is not big enough.',
          'adj + enough — достаточно: The soup is warm enough.',
          'too much + uncountable; too many + countable; not enough + noun',
        ],
        examples: [
          'The room is too hot.',
          'The portions are not big enough.',
          'There is too much noise from the street.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'The room is ___ small for two people.',
        options: ['too', 'enough', 'very enough'],
        answer: 'too',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'The soup is not hot ___.',
        options: ['enough', 'too', 'much'],
        answer: 'enough',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'There are ___ many people in the restaurant.',
        options: ['too', 'enough', 'not'],
        answer: 'too',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'The bed is big ___ for me.',
        options: ['enough', 'too', 'much'],
        answer: 'enough',
      },
      {
        type: 'cloze',
        id: 'e6',
        text: 'The room was ___ cold last night. The blankets were not warm ___. There was ___ much noise from the corridor.',
        gaps: [
          { id: 'g1', answer: 'too', options: ['too', 'enough', 'very'] },
          { id: 'g2', answer: 'enough', options: ['enough', 'too', 'much'] },
          { id: 'g3', answer: 'too', options: ['too', 'enough', 'not'] },
        ],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Room review',
        titleRu: 'Отзыв о номере и еде',
        lines: [
          {
            speaker: 'Guest',
            text: 'The room was too small for two of us.',
          },
          {
            speaker: 'Guest',
            text: 'The bed was comfortable enough, but it was too noisy at night.',
          },
          {
            speaker: 'Guest',
            text: 'Dinner was delicious, but the starter was too spicy for me.',
          },
          {
            speaker: 'Guest',
            text: 'The portions were not big enough, so I ordered dessert.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What was too small?',
            options: ['The room', 'The bed', 'The dessert'],
            answer: 'The room',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Why did the guest order dessert?',
            options: [
              'The portions were not big enough',
              'The starter was too spicy',
              'There was nothing on the menu',
            ],
            answer: 'The portions were not big enough',
          },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'a2c83',
            term: 'too hot',
            translation: 'слишком жарко',
            example: 'It is too hot in here.',
          },
          {
            id: 'a2c84',
            term: 'too cold',
            translation: 'слишком холодно',
            example: 'The soup is too cold.',
          },
          {
            id: 'a2c85',
            term: 'big enough',
            translation: 'достаточно большой',
            example: 'The room is big enough.',
          },
          {
            id: 'a2c86',
            term: 'spicy',
            translation: 'острый (о еде)',
            example: 'This curry is too spicy.',
          },
          {
            id: 'a2c87',
            term: 'comfortable',
            translation: 'удобный / комфортный',
            example: 'The bed was comfortable enough.',
          },
          {
            id: 'a2c88',
            term: 'loud',
            translation: 'громкий',
            example: 'The music is too loud.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'Feedback about a room or meal',
        promptRu:
          'Напишите 5–6 предложений отзыва: too… / not… enough / too much/many…',
        hints: [
          'The room was too…',
          'It was not… enough.',
          'There was too much…',
        ],
        minSentences: 5,
      },
    ],
  },

  'l2-u4-l3': {
    lessonId: 'l2-u4-l3',
    durationMin: 38,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Restaurant requests',
        points: [
          "I'd like… — вежливая просьба: I'd like the fish, please.",
          'Could I have…? / Can I get…? — Could I have the bill, please?',
          'without + noun — без: without cheese, without nuts',
          'instead of — вместо: salad instead of chips',
          'Do you recommend…? — Could you recommend a starter?',
        ],
        examples: [
          "I'd like a table for two, please.",
          'Could I have the soup without cream?',
          "I'll have the pasta instead of the rice.",
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: '___ I have the bill, please?',
        options: ['Could', 'Am', 'Do'],
        answer: 'Could',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: "I'd like the salad ___ cheese, please.",
        options: ['without', 'instead', 'instead of'],
        answer: 'without',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'Could you ___ a vegetarian main course?',
        options: ['recommend', 'recommends', 'recommending'],
        answer: 'recommend',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: "I'll have soup ___ of the starter.",
        options: ['instead', 'without', 'instead of'],
        answer: 'instead',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Special request',
        tokens: [
          "I'd",
          'like',
          'the',
          'pasta',
          'without',
          'garlic',
          ',',
          'please',
          '.',
        ],
        answer: [
          "I'd",
          'like',
          'the',
          'pasta',
          'without',
          'garlic',
          ',',
          'please',
          '.',
        ],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Ordering with constraints',
        titleRu: 'Заказ с особыми пожеланиями',
        lines: [
          {
            speaker: 'Waiter',
            text: 'Good evening. Are you ready to order?',
          },
          {
            speaker: 'Customer',
            text: "Yes. I'd like the soup, please, but without cream.",
          },
          {
            speaker: 'Waiter',
            text: 'Of course. And for your main course?',
          },
          {
            speaker: 'Customer',
            text: 'Could I have the grilled fish? I have a nut allergy.',
          },
          {
            speaker: 'Waiter',
            text: 'No problem. Would you like anything to drink?',
          },
          {
            speaker: 'Customer',
            text: 'Just water, please. And could we have the bill separately?',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What does the customer want without cream?',
            options: ['The soup', 'The fish', 'The dessert'],
            answer: 'The soup',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Why does the customer choose the fish carefully?',
            options: [
              'They have a nut allergy',
              'They are vegetarian',
              'The fish is too spicy',
            ],
            answer: 'They have a nut allergy',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e8',
        title: 'Order at a restaurant',
        lines: [
          {
            id: 'd1',
            speaker: 'Waiter',
            text: 'What would you like for your main course?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: "I'd like the risotto, please. Could you make it without cheese?",
                correct: true,
              },
              {
                text: 'I like risotto make no cheese please want.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Waiter',
            text: 'Certainly. Anything else?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: 'Could you recommend a dessert? Something not too sweet.',
                correct: true,
              },
              {
                text: 'Recommend dessert something no sweet too.',
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
            id: 'a2c89',
            term: 'starter',
            translation: 'закуска / первое блюдо',
            example: "I'd like a starter, please.",
          },
          {
            id: 'a2c90',
            term: 'main course',
            translation: 'основное блюдо',
            example: 'What is the main course today?',
          },
          {
            id: 'a2c91',
            term: 'allergy',
            translation: 'аллергия',
            example: 'I have a nut allergy.',
          },
          {
            id: 'a2c92',
            term: 'vegetarian',
            translation: 'вегетарианский',
            example: 'Do you have a vegetarian option?',
          },
          {
            id: 'a2c93',
            term: 'bill',
            translation: 'счёт (BrE)',
            example: 'Could I have the bill, please?',
          },
          {
            id: 'a2c94',
            term: 'recommend',
            translation: 'рекомендовать',
            example: 'What do you recommend?',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Restaurant dialogue',
        promptRu:
          'Напишите диалог в ресторане (8–10 реплик): заказ, особые пожелания, счёт. Используйте I\'d like / Could I… / without / instead of.',
        hints: [
          "I'd like…, please.",
          'Could I have…?',
          'without / instead of',
          'Could you recommend…?',
        ],
        minSentences: 8,
      },
    ],
  },

  'l2-u4-l4': {
    lessonId: 'l2-u4-l4',
    durationMin: 40,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Shopping & returns (review)',
        points: [
          'Покупки: Can I try this on? Do you have this in a larger size?',
          'Возврат: I\'d like to return this, please. Here is my receipt.',
          'Повторяем: something/anything; too/enough; polite requests',
          'exchange — обмен; refund — возврат денег; damaged — повреждённый',
        ],
        examples: [
          "I'd like to return this jacket. It doesn't fit.",
          'Do you have anything in a medium?',
          'The zip is broken. Can I exchange it?',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'Can I ___ this on, please?',
        options: ['try', 'tries', 'trying'],
        answer: 'try',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: "I'd like to ___ this shirt. It's too small.",
        options: ['return', 'returns', 'returning'],
        answer: 'return',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'Do you have ___ in a larger size?',
        options: ['anything', 'nothing', 'somebody'],
        answer: 'anything',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'The sleeve is ___. Can I exchange it?',
        options: ['damaged', 'delicious', 'comfortable'],
        answer: 'damaged',
      },
      {
        type: 'cloze',
        id: 'e6',
        text: "I'd like to ___ this, please. Here is my ___. The jacket is ___ big enough — it's too small. Is there ___ in a medium?",
        gaps: [
          { id: 'g1', answer: 'return', options: ['return', 'exchange', 'try'] },
          { id: 'g2', answer: 'receipt', options: ['receipt', 'bill', 'tip'] },
          {
            id: 'g3',
            answer: 'not',
            options: ['not', 'too', 'enough'],
          },
          { id: 'g4', answer: 'anything', options: ['anything', 'nothing', 'everything'] },
        ],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Returning a jacket',
        titleRu: 'Возврат в магазине (45–60 сек)',
        lines: [
          {
            speaker: 'Customer',
            text: "Excuse me. I'd like to return this jacket, please.",
          },
          {
            speaker: 'Assistant',
            text: 'Of course. Do you have the receipt?',
          },
          {
            speaker: 'Customer',
            text: 'Yes, here it is. The jacket is too small and there is something wrong with the zip.',
          },
          {
            speaker: 'Assistant',
            text: 'I am sorry about that. Would you like a refund or an exchange?',
          },
          {
            speaker: 'Customer',
            text: 'Could I exchange it for a larger size? If not, a refund is fine.',
          },
          {
            speaker: 'Assistant',
            text: 'Let me check. Yes, we have a medium. One moment, please.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'Why does the customer want to return the jacket?',
            options: [
              'Too small and a problem with the zip',
              'Too expensive',
              'Wrong colour',
            ],
            answer: 'Too small and a problem with the zip',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'What does the customer prefer?',
            options: [
              'An exchange for a larger size',
              'A discount only',
              'Nothing — just complaining',
            ],
            answer: 'An exchange for a larger size',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e8',
        title: 'Shop return',
        lines: [
          {
            id: 'd1',
            speaker: 'Assistant',
            text: 'How can I help you?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: "I'd like to return these shoes. They're damaged.",
                correct: true,
              },
              {
                text: 'I return shoes damaged are they please.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Assistant',
            text: 'Do you have the receipt?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: 'Yes, here it is. Could I have a refund, please?',
                correct: true,
              },
              {
                text: 'Yes receipt here. Refund I want now.',
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
            id: 'a2c95',
            term: 'try on',
            translation: 'примерить',
            example: 'Can I try this on?',
          },
          {
            id: 'a2c96',
            term: 'receipt',
            translation: 'чек',
            example: 'Do you have the receipt?',
          },
          {
            id: 'a2c97',
            term: 'return',
            translation: 'вернуть (товар)',
            example: "I'd like to return this.",
          },
          {
            id: 'a2c98',
            term: 'exchange',
            translation: 'обменять',
            example: 'Can I exchange it for another size?',
          },
          {
            id: 'a2c99',
            term: 'discount',
            translation: 'скидка',
            example: 'Is there a discount on this?',
          },
          {
            id: 'a2c100',
            term: 'damaged',
            translation: 'повреждённый',
            example: 'The box is damaged.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Unit Challenge',
        promptRu:
          'Unit Challenge: 1) жалоба в отеле (something wrong / too…); 2) заказ в ресторане (I\'d like / without); 3) возврат в магазине. Всего 10+ предложений.',
        hints: [
          'There is something wrong with…',
          'The room is too…',
          "I'd like… without…",
          "I'd like to return…",
        ],
        minSentences: 10,
      },
    ],
  },
}
