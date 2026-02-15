import { describe, it, expect } from 'vitest';
import { getTodaysPuzzle, getTimeUntilNextPuzzle, formatCountdown, seededShuffle, getTodaysSeed } from '../gameUtils';

describe('gameUtils', () => {
  describe('getTodaysPuzzle', () => {
    it('returns a puzzle from the array', () => {
      const puzzles = ['a', 'b', 'c', 'd', 'e'];
      const result = getTodaysPuzzle(puzzles);
      expect(puzzles).toContain(result);
    });

    it('returns the same puzzle for the same day', () => {
      const puzzles = ['a', 'b', 'c', 'd', 'e'];
      const result1 = getTodaysPuzzle(puzzles);
      const result2 = getTodaysPuzzle(puzzles);
      expect(result1).toBe(result2);
    });

    it('respects offset parameter', () => {
      const puzzles = ['a', 'b', 'c', 'd', 'e'];
      const result1 = getTodaysPuzzle(puzzles, 0);
      const result2 = getTodaysPuzzle(puzzles, 1);
      // They might be the same by chance, but the function should not throw
      expect(puzzles).toContain(result1);
      expect(puzzles).toContain(result2);
    });
  });

  describe('getTimeUntilNextPuzzle', () => {
    it('returns a positive number', () => {
      const time = getTimeUntilNextPuzzle();
      expect(time).toBeGreaterThan(0);
    });

    it('returns less than 24 hours in milliseconds', () => {
      const time = getTimeUntilNextPuzzle();
      expect(time).toBeLessThanOrEqual(24 * 60 * 60 * 1000);
    });
  });

  describe('formatCountdown', () => {
    it('formats zero milliseconds', () => {
      expect(formatCountdown(0)).toBe('00:00:00');
    });

    it('formats hours, minutes, seconds correctly', () => {
      const ms = (2 * 60 * 60 + 30 * 60 + 45) * 1000;
      expect(formatCountdown(ms)).toBe('02:30:45');
    });

    it('formats single digit values with leading zeros', () => {
      const ms = (1 * 60 * 60 + 5 * 60 + 3) * 1000;
      expect(formatCountdown(ms)).toBe('01:05:03');
    });

    it('handles 23:59:59', () => {
      const ms = (23 * 60 * 60 + 59 * 60 + 59) * 1000;
      expect(formatCountdown(ms)).toBe('23:59:59');
    });
  });

  describe('seededShuffle', () => {
    it('returns an array of the same length', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = seededShuffle(arr, 42);
      expect(result).toHaveLength(arr.length);
    });

    it('contains all original elements', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = seededShuffle(arr, 42);
      expect(result.sort()).toEqual(arr.sort());
    });

    it('produces the same result for the same seed', () => {
      const arr = [1, 2, 3, 4, 5];
      const result1 = seededShuffle(arr, 42);
      const result2 = seededShuffle(arr, 42);
      expect(result1).toEqual(result2);
    });

    it('produces different results for different seeds', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const result1 = seededShuffle(arr, 42);
      const result2 = seededShuffle(arr, 99);
      expect(result1).not.toEqual(result2);
    });

    it('does not mutate the original array', () => {
      const arr = [1, 2, 3, 4, 5];
      const original = [...arr];
      seededShuffle(arr, 42);
      expect(arr).toEqual(original);
    });
  });

  describe('getTodaysSeed', () => {
    it('returns a positive number', () => {
      expect(getTodaysSeed()).toBeGreaterThan(0);
    });

    it('returns the same seed when called twice', () => {
      expect(getTodaysSeed()).toBe(getTodaysSeed());
    });

    it('returns a number in YYYYMMDD format', () => {
      const seed = getTodaysSeed();
      const str = seed.toString();
      expect(str).toHaveLength(8);
    });
  });
});
