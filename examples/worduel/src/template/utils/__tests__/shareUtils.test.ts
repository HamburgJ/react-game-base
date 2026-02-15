import { describe, it, expect, vi, beforeEach } from 'vitest';
import { generateResultGrid, generateShareText, shareResults, compareStats } from '../shareUtils';

describe('shareUtils', () => {
  describe('generateResultGrid', () => {
    it('generates a grid from emoji arrays', () => {
      const grid: ('🟩' | '🟨' | '⬛')[][] = [
        ['🟩', '🟨', '⬛'],
        ['🟩', '🟩', '🟩'],
      ];
      const result = generateResultGrid(grid);
      expect(result).toBe('🟩🟨⬛\n🟩🟩🟩');
    });

    it('handles single row', () => {
      const grid: ('🟩')[][] = [['🟩', '🟩', '🟩']];
      expect(generateResultGrid(grid)).toBe('🟩🟩🟩');
    });

    it('handles empty grid', () => {
      expect(generateResultGrid([])).toBe('');
    });
  });

  describe('generateShareText', () => {
    it('includes title and day number', () => {
      const text = generateShareText({
        title: 'Test Game',
        dayNumber: 42,
      });
      expect(text).toContain('Test Game #42');
    });

    it('includes streak when provided', () => {
      const text = generateShareText({
        title: 'Test',
        streak: 5,
      });
      expect(text).toContain('Streak: 5');
    });

    it('includes score when provided', () => {
      const text = generateShareText({
        title: 'Test',
        score: 100,
      });
      expect(text).toContain('Score: 100');
    });

    it('includes stats when provided', () => {
      const text = generateShareText({
        title: 'Test',
        stats: {
          gamesPlayed: 10,
          winRate: 0.8,
          currentStreak: 3,
          maxStreak: 5,
        },
      });
      expect(text).toContain('Games Played: 10');
      expect(text).toContain('Win Rate: 80%');
      expect(text).toContain('Current Streak: 3');
      expect(text).toContain('Max Streak: 5');
    });
  });

  describe('shareResults', () => {
    beforeEach(() => {
      // Reset mocks
      vi.restoreAllMocks();
    });

    it('uses native share when available', async () => {
      const mockShare = vi.fn().mockResolvedValue(undefined);
      Object.defineProperty(navigator, 'share', {
        value: mockShare,
        writable: true,
        configurable: true,
      });

      await shareResults('test text');
      expect(mockShare).toHaveBeenCalledWith(
        expect.objectContaining({ text: 'test text' })
      );
    });

    it('falls back to clipboard when share is not available', async () => {
      // Remove native share
      Object.defineProperty(navigator, 'share', {
        value: undefined,
        writable: true,
        configurable: true,
      });

      const mockWriteText = vi.fn().mockResolvedValue(undefined);
      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: mockWriteText },
        writable: true,
        configurable: true,
      });

      await shareResults('test text');
      expect(mockWriteText).toHaveBeenCalledWith('test text');
    });
  });

  describe('compareStats', () => {
    it('generates comparison text', () => {
      const myStats = {
        gamesPlayed: 10,
        winRate: 0.8,
        currentStreak: 3,
        maxStreak: 5,
      };
      const friendStats = {
        gamesPlayed: 15,
        winRate: 0.6,
        currentStreak: 1,
        maxStreak: 7,
      };
      const result = compareStats(myStats, friendStats);
      expect(result).toContain('Stats Comparison');
      expect(result).toContain('You');
      expect(result).toContain('Friend');
    });
  });
});
