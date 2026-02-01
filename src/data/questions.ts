import type { QuizQuestion } from '../types/index.js';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    text: 'When you have completely free time with no obligations, you naturally gravitate toward...',
    answers: [
      {
        id: 'q1a1',
        text: 'Taking charge of a project or organizing something that needs doing',
        weights: [
          { archetypeId: 'commander', weight: 5 },
          { archetypeId: 'visionary', weight: 2 }
        ]
      },
      {
        id: 'q1a2',
        text: 'Learning how successful people do things and applying their methods',
        weights: [
          { archetypeId: 'imitator', weight: 5 },
          { archetypeId: 'everyman', weight: 2 }
        ]
      },
      {
        id: 'q1a3',
        text: 'Researching a topic that fascinates you, even if it\'s impractical',
        weights: [
          { archetypeId: 'explorer', weight: 5 },
          { archetypeId: 'artist', weight: 2 }
        ]
      },
      {
        id: 'q1a4',
        text: 'Something social where you can entertain and make people laugh',
        weights: [
          { archetypeId: 'jester', weight: 5 },
          { archetypeId: 'provocateur', weight: 2 }
        ]
      },
      {
        id: 'q1a5',
        text: 'Creating or building something from scratch',
        weights: [
          { archetypeId: 'artist', weight: 5 },
          { archetypeId: 'visionary', weight: 3 }
        ]
      }
    ]
  },
  {
    id: 'q2',
    text: 'What gets you genuinely excited?',
    answers: [
      {
        id: 'q2a1',
        text: 'A challenging problem that others have failed to solve',
        weights: [
          { archetypeId: 'commander', weight: 4 },
          { archetypeId: 'explorer', weight: 3 }
        ]
      },
      {
        id: 'q2a2',
        text: 'Discovering a proven system or method I can implement',
        weights: [
          { archetypeId: 'imitator', weight: 5 },
          { archetypeId: 'everyman', weight: 2 }
        ]
      },
      {
        id: 'q2a3',
        text: 'A mystery or question no one has fully answered',
        weights: [
          { archetypeId: 'explorer', weight: 5 },
          { archetypeId: 'visionary', weight: 2 }
        ]
      },
      {
        id: 'q2a4',
        text: 'An opportunity to challenge the status quo',
        weights: [
          { archetypeId: 'rebel', weight: 5 },
          { archetypeId: 'provocateur', weight: 3 }
        ]
      },
      {
        id: 'q2a5',
        text: 'A blank canvas or opportunity to create something new',
        weights: [
          { archetypeId: 'artist', weight: 5 },
          { archetypeId: 'visionary', weight: 3 }
        ]
      }
    ]
  },
  {
    id: 'q3',
    text: 'As a child, what captivated your interest most?',
    answers: [
      {
        id: 'q3a1',
        text: 'Being the leader of the group or organizing activities',
        weights: [
          { archetypeId: 'commander', weight: 5 },
          { archetypeId: 'chosen-one', weight: 3 }
        ]
      },
      {
        id: 'q3a2',
        text: 'Taking things apart to understand how they worked',
        weights: [
          { archetypeId: 'explorer', weight: 5 },
          { archetypeId: 'artist', weight: 2 }
        ]
      },
      {
        id: 'q3a3',
        text: 'Making others laugh and being the entertainer',
        weights: [
          { archetypeId: 'jester', weight: 5 },
          { archetypeId: 'provocateur', weight: 2 }
        ]
      },
      {
        id: 'q3a4',
        text: 'Breaking rules and testing boundaries',
        weights: [
          { archetypeId: 'rebel', weight: 5 },
          { archetypeId: 'twenty-seven-club', weight: 2 }
        ]
      },
      {
        id: 'q3a5',
        text: 'Creating art, building things, or making up stories',
        weights: [
          { archetypeId: 'artist', weight: 5 },
          { archetypeId: 'visionary', weight: 3 }
        ]
      }
    ]
  },
  {
    id: 'q4',
    text: 'Who were you at 17?',
    answers: [
      {
        id: 'q4a1',
        text: 'The ambitious one with big plans everyone knew about',
        weights: [
          { archetypeId: 'commander', weight: 4 },
          { archetypeId: 'visionary', weight: 3 }
        ]
      },
      {
        id: 'q4a2',
        text: 'The popular one everyone wanted to be around',
        weights: [
          { archetypeId: 'chosen-one', weight: 5 },
          { archetypeId: 'jester', weight: 3 }
        ]
      },
      {
        id: 'q4a3',
        text: 'The rebel who questioned everything and everyone',
        weights: [
          { archetypeId: 'rebel', weight: 5 },
          { archetypeId: 'provocateur', weight: 3 }
        ]
      },
      {
        id: 'q4a4',
        text: 'The quiet observer trying to fit in',
        weights: [
          { archetypeId: 'everyman', weight: 5 },
          { archetypeId: 'imitator', weight: 2 }
        ]
      },
      {
        id: 'q4a5',
        text: 'The creative one always working on projects',
        weights: [
          { archetypeId: 'artist', weight: 5 },
          { archetypeId: 'explorer', weight: 2 }
        ]
      }
    ]
  },
  {
    id: 'q5',
    text: 'What are you naturally good at without much effort?',
    answers: [
      {
        id: 'q5a1',
        text: 'Getting people organized and moving toward a goal',
        weights: [
          { archetypeId: 'commander', weight: 5 },
          { archetypeId: 'visionary', weight: 2 }
        ]
      },
      {
        id: 'q5a2',
        text: 'Picking up new skills by watching others',
        weights: [
          { archetypeId: 'imitator', weight: 5 },
          { archetypeId: 'explorer', weight: 2 }
        ]
      },
      {
        id: 'q5a3',
        text: 'Finding information and connecting dots',
        weights: [
          { archetypeId: 'explorer', weight: 5 },
          { archetypeId: 'artist', weight: 2 }
        ]
      },
      {
        id: 'q5a4',
        text: 'Reading people and social situations',
        weights: [
          { archetypeId: 'jester', weight: 4 },
          { archetypeId: 'deviant', weight: 3 },
          { archetypeId: 'provocateur', weight: 2 }
        ]
      },
      {
        id: 'q5a5',
        text: 'Creating things that others find impressive',
        weights: [
          { archetypeId: 'artist', weight: 5 },
          { archetypeId: 'visionary', weight: 2 }
        ]
      }
    ]
  },
  {
    id: 'q6',
    text: 'What pattern do you notice yourself repeating even when it causes problems?',
    answers: [
      {
        id: 'q6a1',
        text: 'Taking on too much responsibility and burning out',
        weights: [
          { archetypeId: 'commander', weight: 4 },
          { archetypeId: 'chosen-one', weight: 3 },
          { archetypeId: 'mother', weight: 3 }
        ]
      },
      {
        id: 'q6a2',
        text: 'Going along with the crowd even when I disagree',
        weights: [
          { archetypeId: 'everyman', weight: 5 },
          { archetypeId: 'imitator', weight: 3 }
        ]
      },
      {
        id: 'q6a3',
        text: 'Getting lost in rabbit holes and neglecting responsibilities',
        weights: [
          { archetypeId: 'explorer', weight: 5 },
          { archetypeId: 'artist', weight: 2 }
        ]
      },
      {
        id: 'q6a4',
        text: 'Starting conflicts or saying provocative things',
        weights: [
          { archetypeId: 'provocateur', weight: 5 },
          { archetypeId: 'rebel', weight: 3 },
          { archetypeId: 'deviant', weight: 2 }
        ]
      },
      {
        id: 'q6a5',
        text: 'Putting others\' needs before my own to my detriment',
        weights: [
          { archetypeId: 'mother', weight: 5 },
          { archetypeId: 'munchausen-hero', weight: 3 }
        ]
      }
    ]
  },
  {
    id: 'q7',
    text: 'When you enter a "flow state," what\'s usually pushing you through?',
    answers: [
      {
        id: 'q7a1',
        text: 'The drive to achieve a result and cross the finish line',
        weights: [
          { archetypeId: 'commander', weight: 5 },
          { archetypeId: 'imitator', weight: 2 }
        ]
      },
      {
        id: 'q7a2',
        text: 'Pure curiosity - I need to know the answer',
        weights: [
          { archetypeId: 'explorer', weight: 5 },
          { archetypeId: 'visionary', weight: 2 }
        ]
      },
      {
        id: 'q7a3',
        text: 'The creative process itself - bringing something into existence',
        weights: [
          { archetypeId: 'artist', weight: 5 },
          { archetypeId: 'visionary', weight: 3 }
        ]
      },
      {
        id: 'q7a4',
        text: 'The energy from others reacting to what I\'m doing',
        weights: [
          { archetypeId: 'jester', weight: 4 },
          { archetypeId: 'provocateur', weight: 4 },
          { archetypeId: 'chosen-one', weight: 2 }
        ]
      },
      {
        id: 'q7a5',
        text: 'Helping someone through a difficult situation',
        weights: [
          { archetypeId: 'mother', weight: 5 },
          { archetypeId: 'munchausen-hero', weight: 3 }
        ]
      }
    ]
  },
  {
    id: 'q8',
    text: 'What do you consistently struggle with despite genuine effort?',
    answers: [
      {
        id: 'q8a1',
        text: 'Delegating and trusting others to handle things',
        weights: [
          { archetypeId: 'commander', weight: 5 },
          { archetypeId: 'artist', weight: 2 }
        ]
      },
      {
        id: 'q8a2',
        text: 'Coming up with original ideas or approaches',
        weights: [
          { archetypeId: 'imitator', weight: 5 },
          { archetypeId: 'everyman', weight: 3 }
        ]
      },
      {
        id: 'q8a3',
        text: 'Sticking with something once the novelty wears off',
        weights: [
          { archetypeId: 'explorer', weight: 5 },
          { archetypeId: 'twenty-seven-club', weight: 2 }
        ]
      },
      {
        id: 'q8a4',
        text: 'Working within established systems and hierarchies',
        weights: [
          { archetypeId: 'rebel', weight: 5 },
          { archetypeId: 'provocateur', weight: 3 }
        ]
      },
      {
        id: 'q8a5',
        text: 'Putting my own needs first',
        weights: [
          { archetypeId: 'mother', weight: 5 },
          { archetypeId: 'everyman', weight: 2 }
        ]
      }
    ]
  },
  {
    id: 'q9',
    text: 'How would you describe your focus pattern?',
    answers: [
      {
        id: 'q9a1',
        text: 'Laser-focused until the job is done',
        weights: [
          { archetypeId: 'commander', weight: 4 },
          { archetypeId: 'artist', weight: 4 }
        ]
      },
      {
        id: 'q9a2',
        text: 'Intense bursts followed by periods of wandering interest',
        weights: [
          { archetypeId: 'explorer', weight: 5 },
          { archetypeId: 'twenty-seven-club', weight: 3 }
        ]
      },
      {
        id: 'q9a3',
        text: 'I follow whatever model or system I\'m currently learning',
        weights: [
          { archetypeId: 'imitator', weight: 5 },
          { archetypeId: 'everyman', weight: 2 }
        ]
      },
      {
        id: 'q9a4',
        text: 'I get deeply absorbed but only in creative work',
        weights: [
          { archetypeId: 'artist', weight: 5 },
          { archetypeId: 'visionary', weight: 2 }
        ]
      },
      {
        id: 'q9a5',
        text: 'I\'m most focused when there\'s drama or crisis to navigate',
        weights: [
          { archetypeId: 'munchausen-hero', weight: 5 },
          { archetypeId: 'provocateur', weight: 2 }
        ]
      }
    ]
  },
  {
    id: 'q10',
    text: 'In a group setting, you tend to...',
    answers: [
      {
        id: 'q10a1',
        text: 'Naturally take charge and direct the conversation',
        weights: [
          { archetypeId: 'commander', weight: 5 },
          { archetypeId: 'visionary', weight: 2 }
        ]
      },
      {
        id: 'q10a2',
        text: 'Observe what others are doing and blend in',
        weights: [
          { archetypeId: 'everyman', weight: 5 },
          { archetypeId: 'imitator', weight: 3 }
        ]
      },
      {
        id: 'q10a3',
        text: 'Entertain everyone and keep the energy high',
        weights: [
          { archetypeId: 'jester', weight: 5 },
          { archetypeId: 'chosen-one', weight: 2 }
        ]
      },
      {
        id: 'q10a4',
        text: 'Challenge ideas and play devil\'s advocate',
        weights: [
          { archetypeId: 'rebel', weight: 4 },
          { archetypeId: 'provocateur', weight: 4 }
        ]
      },
      {
        id: 'q10a5',
        text: 'Focus on making sure everyone is comfortable and included',
        weights: [
          { archetypeId: 'mother', weight: 5 },
          { archetypeId: 'munchausen-hero', weight: 2 }
        ]
      }
    ]
  },
  {
    id: 'q11',
    text: 'When facing a major decision, you rely most on...',
    answers: [
      {
        id: 'q11a1',
        text: 'My own judgment - I trust my ability to figure it out',
        weights: [
          { archetypeId: 'commander', weight: 4 },
          { archetypeId: 'rebel', weight: 3 },
          { archetypeId: 'visionary', weight: 3 }
        ]
      },
      {
        id: 'q11a2',
        text: 'What successful people have done in similar situations',
        weights: [
          { archetypeId: 'imitator', weight: 5 },
          { archetypeId: 'everyman', weight: 2 }
        ]
      },
      {
        id: 'q11a3',
        text: 'Research - I need to understand all the angles first',
        weights: [
          { archetypeId: 'explorer', weight: 5 },
          { archetypeId: 'artist', weight: 2 }
        ]
      },
      {
        id: 'q11a4',
        text: 'What feels most authentic to who I am',
        weights: [
          { archetypeId: 'artist', weight: 4 },
          { archetypeId: 'rebel', weight: 3 },
          { archetypeId: 'visionary', weight: 2 }
        ]
      },
      {
        id: 'q11a5',
        text: 'How it will affect others - their needs come first',
        weights: [
          { archetypeId: 'mother', weight: 5 },
          { archetypeId: 'everyman', weight: 2 }
        ]
      }
    ]
  },
  {
    id: 'q12',
    text: 'What\'s your relationship with attention?',
    answers: [
      {
        id: 'q12a1',
        text: 'I\'m comfortable with it when I\'ve earned it through results',
        weights: [
          { archetypeId: 'commander', weight: 5 },
          { archetypeId: 'artist', weight: 2 }
        ]
      },
      {
        id: 'q12a2',
        text: 'I prefer to stay under the radar',
        weights: [
          { archetypeId: 'everyman', weight: 5 },
          { archetypeId: 'imitator', weight: 3 }
        ]
      },
      {
        id: 'q12a3',
        text: 'I thrive on it - the more attention, the better',
        weights: [
          { archetypeId: 'provocateur', weight: 5 },
          { archetypeId: 'jester', weight: 4 },
          { archetypeId: 'chosen-one', weight: 3 }
        ]
      },
      {
        id: 'q12a4',
        text: 'I want attention for my work, not for myself',
        weights: [
          { archetypeId: 'artist', weight: 5 },
          { archetypeId: 'visionary', weight: 3 }
        ]
      },
      {
        id: 'q12a5',
        text: 'I\'d rather give attention to others than receive it',
        weights: [
          { archetypeId: 'mother', weight: 5 },
          { archetypeId: 'munchausen-hero', weight: 2 }
        ]
      }
    ]
  },
  {
    id: 'q13',
    text: 'How do you respond to rules and authority?',
    answers: [
      {
        id: 'q13a1',
        text: 'I respect authority when it\'s competent, and aim to become the authority myself',
        weights: [
          { archetypeId: 'commander', weight: 5 },
          { archetypeId: 'visionary', weight: 2 }
        ]
      },
      {
        id: 'q13a2',
        text: 'I follow rules - they exist for good reasons',
        weights: [
          { archetypeId: 'everyman', weight: 5 },
          { archetypeId: 'imitator', weight: 3 }
        ]
      },
      {
        id: 'q13a3',
        text: 'I instinctively push against them, even when I shouldn\'t',
        weights: [
          { archetypeId: 'rebel', weight: 5 },
          { archetypeId: 'provocateur', weight: 3 }
        ]
      },
      {
        id: 'q13a4',
        text: 'I ignore rules that get in the way of what I\'m creating',
        weights: [
          { archetypeId: 'artist', weight: 4 },
          { archetypeId: 'visionary', weight: 4 }
        ]
      },
      {
        id: 'q13a5',
        text: 'I break rules strategically when it serves my purposes',
        weights: [
          { archetypeId: 'deviant', weight: 5 },
          { archetypeId: 'provocateur', weight: 2 }
        ]
      }
    ]
  },
  {
    id: 'q14',
    text: 'What kind of future do you envision for yourself?',
    answers: [
      {
        id: 'q14a1',
        text: 'Leading something significant - a company, movement, or team',
        weights: [
          { archetypeId: 'commander', weight: 5 },
          { archetypeId: 'visionary', weight: 3 }
        ]
      },
      {
        id: 'q14a2',
        text: 'Stable and comfortable - I don\'t need to change the world',
        weights: [
          { archetypeId: 'everyman', weight: 5 },
          { archetypeId: 'imitator', weight: 2 }
        ]
      },
      {
        id: 'q14a3',
        text: 'Constantly learning and exploring new things',
        weights: [
          { archetypeId: 'explorer', weight: 5 },
          { archetypeId: 'artist', weight: 2 }
        ]
      },
      {
        id: 'q14a4',
        text: 'Creating something lasting that expresses my vision',
        weights: [
          { archetypeId: 'artist', weight: 4 },
          { archetypeId: 'visionary', weight: 5 }
        ]
      },
      {
        id: 'q14a5',
        text: 'I live more in the present - the future will sort itself out',
        weights: [
          { archetypeId: 'jester', weight: 3 },
          { archetypeId: 'twenty-seven-club', weight: 4 },
          { archetypeId: 'chosen-one', weight: 2 }
        ]
      }
    ]
  },
  {
    id: 'q15',
    text: 'What\'s your relationship with other people\'s success?',
    answers: [
      {
        id: 'q15a1',
        text: 'Motivating - it shows me what\'s possible',
        weights: [
          { archetypeId: 'commander', weight: 4 },
          { archetypeId: 'imitator', weight: 4 }
        ]
      },
      {
        id: 'q15a2',
        text: 'Instructive - I study how they did it so I can too',
        weights: [
          { archetypeId: 'imitator', weight: 5 },
          { archetypeId: 'explorer', weight: 2 }
        ]
      },
      {
        id: 'q15a3',
        text: 'Irrelevant - I\'m on my own path',
        weights: [
          { archetypeId: 'artist', weight: 4 },
          { archetypeId: 'rebel', weight: 3 },
          { archetypeId: 'visionary', weight: 3 }
        ]
      },
      {
        id: 'q15a4',
        text: 'Sometimes threatening - especially when it overshadows me',
        weights: [
          { archetypeId: 'jester', weight: 4 },
          { archetypeId: 'chosen-one', weight: 3 },
          { archetypeId: 'provocateur', weight: 2 }
        ]
      },
      {
        id: 'q15a5',
        text: 'I genuinely celebrate it - I love seeing others thrive',
        weights: [
          { archetypeId: 'mother', weight: 5 },
          { archetypeId: 'everyman', weight: 2 }
        ]
      }
    ]
  },
  {
    id: 'q16',
    text: 'When things get chaotic or difficult, you...',
    answers: [
      {
        id: 'q16a1',
        text: 'Step up and take control to fix the situation',
        weights: [
          { archetypeId: 'commander', weight: 5 },
          { archetypeId: 'munchausen-hero', weight: 3 }
        ]
      },
      {
        id: 'q16a2',
        text: 'Look for guidance on how others have handled similar situations',
        weights: [
          { archetypeId: 'imitator', weight: 5 },
          { archetypeId: 'everyman', weight: 2 }
        ]
      },
      {
        id: 'q16a3',
        text: 'Analyze the situation to understand what\'s really going on',
        weights: [
          { archetypeId: 'explorer', weight: 5 },
          { archetypeId: 'visionary', weight: 2 }
        ]
      },
      {
        id: 'q16a4',
        text: 'Feel energized - this is when I come alive',
        weights: [
          { archetypeId: 'munchausen-hero', weight: 5 },
          { archetypeId: 'twenty-seven-club', weight: 3 }
        ]
      },
      {
        id: 'q16a5',
        text: 'Focus on supporting others through it',
        weights: [
          { archetypeId: 'mother', weight: 5 },
          { archetypeId: 'everyman', weight: 2 }
        ]
      }
    ]
  },
  {
    id: 'q17',
    text: 'Which criticism would sting the most?',
    answers: [
      {
        id: 'q17a1',
        text: '"You\'re ineffective and can\'t get things done"',
        weights: [
          { archetypeId: 'commander', weight: 5 },
          { archetypeId: 'imitator', weight: 2 }
        ]
      },
      {
        id: 'q17a2',
        text: '"You\'re boring and have nothing original to offer"',
        weights: [
          { archetypeId: 'artist', weight: 4 },
          { archetypeId: 'jester', weight: 4 },
          { archetypeId: 'provocateur', weight: 3 }
        ]
      },
      {
        id: 'q17a3',
        text: '"You\'re a conformist with no real identity"',
        weights: [
          { archetypeId: 'rebel', weight: 5 },
          { archetypeId: 'artist', weight: 3 }
        ]
      },
      {
        id: 'q17a4',
        text: '"You\'re shallow and not as smart as you think"',
        weights: [
          { archetypeId: 'explorer', weight: 5 },
          { archetypeId: 'visionary', weight: 3 }
        ]
      },
      {
        id: 'q17a5',
        text: '"You\'re selfish and don\'t really care about others"',
        weights: [
          { archetypeId: 'mother', weight: 5 },
          { archetypeId: 'munchausen-hero', weight: 3 }
        ]
      }
    ]
  },
  {
    id: 'q18',
    text: 'Looking at your life honestly, which pattern resonates most?',
    answers: [
      {
        id: 'q18a1',
        text: 'I achieve things but struggle to slow down or enjoy them',
        weights: [
          { archetypeId: 'commander', weight: 5 },
          { archetypeId: 'twenty-seven-club', weight: 2 }
        ]
      },
      {
        id: 'q18a2',
        text: 'I\'ve been successful by following others\' blueprints',
        weights: [
          { archetypeId: 'imitator', weight: 5 },
          { archetypeId: 'everyman', weight: 2 }
        ]
      },
      {
        id: 'q18a3',
        text: 'I have a trail of unfinished projects and abandoned interests',
        weights: [
          { archetypeId: 'explorer', weight: 5 },
          { archetypeId: 'chosen-one', weight: 2 }
        ]
      },
      {
        id: 'q18a4',
        text: 'I\'ve burned bridges by being too confrontational or provocative',
        weights: [
          { archetypeId: 'rebel', weight: 4 },
          { archetypeId: 'provocateur', weight: 4 },
          { archetypeId: 'deviant', weight: 3 }
        ]
      },
      {
        id: 'q18a5',
        text: 'I\'ve given so much to others that I\'ve lost parts of myself',
        weights: [
          { archetypeId: 'mother', weight: 5 },
          { archetypeId: 'munchausen-hero', weight: 3 }
        ]
      }
    ]
  }
];
