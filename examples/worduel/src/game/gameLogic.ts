import { WORDS } from './wordList';
import seedrandom from 'seedrandom';

export type LetterState = 'correct' | 'present' | 'absent' | 'empty';

export const getTodaysWord = (seed: string): string => {
  const rng = seedrandom(seed);
  const index = Math.floor(rng() * WORDS.length);
  return WORDS[index];
};

export const checkGuess = (guess: string, answer: string): LetterState[] => {
  guess = guess.toUpperCase();
  answer = answer.toUpperCase();
  
  const result: LetterState[] = Array(5).fill('absent');
  const answerCounts: Record<string, number> = {};

  // Count frequencies in answer
  for (const char of answer) {
    answerCounts[char] = (answerCounts[char] || 0) + 1;
  }

  // First pass: find correct letters (green)
  for (let i = 0; i < 5; i++) {
    if (guess[i] === answer[i]) {
      result[i] = 'correct';
      answerCounts[guess[i]]--;
    }
  }

  // Second pass: find present letters (yellow)
  for (let i = 0; i < 5; i++) {
    const char = guess[i];
    if (result[i] !== 'correct' && answerCounts[char] && answerCounts[char] > 0) {
      result[i] = 'present';
      answerCounts[char]--;
    }
  }

  return result;
};
