import type { LessonContent } from '../../types'

export const lessonContents: Record<string, LessonContent> = {
  'l2-u6-l1': {
    lessonId: 'l2-u6-l1',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Articles review — a / an / the / zero',
        points: [
          'a/an — один из многих: I need a doctor. an hour (звук гласный)',
          'the — конкретный / уже известный: the station near my house',
          'zero article — общие места как цель: go to school, go to work, go to bed',
          'BrE: go to hospital = лечиться; go to the hospital = здание / визит (AmE чаще the hospital)',
          'Типичная ошибка RU: *I go to the school every day* → I go to school (учусь)',
        ],
        examples: [
          'She goes to work by train.',
          'He was taken to hospital after the accident.',
          'We met at the cinema on Friday.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'I go to ___ every morning. (работа — цель)',
        options: ['work', 'the work', 'a work'],
        answer: 'work',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'She had ___ headache and went to ___ doctor.',
        options: ['a / a', 'the / the', 'a / the'],
        answer: 'a / a',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'In Britain: He went to ___ after he broke his leg.',
        options: ['hospital', 'the hospital', 'a hospital only'],
        answer: 'hospital',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'Meet me at ___ station — the one next to the park.',
        options: ['the', 'a', '— (zero)'],
        answer: 'the',
      },
      {
        type: 'cloze',
        id: 'e6',
        text: 'Yesterday I stayed at home. In the evening I went to ___ cinema with ___ friend. We took ___ same bus back.',
        gaps: [
          { id: 'g1', answer: 'the', options: ['the', 'a', 'an'] },
          { id: 'g2', answer: 'a', options: ['a', 'the', 'an'] },
          { id: 'g3', answer: 'the', options: ['the', 'a', 'an'] },
        ],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Article clinic',
        titleRu: 'Учитель исправляет типичные ошибки с артиклями',
        lines: [
          {
            speaker: 'Teacher',
            text: "Don't say 'I go to the school' if you mean you study there.",
          },
          {
            speaker: 'Teacher',
            text: 'Say: I go to school. School is your purpose.',
          },
          {
            speaker: 'Teacher',
            text: "In British English we often say 'go to hospital' when someone is ill.",
          },
          {
            speaker: 'Teacher',
            text: "We say 'the hospital' when we mean the building: I visited her at the hospital.",
          },
          {
            speaker: 'Teacher',
            text: 'Use the when both people know which place: Meet me at the station.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What should you say if you study at school?',
            options: ['I go to school', 'I go to the school', 'I go to a school always'],
            answer: 'I go to school',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'When do we use the with hospital in BrE?',
            options: [
              'When we mean the building / a visit',
              'Never — British people never use the',
              'Only for American English',
            ],
            answer: 'When we mean the building / a visit',
          },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'a2c125',
            term: 'school',
            translation: 'школа (go to school = учиться)',
            example: 'The children go to school at eight.',
          },
          {
            id: 'a2c126',
            term: 'work',
            translation: 'работа (go to work)',
            example: 'I go to work by bus.',
          },
          {
            id: 'a2c127',
            term: 'hospital',
            translation: 'больница (BrE: go to hospital)',
            example: 'She went to hospital last week.',
          },
          {
            id: 'a2c128',
            term: 'cinema',
            translation: 'кинотеатр',
            example: 'We went to the cinema on Saturday.',
          },
          {
            id: 'a2c129',
            term: 'station',
            translation: 'станция / вокзал',
            example: 'Meet me at the station.',
          },
          {
            id: 'a2c130',
            term: 'the same',
            translation: 'тот же / такой же',
            example: 'We took the same train.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'Yesterday — corrected paragraph',
        promptRu:
          'Напишите 6–8 предложений о вчерашнем дне. Используйте артикли правильно (school/work/home/hospital/station).',
        hints: [
          'I stayed at home…',
          'I went to work / school…',
          'in the evening…',
          'the same…',
        ],
        minSentences: 6,
      },
    ],
  },

  'l2-u6-l2': {
    lessonId: 'l2-u6-l2',
    durationMin: 35,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Linking words — connect your ideas',
        points: [
          'and — добавление; but — контраст; because — причина; so — результат',
          'then / after that — порядок событий; first … finally — начало и конец',
          'however — но / однако (более формально); for example — пример',
          'also / too / as well — «тоже»; suddenly — неожиданно',
        ],
        examples: [
          'I was tired, so I went to bed early.',
          'First we had coffee. Then we walked to the park.',
          'I like films. However, I don\'t watch TV much.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'It was raining, ___ we stayed at home.',
        options: ['so', 'because', 'first'],
        answer: 'so',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'We stayed at home ___ it was raining.',
        options: ['because', 'so', 'finally'],
        answer: 'because',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: '___ we had breakfast. After that we left.',
        options: ['First', 'However', 'Suddenly'],
        answer: 'First',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'I enjoy reading. ___, I don\'t like long books.',
        options: ['However', 'So', 'Then'],
        answer: 'However',
      },
      {
        type: 'builder',
        id: 'e6',
        prompt: 'Link the ideas',
        tokens: ['We', 'were', 'late', ',', 'so', 'we', 'missed', 'the', 'train', '.'],
        answer: ['We', 'were', 'late', ',', 'so', 'we', 'missed', 'the', 'train', '.'],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'A linked weekend story',
        titleRu: 'Послушайте короткий связный рассказ',
        lines: [
          {
            speaker: 'Anna',
            text: 'First I slept late on Saturday because I was tired.',
          },
          {
            speaker: 'Anna',
            text: 'Then I met a friend for coffee.',
          },
          {
            speaker: 'Anna',
            text: 'After that we walked in the park.',
          },
          {
            speaker: 'Anna',
            text: 'Suddenly it started to rain, so we went home.',
          },
          {
            speaker: 'Anna',
            text: 'In the evening I watched a film and went to bed early.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'Why did Anna sleep late?',
            options: ['She was tired', 'She was ill', 'She missed the bus'],
            answer: 'She was tired',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'Why did they go home from the park?',
            options: ['It started to rain', 'The park was closed', 'Her friend was hungry'],
            answer: 'It started to rain',
          },
        ],
      },
      {
        type: 'cloze',
        id: 'e8',
        text: 'I woke up early. ___ I had breakfast. ___ I went to the shops ___ I needed milk. ___ I came home and rested.',
        gaps: [
          { id: 'g1', answer: 'First', options: ['First', 'However', 'Suddenly'] },
          { id: 'g2', answer: 'Then', options: ['Then', 'Because', 'For example'] },
          { id: 'g3', answer: 'because', options: ['because', 'so', 'finally'] },
          { id: 'g4', answer: 'Finally', options: ['Finally', 'Also', 'However'] },
        ],
      },
      {
        type: 'cards',
        id: 'e9',
        cards: [
          {
            id: 'a2c131',
            term: 'because',
            translation: 'потому что',
            example: 'I stayed home because I was ill.',
          },
          {
            id: 'a2c132',
            term: 'so',
            translation: 'поэтому / и тогда',
            example: 'I was tired, so I went to bed.',
          },
          {
            id: 'a2c133',
            term: 'then',
            translation: 'затем / потом',
            example: 'First we ate. Then we left.',
          },
          {
            id: 'a2c134',
            term: 'after that',
            translation: 'после этого',
            example: 'We had coffee. After that we walked.',
          },
          {
            id: 'a2c135',
            term: 'however',
            translation: 'однако',
            example: 'It was cheap. However, it was far.',
          },
          {
            id: 'a2c136',
            term: 'suddenly',
            translation: 'внезапно',
            example: 'Suddenly the phone rang.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e10',
        prompt: 'Connected weekend story',
        promptRu:
          'Напишите связный рассказ о выходных (10–12 предложений). Используйте first/then/after that/because/so/however.',
        hints: [
          'First I…',
          'Then / After that…',
          'because… / so…',
          'Finally…',
        ],
        minSentences: 10,
      },
    ],
  },

  'l2-u6-l3': {
    lessonId: 'l2-u6-l3',
    durationMin: 38,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'At the doctor and pharmacy',
        points: [
          'Symptoms: I have a headache / sore throat / cough / fever / a cold / pain in my stomach',
          'Recent symptoms: I\'ve had a headache since Monday. (Present Perfect + since/for — light)',
          'Advice: You should rest / drink water / see a doctor / take this medicine',
          'Pharmacy: Do I need a prescription? How often should I take it?',
        ],
        examples: [
          "I've had a sore throat for two days.",
          'You should rest and drink warm tea.',
          'Take one tablet every six hours.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'I ___ a headache since this morning.',
        options: ["'ve had", 'had', 'have'],
        answer: "'ve had",
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: 'You ___ see a doctor if the fever is high.',
        options: ['should', 'should to', 'must to'],
        answer: 'should',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'She has a ___ throat.',
        options: ['sore', 'sorely', 'soring'],
        answer: 'sore',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'Do I need a ___ for this medicine?',
        options: ['prescription', 'appointment', 'allergy'],
        answer: 'prescription',
      },
      {
        type: 'dialogue',
        id: 'e6',
        title: 'At the pharmacy',
        lines: [
          {
            id: 'd1',
            speaker: 'Pharmacist',
            text: 'Hello. How can I help you?',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: "I've had a cough for three days. Can you recommend something?",
                correct: true,
              },
              {
                text: 'I cough three days ago always. Give medicine now.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Pharmacist',
            text: 'Do you have a fever or any allergies?',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: 'No fever. No allergies. I just need something for the cough.',
                correct: true,
              },
              {
                text: 'Fever no. Allergy is me never.',
                correct: false,
              },
            ],
          },
          {
            id: 'd5',
            speaker: 'Pharmacist',
            text: 'Take this syrup. You should rest as well.',
          },
        ],
      },
      {
        type: 'listening',
        id: 'e7',
        title: 'Calling the surgery',
        titleRu: 'Звонок в медицинскую практику (BrE)',
        lines: [
          {
            speaker: 'Receptionist',
            text: 'Good morning. Oak Surgery. How can I help?',
          },
          {
            speaker: 'Patient',
            text: "Hello. I've had a bad headache since yesterday.",
          },
          {
            speaker: 'Receptionist',
            text: 'Do you have a fever or any other symptoms?',
          },
          {
            speaker: 'Patient',
            text: 'No fever, but I feel very tired.',
          },
          {
            speaker: 'Receptionist',
            text: 'All right. We have an appointment at four today. Can you come then?',
          },
          {
            speaker: 'Patient',
            text: 'Yes, thank you. Should I bring anything?',
          },
          {
            speaker: 'Receptionist',
            text: 'Just your NHS card if you have one. And rest until then.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'What symptom does the patient describe?',
            options: ['A bad headache', 'A broken leg', 'A stomach allergy'],
            answer: 'A bad headache',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'When is the appointment?',
            options: ['At four today', 'Tomorrow morning', 'Next week'],
            answer: 'At four today',
          },
        ],
      },
      {
        type: 'cards',
        id: 'e8',
        cards: [
          {
            id: 'a2c137',
            term: 'headache',
            translation: 'головная боль',
            example: "I've had a headache all day.",
          },
          {
            id: 'a2c138',
            term: 'sore throat',
            translation: 'боль в горле',
            example: 'She has a sore throat and a cough.',
          },
          {
            id: 'a2c139',
            term: 'fever',
            translation: 'температура / лихорадка',
            example: 'Do you have a fever?',
          },
          {
            id: 'a2c140',
            term: 'pharmacy',
            translation: 'аптека',
            example: 'You can buy this at the pharmacy.',
          },
          {
            id: 'a2c141',
            term: 'prescription',
            translation: 'рецепт (от врача)',
            example: 'Do I need a prescription?',
          },
          {
            id: 'a2c142',
            term: 'rest',
            translation: 'отдых / отдыхать',
            example: 'You should rest for a few days.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'How I feel',
        promptRu:
          'Опишите, как вы себя чувствуете, и попросите помощь (6–8 предложений). Симптомы + should + аптека/врач.',
        hints: [
          "I've had… since / for…",
          'I have a…',
          'You should…',
          'Can I get… at the pharmacy?',
        ],
        minSentences: 6,
      },
    ],
  },

  'l2-u6-l4': {
    lessonId: 'l2-u6-l4',
    durationMin: 40,
    exercises: [
      {
        type: 'explain',
        id: 'e1',
        title: 'Emotions & opinions',
        points: [
          'Feelings: happy, upset, nervous, excited, bored, angry, worried, surprised',
          'Opinion: I think… / In my opinion… / I feel…',
          'Agree: I agree. / Absolutely. / That\'s true.',
          'Disagree politely: I\'m not sure. / I disagree. / Maybe, but…',
        ],
        examples: [
          'I was really nervous before the exam.',
          'In my opinion, the film was too long.',
          'I agree — the ending was surprising.',
        ],
      },
      {
        type: 'drill',
        id: 'e2',
        prompt: 'She was ___ about the exam. (very worried)',
        options: ['nervous', 'bored', 'excited'],
        answer: 'nervous',
      },
      {
        type: 'drill',
        id: 'e3',
        prompt: '___ my opinion, the book is better than the film.',
        options: ['In', 'On', 'At'],
        answer: 'In',
      },
      {
        type: 'drill',
        id: 'e4',
        prompt: 'A: The ending was sad. B: I ___.',
        options: ['agree', 'disagree to', 'think agree'],
        answer: 'agree',
      },
      {
        type: 'drill',
        id: 'e5',
        prompt: 'He was ___ when he heard the news. (very surprised)',
        options: ['surprised', 'bored', 'upset only always'],
        answer: 'surprised',
      },
      {
        type: 'listening',
        id: 'e6',
        title: 'Film club chat',
        titleRu: 'Друзья обсуждают короткий фильм (60 сек)',
        lines: [
          {
            speaker: 'Sam',
            text: 'What did you think of the film?',
          },
          {
            speaker: 'Mia',
            text: 'In my opinion, it was exciting. I was surprised by the ending.',
          },
          {
            speaker: 'Sam',
            text: 'Really? I was a bit bored in the middle.',
          },
          {
            speaker: 'Mia',
            text: 'I understand. Maybe the story was slow.',
          },
          {
            speaker: 'Sam',
            text: 'But I agree — the last scene was brilliant.',
          },
          {
            speaker: 'Mia',
            text: 'Absolutely. I felt happy and a little upset at the same time.',
          },
        ],
        gist: [
          {
            type: 'drill',
            id: 'g1',
            prompt: 'How does Mia feel about the ending?',
            options: ['Surprised and moved', 'Angry and bored', 'She did not watch it'],
            answer: 'Surprised and moved',
          },
          {
            type: 'drill',
            id: 'g2',
            prompt: 'What do Sam and Mia agree about?',
            options: ['The last scene was brilliant', 'The whole film was boring', 'They hated the film'],
            answer: 'The last scene was brilliant',
          },
        ],
      },
      {
        type: 'dialogue',
        id: 'e7',
        title: 'Agree or disagree',
        lines: [
          {
            id: 'd1',
            speaker: 'Sam',
            text: 'I think travelling by train is better than flying.',
          },
          {
            id: 'd2',
            speaker: 'You',
            choices: [
              {
                text: 'I agree. Trains are more comfortable and you see the countryside.',
                correct: true,
              },
              {
                text: 'I agree train is best always fly never good.',
                correct: false,
              },
            ],
          },
          {
            id: 'd3',
            speaker: 'Sam',
            text: 'Some people say trains are too slow.',
          },
          {
            id: 'd4',
            speaker: 'You',
            choices: [
              {
                text: "Maybe, but I'm not worried about time on holiday.",
                correct: true,
              },
              {
                text: 'No. Trains slow is wrong people stupid.',
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
            id: 'a2c143',
            term: 'nervous',
            translation: 'нервничающий / волнующийся',
            example: 'I was nervous before the interview.',
          },
          {
            id: 'a2c144',
            term: 'excited',
            translation: 'взволнованный (в хорошем смысле)',
            example: 'We were excited about the trip.',
          },
          {
            id: 'a2c145',
            term: 'bored',
            translation: 'скучающий',
            example: 'I was bored during the lecture.',
          },
          {
            id: 'a2c146',
            term: 'in my opinion',
            translation: 'по моему мнению',
            example: 'In my opinion, the food was delicious.',
          },
          {
            id: 'a2c147',
            term: 'agree',
            translation: 'соглашаться',
            example: 'I agree with you.',
          },
          {
            id: 'a2c148',
            term: 'disagree',
            translation: 'не соглашаться',
            example: 'I disagree — it was too expensive.',
          },
        ],
      },
      {
        type: 'produce',
        id: 'e9',
        prompt: 'Unit 6 Challenge',
        promptRu:
          'Unit Challenge: 1) короткая связная история с linking words; 2) диалог о здоровье (4–6 реплик); 3) мнение о фильме/книге (I think / agree / disagree). Всего 10+ предложений.',
        hints: [
          'First… then… because…',
          "I've had… / You should…",
          'In my opinion… / I agree…',
        ],
        minSentences: 10,
      },
    ],
  },
}
