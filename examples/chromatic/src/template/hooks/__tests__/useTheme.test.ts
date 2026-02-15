import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../useTheme';
import { GameStateProvider } from '../../context/GameStateContext';
import React from 'react';

const wrapper = ({ children }: { children: React.ReactNode }) =>
  React.createElement(GameStateProvider, null, children);

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-bs-theme');
  });

  it('returns current theme', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(['light', 'dark']).toContain(result.current.theme);
  });

  it('toggles theme', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    const initialTheme = result.current.theme;

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).not.toBe(initialTheme);
  });

  it('sets data-bs-theme attribute on document', () => {
    renderHook(() => useTheme(), { wrapper });
    expect(document.documentElement.getAttribute('data-bs-theme')).toBeTruthy();
  });
});
