import { seededShuffle } from '../template/utils/gameUtils';

/**
 * 🧩 YOUR GAME LOGIC
 * 
 * Put your puzzle generation, validation, and scoring logic here.
 * Use the seeded random utilities from the template for deterministic daily puzzles.
 * 
 * Example: Generate a daily puzzle based on the seed.
 */

export interface Puzzle {
  /** The target the player needs to reach */
  target: number;
  /** Any additional puzzle data */
  data: unknown;
}

/**
 * Generate today's puzzle from the seed.
 * The same seed always produces the same puzzle.
 */
export const generatePuzzle = (seed: number): Puzzle => {
  // Example: use seed to create a deterministic puzzle
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const shuffled = seededShuffle(numbers, seed);
  
  return {
    target: shuffled[0],
    data: shuffled.slice(1, 5),
  };
};

/**
 * Validate a player's answer.
 */
export const validateAnswer = (answer: unknown, puzzle: Puzzle): boolean => {
  // Replace with your validation logic
  return answer === puzzle.target;
};

/**
 * Calculate the player's score.
 */
export const calculateScore = (attempts: number, timeMs: number): number => {
  // Replace with your scoring logic
  const baseScore = 1000;
  const attemptPenalty = (attempts - 1) * 100;
  const timePenalty = Math.floor(timeMs / 1000) * 10;
  return Math.max(0, baseScore - attemptPenalty - timePenalty);
};
