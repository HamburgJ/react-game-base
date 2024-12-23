import { useEffect } from 'react';
import { useGameState } from '../context/GameStateContext';

export const useTheme = () => {
  const { gameState, updateSettings } = useGameState();
  const { theme } = gameState.settings;

  useEffect(() => {
    if (!theme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      updateSettings({ theme: prefersDark ? 'dark' : 'light' });
    }
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme, updateSettings]);

  const toggleTheme = () => {
    updateSettings({ theme: theme === 'light' ? 'dark' : 'light' });
  };

  return {
    theme,
    toggleTheme,
  };
}; 