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

export const GameStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_GAME_STATE;
  });

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