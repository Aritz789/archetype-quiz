import type { ArchetypeId, QuizQuestion, QuizResult, ScoredArchetype } from '../types/index.js';

const SECONDARY_THRESHOLD = 15; // Within 15% of primary to qualify as secondary

export function calculateResults(
  answers: Record<string, string>,
  questions: QuizQuestion[]
): QuizResult {
  // Initialize scores for all archetypes
  const scores = new Map<ArchetypeId, number>();

  // Process each answered question
  for (const [questionId, answerId] of Object.entries(answers)) {
    const question = questions.find(q => q.id === questionId);
    if (!question) continue;

    const answer = question.answers.find(a => a.id === answerId);
    if (!answer) continue;

    // Accumulate weights for each archetype
    for (const { archetypeId, weight } of answer.weights) {
      const current = scores.get(archetypeId) ?? 0;
      scores.set(archetypeId, current + weight);
    }
  }

  // Calculate max possible score (theoretical max if all answers pointed to one archetype)
  const maxScore = Math.max(...scores.values(), 1);

  // Convert to sorted array with percentages
  const sorted: ScoredArchetype[] = Array.from(scores.entries())
    .map(([archetypeId, score]) => ({
      archetypeId,
      score,
      percentage: Math.round((score / maxScore) * 100)
    }))
    .sort((a, b) => b.score - a.score);

  // Determine primary and secondary
  const primary = sorted[0];
  const secondary = sorted[1] && sorted[1].percentage >= (primary.percentage - SECONDARY_THRESHOLD)
    ? sorted[1]
    : null;

  return {
    primary,
    secondary,
    allScores: sorted
  };
}
