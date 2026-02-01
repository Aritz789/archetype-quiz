export type ArchetypeId =
  | 'commander'
  | 'imitator'
  | 'explorer'
  | 'rebel'
  | 'jester'
  | 'provocateur'
  | 'artist'
  | 'everyman'
  | 'visionary'
  | 'chosen-one'
  | 'twenty-seven-club'
  | 'munchausen-hero'
  | 'deviant'
  | 'mother';

export type ArchetypeCategory = 'common' | 'less-common';

export interface Archetype {
  id: ArchetypeId;
  name: string;
  tagline: string;
  category: ArchetypeCategory;
  description: string;
  traits: string[];
  strengths: string[];
  challenges: string[];
  advice: string;
  color: string;
}

export interface AnswerWeight {
  archetypeId: ArchetypeId;
  weight: number;
}

export interface QuizAnswer {
  id: string;
  text: string;
  weights: AnswerWeight[];
}

export interface QuizQuestion {
  id: string;
  text: string;
  subtext?: string;
  answers: QuizAnswer[];
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  startedAt: number;
}

export interface ScoredArchetype {
  archetypeId: ArchetypeId;
  score: number;
  percentage: number;
}

export interface QuizResult {
  primary: ScoredArchetype;
  secondary: ScoredArchetype | null;
  allScores: ScoredArchetype[];
}

export type AppView = 'landing' | 'quiz' | 'results';
