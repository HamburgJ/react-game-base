import React, { createContext, useContext, useState, useEffect } from 'react';
import { GameState, DEFAULT_GAME_STATE } from '../types/GameState';

interface GameStateContextType {
  gameState: GameState;
  updateGameState: (updates: Partial<GameState>) => void;
  resetGameState: () => void;
  updateSettings: (updates: Partial<GameState['settings']>) => void;
}

const GameStateContext = createContext<GameStateContextType | undefined>(undefined);

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

export const GameStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_GAME_STATE;
  });

  // Check and update streak on mount; reset todayCompleted on new day
  useEffect(() => {
    const now = new Date();
    const lastPlayed = gameState.lastPlayed ? new Date(gameState.lastPlayed) : null;

    if (!lastPlayed) {
      // First visit
      setGameState(current => ({
        ...current,
        streak: 1,
        lastPlayed: now.toISOString(),
      }));
    } else if (!isSameDay(lastPlayed, now)) {
      // New day detected — reset todayCompleted and update streak
      if (isConsecutiveDay(lastPlayed, now)) {
        setGameState(current => ({
          ...current,
          streak: current.streak + 1,
          lastPlayed: now.toISOString(),
          todayCompleted: false,
        }));
      } else {
        setGameState(current => ({
          ...current,
          streak: 1,
          lastPlayed: now.toISOString(),
          todayCompleted: false,
        }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    setGameState(current => ({
      ...DEFAULT_GAME_STATE,
      settings: {
        ...DEFAULT_GAME_STATE.settings,
        theme: current.settings.theme,
      },
    }));
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

  return (
    <GameStateContext.Provider value={{ gameState, updateGameState, resetGameState, updateSettings }}>
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
}; 