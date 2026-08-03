import type { LessonContent } from '../../types'

export const lessonContents: Record<string, LessonContent> = {
  'l2-u5-l1': {
    lessonId: 'l2-u5-l1',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Relative pronouns: who / which / that',
        points: [
          'who — для людей: This is the woman who helped me.',
          'which — для вещей и животных: The book which I bought is great.',
          'that — для людей и вещей (разговорный): The film that we saw was brilliant.',
          'where — для мест: The city where I was born is small.',
          'Определяющие придаточные — без запятых; дают важную информацию',
        ],
        examples: [
          'I have a friend who lives in Edinburgh.',
          'The restaurant which is near the station is cheap.',
          'The city where I stayed was quiet.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'The man ___ called you is my brother.',
        options: ['who', 'which', 'where'],
        answer: 'who',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'The film ___ we watched was very funny.',
        options: ['that', 'who', 'where'],
        answer: 'that',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'The city ___ I was born is quite small.',
        options: ['where', 'who', 'which'],
        answer: 'where',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'This is the book ___ I told you about.',
        options: ['which', 'who', 'whose'],
        answer: 'which',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Join the sentences',
        tokens: [
          'She',
          'is',
          'the',
          'friend',
          'who',
          'helped',
          'me',
          '.',
        ],
        answer: [
          'She',
          'is',
          'the',
          'friend',
          'who',
          'helped',
          'me',
          '.',
        ],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Describing people and things',
        titleRu: 'Описание людей и мест (TTS + субтитры)',
        lines: [
          {
            speaker: 'Anna',
            text: 'I have a colleague who speaks three languages.',
          },
          {
            speaker: 'Anna',
            text: 'The café which is next to our office is always busy.',
          },
          {
            speaker: 'Tom',
            text: 'The film that we saw last night was brilliant.',
          },
          {
            speaker: 'Tom',
            text: 'It is about a woman who travels around the world.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What does Anna say about her colleague?',
            options: [
              'They speak three languages',
              'They work in a café',
              'They made a film',
            ],
            answer: 'They speak three languages',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'What is the film about?',
            options: [
              'A woman who travels',
              'A café near the office',
              'A man who cooks',
            ],
            answer: 'A woman who travels',
          },
        ],
      },
      {
        type: 'cloze',
        id: 'e8',
        text: 'This is the teacher ___ helped me with English. The book ___ she recommended is very useful. Edinburgh is a city ___ I want to visit.',
        gaps: [
          { id: 'g1', answer: 'who', options: ['who', 'which', 'where'] },
          { id: 'g2', answer: 'that', options: ['that', 'who', 'where'] },
          { id: 'g3', answer: 'which', options: ['which', 'who', 'whose'] },
        ],
      },
      {
        type: 'cards',
        id: 'e9',
        cards: [
          {
            id: 'a2c101',
            term: 'who',
            translation: 'который (о людях)',
            example: 'The man who called is my boss.',
          },
          {
            id: 'a2c102',
            term: 'which',
            translation: 'который (о вещах)',
            example: 'The bag which I bought is leather.',
          },
          {
            id: 'a2c103',
            term: 'that',
            translation: 'который (люди/вещи)',
            example: 'The film that we saw was good.',
          },
          {
            id: 'a2c104',
            term: 'friend',
            translation: 'друг / подруга',
            example: 'I have a friend who lives abroad.',
          },
          {
            id: 'a2c105',
            term: 'colleague',
            translation: 'коллега',
            example: 'My colleague who sits next to me is kind.',
          },
          {
            id: 'a2c106',
            term: 'gift',
            translation: 'подарок',
            example: 'The gift that she gave me was lovely.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Describe with relative clauses',
        promptRu:
          'Напишите 6 предложений с who / which / that: люди, места, вещи из вашей жизни.',
        hints: [
          'I have a friend who…',
          'The city which…',
          'The book that…',
        ],
        minSentences: 6,
      },
    ],
  },

  'l2-u5-l2': {
    lessonId: 'l2-u5-l2',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Passive Present (light)',
        points: [
          'is/are + V3 — когда важнее действие, а не кто делает',
          'English is spoken here. Tea is grown in India.',
          'This dish is called borscht. The shop is located near the station.',
          'Частые глаголы: made, called, spoken, grown, used, known, served',
        ],
        examples: [
          'Cheese is made from milk.',
          'The city is known for its museums.',
          'Breakfast is served from seven to ten.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'English ___ spoken in many countries.',
        options: ['is', 'are', 'was'],
        answer: 'is',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'These shoes ___ made in Italy.',
        options: ['are', 'is', 'was'],
        answer: 'are',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'The town ___ called Bath.',
        options: ['is', 'are', 'am'],
        answer: 'is',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'Coffee ___ grown in Brazil.',
        options: ['is', 'are', 'were'],
        answer: 'is',
      },
      {
        type: 'cloze',
        id: 'e6',
        text: 'Fish and chips ___ served in most pubs. The dish ___ known all over Britain. Potatoes ___ grown on farms.',
        gaps: [
          { id: 'g1', answer: 'are', options: ['are', 'is', 'was'] },
          { id: 'g2', answer: 'is', options: ['is', 'are', 'were'] },
          { id: 'g3', answer: 'are', options: ['are', 'is', 'was'] },
        ],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Culture bites',
        titleRu: 'Факты о странах и языках',
        lines: [
          {
            speaker: 'Guide',
            text: 'English is spoken in many countries around the world.',
          },
          {
            speaker: 'Guide',
            text: 'Tea is grown in India and Sri Lanka.',
          },
          {
            speaker: 'Guide',
            text: 'This building is called the Royal Pavilion.',
          },
          {
            speaker: 'Guide',
            text: 'It is located in the centre of Brighton.',
          },
          {
            speaker: 'Guide',
            text: 'Traditional food is served in the café next door.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'Where is tea grown, according to the guide?',
            options: ['India and Sri Lanka', 'Brighton only', 'Italy'],
            answer: 'India and Sri Lanka',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'What is the building called?',
            options: [
              'The Royal Pavilion',
              'The Royal Palace',
              'The Tea Museum',
            ],
            answer: 'The Royal Pavilion',
          },
        ],
      },
      {
        type: 'builder',
        id: 'e8',
        prompt: 'Passive fact',
        tokens: ['English', 'is', 'spoken', 'here', '.'],
        answer: ['English', 'is', 'spoken', 'here', '.'],
      },
      {
        type: 'cards',
        id: 'e9',
        cards: [
          {
            id: 'a2c107',
            term: 'made',
            translation: 'сделанный / произведённый',
            example: 'This cheese is made locally.',
          },
          {
            id: 'a2c108',
            term: 'called',
            translation: 'называемый',
            example: 'The river is called the Thames.',
          },
          {
            id: 'a2c109',
            term: 'spoken',
            translation: 'на котором говорят (язык)',
            example: 'Russian is spoken at home.',
          },
          {
            id: 'a2c110',
            term: 'located',
            translation: 'расположенный',
            example: 'The hotel is located near the beach.',
          },
          {
            id: 'a2c111',
            term: 'known for',
            translation: 'известный (чем-то)',
            example: 'The city is known for its parks.',
          },
          {
            id: 'a2c112',
            term: 'served',
            translation: 'подаётся / обслуживается',
            example: 'Lunch is served from twelve.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Country or city facts',
        promptRu:
          'Напишите 5 фактов о стране или городе в Passive Present: is made / is called / is spoken / is located / is known for…',
        hints: [
          '… is spoken in…',
          '… is made in…',
          '… is known for…',
          '… is located…',
        ],
        minSentences: 5,
      },
    ],
  },

  'l2-u5-l3': {
    lessonId: 'l2-u5-l3',
    durationMin: 38,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'like / enjoy / hate + V-ing',
        points: [
          'После enjoy, hate, don\'t mind — обычно герундий (-ing)',
          'I enjoy reading. They hate waiting. I don\'t mind getting up early.',
          'like / love: в BrE часто и -ing, и to + V (I like cooking / I like to cook) — оба ок',
          'НЕ: I enjoy to read ✗ → I enjoy reading ✓',
        ],
        examples: [
          'I enjoy travelling in spring.',
          'He hates getting up before seven.',
          "I don't mind watching films with subtitles.",
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'I enjoy ___ in the morning.',
        options: ['swimming', 'swim', 'to swim'],
        answer: 'swimming',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'She hates ___ for the bus.',
        options: ['waiting', 'wait', 'to waiting'],
        answer: 'waiting',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: "They don't mind ___ subtitles.",
        options: ['reading', 'read', 'to read'],
        answer: 'reading',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'Do you like ___ new people?',
        options: ['meeting', 'meet', 'to meeting'],
        answer: 'meeting',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Hobby sentence',
        tokens: ['I', 'enjoy', 'learning', 'English', '.'],
        answer: ['I', 'enjoy', 'learning', 'English', '.'],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'What do you enjoy?',
        titleRu: 'Разговор о хобби и предпочтениях',
        lines: [
          {
            speaker: 'Mia',
            text: 'I enjoy hiking at the weekend. I love being outdoors.',
          },
          {
            speaker: 'Sam',
            text: 'I prefer staying in and watching series.',
          },
          {
            speaker: 'Mia',
            text: "I don't mind watching films, but I hate sitting all day.",
          },
          {
            speaker: 'Sam',
            text: 'Fair enough. I enjoy cooking when I have time.',
          },
          {
            speaker: 'Mia',
            text: 'Me too. I like trying new recipes.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What does Mia enjoy at the weekend?',
            options: ['Hiking', 'Watching series all day', 'Cooking only'],
            answer: 'Hiking',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'What does Sam prefer?',
            options: [
              'Staying in and watching series',
              'Hiking outdoors',
              'Meeting new people',
            ],
            answer: 'Staying in and watching series',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e8',
        title: 'Hobbies chat',
        lines: [
          {
            id: 'd1',
            speaker: 'Sam',
            text: 'What do you enjoy doing in your free time?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: 'I enjoy reading and I like meeting friends for coffee.',
                correct: true,
              },
              {
                text: 'I enjoy read and I like meet friends for coffee.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Sam',
            text: 'Do you mind getting up early at the weekend?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: "I don't mind getting up early if we're going somewhere nice.",
                correct: true,
              },
              {
                text: "I don't mind get up early if we go somewhere nice.",
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
            id: 'a2c113',
            term: 'swimming',
            translation: 'плавание',
            example: 'I enjoy swimming in the sea.',
          },
          {
            id: 'a2c114',
            term: 'reading',
            translation: 'чтение',
            example: 'She likes reading before bed.',
          },
          {
            id: 'a2c115',
            term: 'travelling',
            translation: 'путешествие',
            example: 'They love travelling in Europe.',
          },
          {
            id: 'a2c116',
            term: 'cooking',
            translation: 'готовка',
            example: 'He enjoys cooking Italian food.',
          },
          {
            id: 'a2c117',
            term: 'getting up',
            translation: 'вставать (с постели)',
            example: 'I hate getting up before six.',
          },
          {
            id: 'a2c118',
            term: 'watching series',
            translation: 'смотреть сериалы',
            example: 'I enjoy watching series in English.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Hobbies talk',
        promptRu:
          'Расскажите о своих хобби (6–8 предложений): enjoy / like / hate / don\'t mind + V-ing.',
        hints: [
          'I enjoy…',
          'I like…',
          "I don't mind…",
          'I hate…',
        ],
        minSentences: 6,
      },
    ],
  },

  'l2-u5-l4': {
    lessonId: 'l2-u5-l4',
    durationMin: 40,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Infinitive of purpose',
        points: [
          'to + V — цель / зачем: I came here to learn English.',
          'go to / come to / need to + V: I need to buy a ticket.',
          'Вопрос Why…? → Because I want to… / to + V',
          'so that — более формально (preview): I study hard so that I can pass.',
        ],
        examples: [
          'I am learning English to get a better job.',
          'We went to the shop to buy milk.',
          'She called to ask about the course.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'I went to the library ___ study.',
        options: ['to', 'for', 'so'],
        answer: 'to',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'She called ___ ask a question.',
        options: ['to', 'for', 'so that'],
        answer: 'to',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'We need ___ change our tickets.',
        options: ['to', 'for', 'so'],
        answer: 'to',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'He came to London ___ visit his sister.',
        options: ['to', 'for', 'so that'],
        answer: 'to',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Purpose sentence',
        tokens: [
          'I',
          'am',
          'learning',
          'English',
          'to',
          'travel',
          'more',
          '.',
        ],
        answer: [
          'I',
          'am',
          'learning',
          'English',
          'to',
          'travel',
          'more',
          '.',
        ],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Why are you here?',
        titleRu: 'Зачем вы здесь? (цели и планы)',
        lines: [
          {
            speaker: 'Teacher',
            text: 'Why are you learning English?',
          },
          {
            speaker: 'Student',
            text: 'I am learning English to get a better job.',
          },
          {
            speaker: 'Student',
            text: 'I also want to travel more and meet people from other countries.',
          },
          {
            speaker: 'Teacher',
            text: 'That is a good reason. Do you come to class to practise speaking?',
          },
          {
            speaker: 'Student',
            text: 'Yes. I need to improve my speaking to feel more confident.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'Why is the student learning English?',
            options: [
              'To get a better job',
              'To become a teacher',
              'To live in Brighton',
            ],
            answer: 'To get a better job',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Why does the student need to improve speaking?',
            options: [
              'To feel more confident',
              'To pass a driving test',
              'To cook better',
            ],
            answer: 'To feel more confident',
          },
        ],
      },
      {
        type: 'cloze',
        id: 'e8',
        text: 'I went to the shop ___ buy some bread. I am studying hard ___ pass the exam. She called me ___ ask for help.',
        gaps: [
          { id: 'g1', answer: 'to', options: ['to', 'for', 'so'] },
          { id: 'g2', answer: 'to', options: ['to', 'for', 'so that'] },
          { id: 'g3', answer: 'to', options: ['to', 'for', 'so'] },
        ],
      },
      {
        type: 'dialogue',
        id: 'e9',
        title: 'Travel purposes',
        lines: [
          {
            id: 'd1',
            speaker: 'Sam',
            text: 'Why did you come to this city?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: 'I came here to visit my friend and to practise my English.',
                correct: true,
              },
              {
                text: 'I came here for visit my friend and practise English.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Sam',
            text: 'What do you want to do tomorrow?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: 'I want to go to the museum to learn about local history.',
                correct: true,
              },
              {
                text: 'I want go museum for learn local history.',
                correct: false,
              },
            ],
          },
        ],
      },
      {
        type: 'cards',
        id: 'e10',
        cards: [
          {
            id: 'a2c119',
            term: 'to learn',
            translation: 'чтобы учить / узнать',
            example: 'I came here to learn English.',
          },
          {
            id: 'a2c120',
            term: 'to visit',
            translation: 'чтобы посетить',
            example: 'We went to Scotland to visit friends.',
          },
          {
            id: 'a2c121',
            term: 'to relax',
            translation: 'чтобы отдохнуть',
            example: 'I need a holiday to relax.',
          },
          {
            id: 'a2c122',
            term: 'to practise',
            translation: 'чтобы практиковать',
            example: 'I listen to podcasts to practise listening.',
          },
          {
            id: 'a2c123',
            term: 'purpose',
            translation: 'цель',
            example: 'The purpose of the trip is to relax.',
          },
          {
            id: 'a2c124',
            term: 'reason',
            translation: 'причина',
            example: 'That is a good reason to study.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e11',
        prompt: 'Unit Challenge',
        promptRu:
          'Unit Challenge: 1) 2 предложения с who/which/that; 2) 2 факта в Passive; 3) 2 предложения enjoy/like + V-ing; 4) 3 предложения с to + V (цель). Всего 9+ предложений.',
        hints: [
          '… who/which/that …',
          '… is made/called/spoken…',
          'I enjoy… / I like…',
          'I am learning… to…',
        ],
        minSentences: 9,
      },
    ],
  },
}
