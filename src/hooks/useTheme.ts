import { useEffect } from 'react';
import { useGameState } from './useGameState';

export const useTheme = () => {
  const { gameState, updateSettings } = useGameState();
  const { theme } = gameState.settings;

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    updateSettings({ theme: theme === 'light' ? 'dark' : 'light' });
  };

  return {
    theme,
    toggleTheme,
  };
}; 