import { useState, useEffect } from 'react';
import { GameState, DEFAULT_GAME_STATE } from '../types/GameState';

const STORAGE_KEY = 'gameState';

const isSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const isConsecutiveDay = (lastDate: Date, currentDate: Date) => {
  const oneDayInMs = 24 * 60 * 60 * 1000;
  const diffInDays = Math.floor((currentDate.getTime() - lastDate.getTime()) / oneDayInMs);
  return diffInDays === 1;
};

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_GAME_STATE;
  });

  // Check and update streak on component mount and when lastPlayed changes
  useEffect(() => {
    const now = new Date();
    const lastPlayed = gameState.lastPlayed ? new Date(gameState.lastPlayed) : null;

    if (!lastPlayed) {
      // First visit
      updateGameState({
        streak: 1,
        lastPlayed: now.toISOString(),
      });
    } else if (!isSameDay(lastPlayed, now)) {
      // Not same day, check if consecutive
      if (isConsecutiveDay(lastPlayed, now)) {
        // Consecutive day, increment streak
        updateGameState({
          streak: gameState.streak + 1,
          lastPlayed: now.toISOString(),
        });
      } else {
        // Not consecutive, reset streak
        updateGameState({
          streak: 1,
          lastPlayed: now.toISOString(),
        });
      }
    }
  }, []); // Only run on mount

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  }, [gameState]);

  const updateGameState = (updates: Partial<GameState>) => {
    setGameState(current => ({
      ...current,
      ...updates,
    }));
  };

  const resetGameState = () => {
    const now = new Date();
    setGameState({
      ...DEFAULT_GAME_STATE,
      lastPlayed: now.toISOString(),
      streak: 1,
    });
  };

  const updateSettings = (updates: Partial<GameState['settings']>) => {
    setGameState(current => ({
      ...current,
      settings: {
        ...current.settings,
        ...updates,
      },
    }));
  };

  return {
    gameState,
    updateGameState,
    resetGameState,
    updateSettings,
  };
}; 