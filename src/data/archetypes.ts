import type { Archetype } from '../types/index.js';

export const archetypes: Archetype[] = [
  {
    id: 'commander',
    name: 'The Commander',
    tagline: 'Born to Lead, Built to Execute',
    category: 'common',
    description: 'The Commander is a natural leader who thrives on execution and achievement. Highly ambitious and driven, Commanders have an innate ability to organize people and resources toward a goal. They see opportunities where others see obstacles and have the force of will to push through barriers. Most successful business leaders fall into this archetype.',
    traits: ['Decisive', 'Ambitious', 'Organized', 'Results-oriented', 'Authoritative'],
    strengths: [
      'Natural ability to lead and inspire others',
      'Exceptional at execution and getting things done',
      'Strong strategic thinking and planning',
      'Comfortable with responsibility and pressure',
      'Able to make tough decisions quickly'
    ],
    challenges: [
      'May struggle to delegate or trust others with important tasks',
      'Can burn out from taking on too much responsibility',
      'May come across as domineering or controlling',
      'Difficulty with tasks that require patience over action',
      'May neglect relationships in pursuit of goals'
    ],
    advice: 'Your greatest leverage comes from building and leading teams. Rather than trying to do everything yourself, focus on finding talented people and directing their efforts. Your skills are multiplied through others.',
    color: '#f59e0b'
  },
  {
    id: 'imitator',
    name: 'The Imitator',
    tagline: 'Master of Adaptation',
    category: 'common',
    description: 'The Imitator excels at observing what works and replicating it with precision. While they may not generate original ideas, their ability to adopt and execute proven methods makes them highly versatile. Imitators can have multiple successful careers because they quickly learn from others\' successes.',
    traits: ['Adaptable', 'Observant', 'Reliable', 'Methodical', 'Versatile'],
    strengths: [
      'Rapid skill acquisition through modeling others',
      'Excellent at following established systems',
      'Low risk of failure when copying proven methods',
      'Highly versatile across different domains',
      'Strong execution of known playbooks'
    ],
    challenges: [
      'May struggle when no template or model exists',
      'Can lack confidence in original thinking',
      'May be seen as unoriginal or derivative',
      'Difficulty innovating or pivoting in uncharted territory',
      'Identity can feel unclear without models to follow'
    ],
    advice: 'Embrace your gift for learning from others—it\'s a superpower, not a weakness. The key is to choose your models wisely. Study the best in any field you enter, and you\'ll reach competence faster than most.',
    color: '#6366f1'
  },
  {
    id: 'explorer',
    name: 'The Explorer',
    tagline: 'Driven by Endless Curiosity',
    category: 'common',
    description: 'The Explorer is propelled by an insatiable curiosity that makes them unstoppable when the task is to find something out. Whether in the literal or abstract sense, Explorers are natural researchers, investigators, and learners. Their curiosity is their motor.',
    traits: ['Curious', 'Inquisitive', 'Independent', 'Restless', 'Knowledge-seeking'],
    strengths: [
      'Unstoppable when pursuing answers to questions',
      'Can work intensely for extended periods when curious',
      'Rapidly gains proficiency in new areas',
      'Excellent at research and investigation',
      'Natural ability to connect disparate information'
    ],
    challenges: [
      'Struggles to stick with something once curiosity is spent',
      'May abandon projects when the novelty wears off',
      'Can get lost in rabbit holes and neglect practical matters',
      'Difficulty with routine or repetitive tasks',
      'May have many unfinished projects'
    ],
    advice: 'Work with your curiosity, not against it. Build intensely while you\'re curious about something, then move on when it\'s spent—but set up systems so your work isn\'t lost. Your curiosity comes in waves; ride them.',
    color: '#22c55e'
  },
  {
    id: 'rebel',
    name: 'The Rebel',
    tagline: 'Against the Current',
    category: 'common',
    description: 'The Rebel is driven to push against society\'s order and systems. This contrarian nature manifests early in life and remains a constant force. Rebels question everything and resist conformity instinctively, often serving as important agents of change.',
    traits: ['Contrarian', 'Independent', 'Questioning', 'Defiant', 'Authentic'],
    strengths: [
      'Willing to challenge broken systems',
      'Strong sense of personal authenticity',
      'Not swayed by social pressure or groupthink',
      'Can see flaws others overlook or accept',
      'Courage to stand alone when necessary'
    ],
    challenges: [
      'May rebel reflexively even when the system works',
      'Can struggle with authority regardless of merit',
      'May isolate themselves unnecessarily',
      'Difficulty working within teams or organizations',
      'Energy spent fighting battles that don\'t matter'
    ],
    advice: 'Your rebellious instinct is valuable when directed wisely. Choose your battles carefully—rebel against things that truly need changing, and learn to work within systems when it serves your larger goals.',
    color: '#ef4444'
  },
  {
    id: 'jester',
    name: 'The Jester',
    tagline: 'Life of the Party',
    category: 'common',
    description: 'The Jester constantly seeks to entertain and gain validation through humor and presence. They need to be the funniest or loudest in the room. This archetype is easily spotted and thrives on social interaction and attention.',
    traits: ['Humorous', 'Social', 'Attention-seeking', 'Quick-witted', 'Entertaining'],
    strengths: [
      'Natural ability to lighten moods and connect people',
      'Excellent social intelligence and rapport-building',
      'Can defuse tension and navigate awkward situations',
      'Memorable and likeable presence',
      'Strong improvisational skills'
    ],
    challenges: [
      'May struggle with serious situations requiring gravity',
      'Can become defensive or hostile when upstaged',
      'Validation-seeking can become exhausting',
      'May use humor to avoid deeper emotions',
      'Identity tied too closely to others\' reactions'
    ],
    advice: 'Your gift for connection and humor is genuine value. But ensure you\'re not using entertainment as a mask. The deepest connections come from showing your whole self, not just your performance.',
    color: '#eab308'
  },
  {
    id: 'provocateur',
    name: 'The Provocateur',
    tagline: 'Stirring the Waters',
    category: 'common',
    description: 'Similar to the Rebel but focused on provoking reactions from others. The Provocateur feeds off attention and is naturally suited to high-profile roles. They push boundaries specifically to get a response.',
    traits: ['Bold', 'Attention-seeking', 'Provocative', 'Charismatic', 'Boundary-pushing'],
    strengths: [
      'Comfortable in the spotlight and with controversy',
      'Excellent at generating attention and engagement',
      'Fearless in expressing unpopular views',
      'Natural media and public presence',
      'Can start important conversations others avoid'
    ],
    challenges: [
      'May provoke without productive purpose',
      'Can alienate people unnecessarily',
      'Attention-seeking can overshadow substance',
      'May struggle when attention isn\'t on them',
      'Can be seen as shallow or antagonistic'
    ],
    advice: 'Your ability to provoke and capture attention is powerful. Channel it toward meaningful ends—use provocation to highlight important issues, not just to get a reaction.',
    color: '#f97316'
  },
  {
    id: 'artist',
    name: 'The Artist',
    tagline: 'The Creator of Worlds',
    category: 'common',
    description: 'The Artist is the transformer who thrives on bringing things into existence. While we often think of painters or authors, many Artists are engineers or builders. When they get going, they become unstoppably focused on creation.',
    traits: ['Creative', 'Focused', 'Expressive', 'Perfectionist', 'Vision-driven'],
    strengths: [
      'Exceptional ability to create from nothing',
      'Deep focus when engaged in creation',
      'Strong aesthetic and quality sensibilities',
      'Can envision and manifest ideas',
      'Work often has lasting impact'
    ],
    challenges: [
      'May struggle with non-creative business aspects',
      'Perfectionism can delay completion',
      'Can be difficult to work with during creative process',
      'May undervalue practical considerations',
      'Income and recognition can be inconsistent'
    ],
    advice: 'Your drive to create is your core gift. Build systems that support your creative work—handle the business side so it doesn\'t drain your creative energy. Protect your creative time fiercely.',
    color: '#ec4899'
  },
  {
    id: 'everyman',
    name: 'The Everyman',
    tagline: 'The Quiet Majority',
    category: 'common',
    description: 'The Everyman is the closest to the idea of the NPC—wanting to conform at all costs and repressing any individuality. They are inoffensive and meek. This is the most common of all archetypes.',
    traits: ['Conforming', 'Agreeable', 'Risk-averse', 'Stable', 'Unassuming'],
    strengths: [
      'Excellent at maintaining social harmony',
      'Reliable and predictable presence',
      'Low-drama and easy to work with',
      'Strong ability to fit into any environment',
      'Comfortable with routine and stability'
    ],
    challenges: [
      'May suppress authentic desires and opinions',
      'Can be taken advantage of due to agreeableness',
      'May feel unfulfilled or that life is passing by',
      'Difficulty asserting needs or boundaries',
      'Identity may feel unclear or undefined'
    ],
    advice: 'There\'s nothing wrong with wanting stability and belonging. But ensure you\'re not suppressing your true self. Finding small ways to express your authentic interests can bring unexpected fulfillment.',
    color: '#71717a'
  },
  {
    id: 'visionary',
    name: 'The Visionary',
    tagline: 'Architect of Tomorrow',
    category: 'less-common',
    description: 'The rarest archetype of all. Visionaries truly envision alternative futures radically different from today\'s reality. They see possibilities that others cannot imagine and have the conviction to pursue them.',
    traits: ['Far-sighted', 'Idealistic', 'Unconventional', 'Inspiring', 'Future-oriented'],
    strengths: [
      'Can conceive genuinely new possibilities',
      'Inspires others with compelling visions',
      'Not limited by current constraints in thinking',
      'Ability to see long-term implications',
      'Creates entirely new categories and markets'
    ],
    challenges: [
      'May struggle with present-day execution',
      'Visions can be too far ahead for others to grasp',
      'Can be seen as impractical or unrealistic',
      'May have difficulty with incremental progress',
      'Often misunderstood or dismissed early on'
    ],
    advice: 'Your vision is your gift, but you need others to help make it real. Find Commanders and Artists who can execute while you continue to see ahead. Don\'t compromise your vision, but learn to communicate it in terms others can grasp.',
    color: '#8b5cf6'
  },
  {
    id: 'chosen-one',
    name: 'The Chosen One',
    tagline: 'Bright Flame, Brief Season',
    category: 'less-common',
    description: 'The Chosen One burns incredibly bright when young, possessing extraordinary charisma and energy that captivates everyone around them. But this intensity typically spans about twenty years before fading. The star of high school who now works an ordinary job.',
    traits: ['Charismatic', 'Early-blooming', 'Magnetic', 'Intense', 'Declining'],
    strengths: [
      'Extraordinary early charisma and presence',
      'Natural ability to attract followers and attention',
      'High energy and enthusiasm when young',
      'Often achieves early success and recognition',
      'Memorable impact on those who knew them'
    ],
    challenges: [
      'Peak comes early and is followed by decline',
      'May struggle to adapt as charisma fades',
      'Identity crisis as the "chosen" feeling diminishes',
      'Difficulty finding meaning in ordinary life',
      'May chase the high of early glory'
    ],
    advice: 'If you recognize this pattern, the key is building substance during your peak years. Use your early charisma to develop real skills and relationships that persist when the natural glow fades.',
    color: '#fbbf24'
  },
  {
    id: 'twenty-seven-club',
    name: 'The 27 Club',
    tagline: 'Burn Bright, Burn Out',
    category: 'less-common',
    description: 'Named after musicians who died at 27, this archetype burns increasingly bright, courts attention through escalating acts of outrageousness and often art. The ending is often catastrophic. More common than you\'d think, and most don\'t become famous.',
    traits: ['Intense', 'Self-destructive', 'Artistic', 'Boundary-pushing', 'Tragic'],
    strengths: [
      'Extraordinary creative intensity',
      'Willingness to push boundaries others won\'t',
      'Often produces impactful, memorable work',
      'Authentic to the point of self-destruction',
      'Lives fully in the moment'
    ],
    challenges: [
      'Self-destructive trajectory',
      'Escalating need for intensity and attention',
      'May not survive their own intensity',
      'Relationships suffer from chaos',
      'Difficult to sustain or build upon success'
    ],
    advice: 'Recognizing this pattern is crucial. Your intensity is real and valuable, but it needs outlets that don\'t destroy you. Finding sustainable ways to channel your fire is literally a matter of survival.',
    color: '#dc2626'
  },
  {
    id: 'munchausen-hero',
    name: 'Munchausen\'s Hero',
    tagline: 'Savior Complex',
    category: 'less-common',
    description: 'Always seeking a disaster in which they can act the hero. Named after Munchausen\'s by proxy, which is the most malignant expression. You\'ll find these individuals bouncing from one disaster to another, keeping extraordinarily toxic people in their lives who manufacture chaos. Avoid at all costs.',
    traits: ['Rescuer', 'Drama-seeking', 'Self-sacrificing', 'Chaos-adjacent', 'Identity-through-heroism'],
    strengths: [
      'Genuine desire to help others',
      'Willing to step into difficult situations',
      'Strong in crisis management',
      'Can be calming presence in chaos',
      'Often develops real helping skills'
    ],
    challenges: [
      'Unconsciously creates or attracts disasters',
      'Keeps toxic people around as chaos sources',
      'Identity depends on being needed',
      'May sabotage stability to create rescue opportunities',
      'Exhausting cycle of crisis and heroism'
    ],
    advice: 'The drive to help is admirable, but examine whether you\'re unconsciously creating the problems you solve. True helping means empowering others\' independence, not maintaining their dependence on you.',
    color: '#0ea5e9'
  },
  {
    id: 'deviant',
    name: 'The Deviant',
    tagline: 'Charming Destruction',
    category: 'less-common',
    description: 'This archetype would fit nicely into the DSM. Manipulative and destructive. You\'ll hear whispers of their toxicity but ignore them, infatuated with their charm until they\'ve stung you too.',
    traits: ['Manipulative', 'Charming', 'Destructive', 'Deceptive', 'Predatory'],
    strengths: [
      'Exceptional charm and social intelligence',
      'Highly persuasive and influential',
      'Excellent at reading and manipulating others',
      'Often successful in competitive environments',
      'Fearless in pursuing what they want'
    ],
    challenges: [
      'Leaves destruction in their wake',
      'Cannot maintain genuine relationships',
      'Eventually exposed and loses trust',
      'Pattern of burned bridges and enemies',
      'Internal emptiness despite external success'
    ],
    advice: 'If you recognize these tendencies in yourself, professional help is essential. The charm works until it doesn\'t, and the destruction you cause extends to your own life. Change is possible but requires serious work.',
    color: '#1f2937'
  },
  {
    id: 'mother',
    name: 'The Mother',
    tagline: 'Caretaker of All',
    category: 'less-common',
    description: 'Exclusively a female archetype and ironically usually childless, the Mother is deeply caring and nurturing toward others. Unable to ever act in their own best interests because they\'re always seeking to please others.',
    traits: ['Nurturing', 'Self-sacrificing', 'Caring', 'Other-focused', 'Supportive'],
    strengths: [
      'Exceptional ability to care for others',
      'Creates warm, supportive environments',
      'Strong emotional intelligence',
      'Builds deep, loyal relationships',
      'Often the heart of communities and organizations'
    ],
    challenges: [
      'Chronic self-neglect',
      'Can be taken advantage of',
      'May enable unhealthy dependencies',
      'Own needs and desires go unmet',
      'Can become resentful over time'
    ],
    advice: 'Your nurturing nature is a gift, but you must include yourself in your circle of care. Setting boundaries isn\'t selfish—it\'s necessary. You can\'t pour from an empty cup.',
    color: '#f472b6'
  }
];

export function getArchetype(id: string): Archetype | undefined {
  return archetypes.find(a => a.id === id);
}
