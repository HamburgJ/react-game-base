import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { GameStateProvider, useGameState } from '../GameStateContext';
import React from 'react';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <GameStateProvider>{children}</GameStateProvider>
);

describe('GameStateContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('provides default game state', () => {
    const { result } = renderHook(() => useGameState(), { wrapper });
    expect(result.current.gameState.gamesPlayed).toBe(0);
    expect(result.current.gameState.wins).toBe(0);
    expect(result.current.gameState.todayCompleted).toBe(false);
  });

  it('updates game state', () => {
    const { result } = renderHook(() => useGameState(), { wrapper });

    act(() => {
      result.current.updateGameState({ score: 100 });
    });

    expect(result.current.gameState.score).toBe(100);
  });

  it('persists state to localStorage', () => {
    const { result } = renderHook(() => useGameState(), { wrapper });

    act(() => {
      result.current.updateGameState({ gamesPlayed: 5 });
    });

    const stored = JSON.parse(localStorage.getItem('gameState') || '{}');
    expect(stored.gamesPlayed).toBe(5);
  });

  it('resets game state preserving theme', () => {
    const { result } = renderHook(() => useGameState(), { wrapper });

    act(() => {
      result.current.updateSettings({ theme: 'dark' });
    });

    act(() => {
      result.current.updateGameState({ gamesPlayed: 10, score: 500 });
    });

    act(() => {
      result.current.resetGameState();
    });

    expect(result.current.gameState.gamesPlayed).toBe(0);
    expect(result.current.gameState.score).toBe(0);
    expect(result.current.gameState.streak).toBe(0);
    expect(result.current.gameState.settings.theme).toBe('dark');
  });

  it('updates settings', () => {
    const { result } = renderHook(() => useGameState(), { wrapper });

    act(() => {
      result.current.updateSettings({ theme: 'dark' });
    });

    expect(result.current.gameState.settings.theme).toBe('dark');
  });

  it('throws when used outside provider', () => {
    // Suppress React error boundary console noise
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => {
      renderHook(() => useGameState());
    }).toThrow('useGameState must be used within a GameStateProvider');
    spy.mockRestore();
  });
});
