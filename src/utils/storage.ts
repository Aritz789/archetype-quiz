import type { QuizState, QuizResult } from '../types/index.js';

const STORAGE_KEY = 'archetype-quiz-state';
const RESULT_KEY = 'archetype-quiz-result';

export function saveQuizState(state: QuizState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage might be full or disabled
  }
}

export function loadQuizState(): QuizState | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    return JSON.parse(data) as QuizState;
  } catch {
    return null;
  }
}

export function clearQuizState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore
  }
}

export function saveQuizResult(result: QuizResult): void {
  try {
    localStorage.setItem(RESULT_KEY, JSON.stringify(result));
  } catch {
    // Storage might be full or disabled
  }
}

export function loadQuizResult(): QuizResult | null {
  try {
    const data = localStorage.getItem(RESULT_KEY);
    if (!data) return null;
    return JSON.parse(data) as QuizResult;
  } catch {
    return null;
  }
}

export function clearQuizResult(): void {
  try {
    localStorage.removeItem(RESULT_KEY);
  } catch {
    // Ignore
  }
}
