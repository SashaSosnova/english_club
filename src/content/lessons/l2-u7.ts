import type { LessonContent } from '../../types'

export const lessonContents: Record<string, LessonContent> = {
  'l2-u7-l1': {
    lessonId: 'l2-u7-l1',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Reported speech — say & tell',
        points: [
          'say + (that): She said (that) she was tired.',
          'tell + person + (that): He told me (that) the train was late.',
          'Нельзя: *He told that…* → He said that… / He told me that…',
          'Backshift (лёгкий): am/is → was; will → would; can → could',
          'ask: She asked if I was ready.',
        ],
        examples: [
          'Sam said the hotel was full.',
          'The receptionist told me my room was ready.',
          'She asked if I needed help.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'She ___ me the flight was cancelled.',
        options: ['told', 'said', 'spoke'],
        answer: 'told',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'He ___ that he would call later.',
        options: ['said', 'told', 'spoke to'],
        answer: 'said',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'Direct: "I am busy." → Reported: She said she ___ busy.',
        options: ['was', 'is', 'were'],
        answer: 'was',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'They ___ if we had a reservation.',
        options: ['asked', 'told', 'said'],
        answer: 'asked',
      },
      {
        type: 'drill',
        id: 'e6',
        prompt: 'Direct: "I will call later." → She said she ___ call later.',
        options: ['would', 'will', 'was'],
        answer: 'would',
      },
      {
        type: 'builder',
        id: 'e7',
        prompt: 'Report the message',
        tokens: ['She', 'told', 'me', 'the', 'room', 'was', 'ready', '.'],
        answer: ['She', 'told', 'me', 'the', 'room', 'was', 'ready', '.'],
      },
      {
        type: 'listening',
        id: 'e8',
        title: 'Voicemail from the hotel',
        titleRu: 'Голосовое сообщение от отеля',
        lines: [
          {
            speaker: 'Receptionist',
            text: 'Hello. This is Park Hotel.',
          },
          {
            speaker: 'Receptionist',
            text: 'I am calling about your booking.',
          },
          {
            speaker: 'Receptionist',
            text: 'Your room is ready now.',
          },
          {
            speaker: 'Receptionist',
            text: 'Please come to reception when you arrive.',
          },
          {
            speaker: 'Receptionist',
            text: 'If you need a late check-in, call us back.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What did the hotel say about the room?',
            options: ['It is ready now', 'It is broken', 'It is too small'],
            answer: 'It is ready now',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'What should you do when you arrive?',
            options: ['Go to reception', 'Wait in the car park', 'Send an email only'],
            answer: 'Go to reception',
          },
        ],
      },
      {
        type: 'cloze',
        id: 'e9',
        text: 'The driver ___ the road was closed. He ___ us to take a different route. I ___ him I understood.',
        gaps: [
          { id: 'g1', answer: 'said', options: ['said', 'told', 'asked'] },
          { id: 'g2', answer: 'told', options: ['told', 'said', 'spoke'] },
          { id: 'g3', answer: 'told', options: ['told', 'said', 'asked'] },
        ],
      },
      {
        type: 'cards',
        id: 'e10',
        cards: [
          {
            id: 'a2c149',
            term: 'say',
            translation: 'сказать (say that…)',
            example: 'She said that she was tired.',
          },
          {
            id: 'a2c150',
            term: 'tell',
            translation: 'сказать кому-то (tell someone…)',
            example: 'He told me the news.',
          },
          {
            id: 'a2c151',
            term: 'ask',
            translation: 'спрашивать',
            example: 'She asked if I was ready.',
          },
          {
            id: 'a2c152',
            term: 'message',
            translation: 'сообщение',
            example: 'I left a message on your phone.',
          },
          {
            id: 'a2c153',
            term: 'promise',
            translation: 'обещать / обещание',
            example: 'He promised that he would call.',
          },
          {
            id: 'a2c154',
            term: 'explain',
            translation: 'объяснять',
            example: 'She explained that the train was late.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e11',
        prompt: 'Report the voicemail',
        promptRu:
          'Перескажите voicemail из listening в reported speech (4+ предложения): said/told + was/would.',
        hints: [
          'She said (that) the room was ready.',
          'She told me to come to reception.',
          'She said they would…',
          'was / would',
        ],
        minSentences: 4,
      },
    ],
  },

  'l2-u7-l2': {
    lessonId: 'l2-u7-l2',
    durationMin: 38,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Housing & daily problems',
        points: [
          'Problems: The Wi-Fi is broken. There is a leak. The heating does not work.',
          'People: neighbour, landlord, flat, rent',
          'Recent problems: I\'ve had problems with the heating since Monday.',
          'Requests: You should call the landlord. Could you fix this urgently?',
          'Complaints: I\'d like to complain about the noise.',
        ],
        examples: [
          "I've had a leak in the bathroom since last week.",
          'My neighbour is very noisy at night.',
          'The landlord said he would send a repair worker.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'The ___ is very loud. I cannot sleep.',
        options: ['neighbour', 'landlord', 'rent'],
        answer: 'neighbour',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'There is a ___ in the kitchen ceiling.',
        options: ['leak', 'key', 'signal'],
        answer: 'leak',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'We ___ to pay rent at the start of each month.',
        options: ['have', 'must to', 'should to'],
        answer: 'have',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: "I've ___ problems with the Wi-Fi since yesterday.",
        options: ['had', 'have', 'having'],
        answer: 'had',
      },
      {
        type: 'dialogue',
        id: 'e6',
        title: 'Calling the landlord',
        lines: [
          {
            id: 'd1',
            speaker: 'You',
            text: 'Hello. I need to report a problem in my flat.',
          },
          {
            id: 'd2',
            speaker: 'Landlord',
            text: 'What is wrong?',
          },
          {
            id: 'd3',
            speaker: 'You',
            choices: [
              {
                text: "There's a leak under the sink, and the heating isn't working.",
                correct: true,
              },
              {
                text: 'Leak is sink and heating no work yesterday always.',
                correct: false,
              },
            ],
          },
          {
            id: 'd4',
            speaker: 'Landlord',
            text: 'Thank you. I will send someone to fix it urgently.',
          },
          {
            id: 'd5',
            speaker: 'You',
            choices: [
              {
                text: 'Thank you. Could they come today if possible?',
                correct: true,
              },
              {
                text: 'Fix now you must come today no wait.',
                correct: false,
              },
            ],
          },
        ],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Flat problems',
        titleRu: 'Жильец описывает проблемы в квартире',
        lines: [
          {
            speaker: 'Tenant',
            text: "I've lived in this flat for six months.",
          },
          {
            speaker: 'Tenant',
            text: 'Last week the Wi-Fi stopped working.',
          },
          {
            speaker: 'Tenant',
            text: 'My neighbour plays loud music at night.',
          },
          {
            speaker: 'Tenant',
            text: 'I complained to the landlord twice.',
          },
          {
            speaker: 'Tenant',
            text: 'Yesterday someone came to fix the router.',
          },
          {
            speaker: 'Tenant',
            text: 'The noise is better now, but I still need a new key.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What problem did the landlord fix yesterday?',
            options: ['The Wi-Fi / router', 'The leak', 'The heating'],
            answer: 'The Wi-Fi / router',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'What does the tenant still need?',
            options: ['A new key', 'A new landlord', 'A bigger flat'],
            answer: 'A new key',
          },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'a2c155',
            term: 'flat',
            translation: 'квартира (BrE)',
            example: 'I rent a small flat near the station.',
          },
          {
            id: 'a2c156',
            term: 'neighbour',
            translation: 'сосед',
            example: 'My neighbour is noisy at night.',
          },
          {
            id: 'a2c157',
            term: 'leak',
            translation: 'протечка',
            example: 'There is a leak in the bathroom.',
          },
          {
            id: 'a2c158',
            term: 'landlord',
            translation: 'арендодатель / хозяин жилья',
            example: 'I called the landlord about the heating.',
          },
          {
            id: 'a2c159',
            term: 'repair',
            translation: 'ремонт / чинить',
            example: 'They sent a repair worker.',
          },
          {
            id: 'a2c160',
            term: 'urgently',
            translation: 'срочно',
            example: 'Please fix this urgently.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'Explain a housing problem',
        promptRu:
          'Опишите проблему в жилье и попросите помощь (6–8 предложений). Wi-Fi / шум / протечка / heating.',
        hints: [
          "There's something wrong with…",
          "I've had… since…",
          'My neighbour…',
          'Could you fix… urgently?',
        ],
        minSentences: 6,
      },
    ],
  },

  'l2-u7-l3': {
    lessonId: 'l2-u7-l3',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Technology & getting help',
        points: [
          'Polite requests: Can you…? / Could you…? / How do I…?',
          'Instructions: First… Then… After that… Finally…',
          'Problems: low battery, no signal, wrong password, screen frozen',
          'Support: restart the device, log in, download / upload, charge the phone',
        ],
        examples: [
          'Could you help me log in to my account?',
          'First restart your phone. Then check the signal.',
          'My battery is low — I need to charge it.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: '___ you help me reset my password?',
        options: ['Could', 'Must', 'Should to'],
        answer: 'Could',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'My phone ___ is at five per cent.',
        options: ['battery', 'signal', 'screen'],
        answer: 'battery',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'There is no ___ in the basement.',
        options: ['signal', 'password', 'account'],
        answer: 'signal',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'Try to ___ the app and open it again.',
        options: ['restart', 'upload', 'charge'],
        answer: 'restart',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Tech help steps',
        tokens: ['First', ',', 'restart', 'your', 'phone', '.', 'Then', 'log', 'in', 'again', '.'],
        answer: ['First', ',', 'restart', 'your', 'phone', '.', 'Then', 'log', 'in', 'again', '.'],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Helpdesk call',
        titleRu: 'Короткий звонок в техподдержку',
        lines: [
          {
            speaker: 'Support',
            text: 'Good afternoon. Tech Support. How can I help?',
          },
          {
            speaker: 'Customer',
            text: 'Hello. I cannot log in to my account.',
          },
          {
            speaker: 'Support',
            text: 'All right. First, check your password.',
          },
          {
            speaker: 'Support',
            text: 'Then restart the app on your phone.',
          },
          {
            speaker: 'Customer',
            text: 'OK. I did that, but the screen is still blank.',
          },
          {
            speaker: 'Support',
            text: 'Could you try going offline and back online? That often fixes it.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What is the customer\'s main problem?',
            options: ['Cannot log in', 'Broken screen', 'Lost password only forever'],
            answer: 'Cannot log in',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'What does support suggest after restarting the app?',
            options: ['Go offline and back online', 'Buy a new phone', 'Change the account name'],
            answer: 'Go offline and back online',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e8',
        title: 'Ask for tech help',
        lines: [
          {
            id: 'd1',
            speaker: 'Friend',
            text: 'You look worried. What is wrong?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: 'My phone will not charge, and I have no signal here.',
                correct: true,
              },
              {
                text: 'Phone no charge signal bad me angry now.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Friend',
            text: 'Could you try a different cable?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: 'Good idea. Could you also help me download the ticket again?',
                correct: true,
              },
              {
                text: 'Cable no. You download me ticket now hurry.',
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
            id: 'a2c161',
            term: 'charge',
            translation: 'заряжать / заряд',
            example: 'I need to charge my phone.',
          },
          {
            id: 'a2c162',
            term: 'password',
            translation: 'пароль',
            example: 'I forgot my password.',
          },
          {
            id: 'a2c163',
            term: 'log in',
            translation: 'войти (в аккаунт)',
            example: 'I cannot log in to my account.',
          },
          {
            id: 'a2c164',
            term: 'download',
            translation: 'скачивать',
            example: 'Could you download the file again?',
          },
          {
            id: 'a2c165',
            term: 'signal',
            translation: 'сигнал (связи)',
            example: 'There is no signal in the tunnel.',
          },
          {
            id: 'a2c166',
            term: 'restart',
            translation: 'перезагрузить',
            example: 'Restart your computer and try again.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Tech help step by step',
        promptRu:
          'Опишите техническую проблему и попросите помощь по шагам (6–8 предложений). Could you… / First… Then…',
        hints: [
          'I cannot log in…',
          'Could you help me…?',
          'First… Then… Finally…',
          'My battery / signal / screen…',
        ],
        minSentences: 6,
      },
    ],
  },

  'l2-u7-l4': {
    lessonId: 'l2-u7-l4',
    durationMin: 40,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Level 2 Review — A2 exit',
        points: [
          'Travel: arrangements, delays, hotel, restaurant, shopping',
          'Grammar mix: Past Simple, Present Perfect, should/must, if-plans, reported speech',
          'Opinions: I think… / In my opinion… / agree / disagree',
          'Stories: linking words — first, then, because, so, finally',
          'Level Challenge: connected holiday story + advice for a tourist',
        ],
        examples: [
          'Last summer I flew to Edinburgh. The hotel was comfortable.',
          'In my opinion, you should visit the old town first.',
          'She told me the train would be late, so I took a taxi.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: '___ you ever been to Scotland?',
        options: ['Have', 'Did', 'Are'],
        answer: 'Have',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'If I miss the train, I ___ take a bus.',
        options: ['will', 'would', 'am'],
        answer: 'will',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'The receptionist ___ me my room was on the second floor.',
        options: ['told', 'said', 'spoke'],
        answer: 'told',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'You ___ show your passport at the border.',
        options: ['have to', 'should to', 'must to'],
        answer: 'have to',
      },
      {
        type: 'listening',
        id: 'e6',
        title: 'Travel problem scene',
        titleRu: 'Сцена: проблема в поездке (90 сек)',
        lines: [
          {
            speaker: 'Narrator',
            text: 'Last month Anna went to Manchester for a wedding.',
          },
          {
            speaker: 'Narrator',
            text: 'Her train was delayed, so she arrived late.',
          },
          {
            speaker: 'Anna',
            text: 'In my opinion, the station was too crowded.',
          },
          {
            speaker: 'Narrator',
            text: 'She told her friend she was nervous about being late.',
          },
          {
            speaker: 'Friend',
            text: 'Do not worry. I will wait for you outside.',
          },
          {
            speaker: 'Narrator',
            text: 'Finally Anna arrived. She was tired but happy.',
          },
          {
            speaker: 'Anna',
            text: 'I have never been to a British wedding before. It was exciting.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'Why was Anna late?',
            options: ['Her train was delayed', 'She lost her passport', 'The wedding was cancelled'],
            answer: 'Her train was delayed',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'How does Anna feel about the wedding experience?',
            options: ['Excited — it was new for her', 'Angry — she hated it', 'Bored — she left early'],
            answer: 'Excited — it was new for her',
          },
        ],
      },
      {
        type: 'cloze',
        id: 'e7',
        text: 'Last year I ___ to Portugal. The flight ___ delayed, but I ___ the trip. ___ my opinion, you ___ visit Lisbon first.',
        gaps: [
          { id: 'g1', answer: 'went', options: ['went', 'have gone', 'go'] },
          { id: 'g2', answer: 'was', options: ['was', 'is', 'were'] },
          { id: 'g3', answer: 'enjoyed', options: ['enjoyed', 'enjoy', 'have enjoyed'] },
          { id: 'g4', answer: 'In', options: ['In', 'On', 'At'] },
          { id: 'g5', answer: 'should', options: ['should', 'must to', 'have'] },
        ],
      },
      {
        type: 'dialogue',
        id: 'e8',
        title: 'Advice for a tourist',
        lines: [
          {
            id: 'd1',
            speaker: 'Tourist',
            text: 'I am visiting your city for three days. What should I do?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: 'First visit the museum. Then walk along the river. You should try the local café near the station.',
                correct: true,
              },
              {
                text: 'Go museum river café must all one hour only.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Tourist',
            text: 'Is public transport easy here?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: 'Yes. You can buy a day ticket. If you get lost, ask at the tourist office.',
                correct: true,
              },
              {
                text: 'Transport easy never lost no help.',
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
            id: 'a2c167',
            term: 'holiday',
            translation: 'отпуск / каникулы (BrE)',
            example: 'We had a lovely holiday in Wales.',
          },
          {
            id: 'a2c168',
            term: 'advice',
            translation: 'совет',
            example: 'Can I give you some advice?',
          },
          {
            id: 'a2c169',
            term: 'tourist',
            translation: 'турист',
            example: 'Many tourists visit in summer.',
          },
          {
            id: 'a2c170',
            term: 'experience',
            translation: 'опыт / переживание',
            example: 'It was a great experience.',
          },
          {
            id: 'a2c171',
            term: 'finally',
            translation: 'наконец',
            example: 'Finally we found the hotel.',
          },
          {
            id: 'a2c172',
            term: 'review',
            translation: 'повторение / обзор',
            example: 'This lesson is a level review.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'A2 Level Challenge',
        promptRu:
          'Level Challenge A: «My last holiday» — 12–15 связных предложений (Past Simple + linking words + opinion). Level Challenge B: 5 советов туристу в вашем городе (should / have to / if).',
        hints: [
          'Last summer / year I…',
          'First… then… because… finally…',
          'In my opinion…',
          'You should… / If you…',
        ],
        minSentences: 12,
      },
    ],
  },
}
