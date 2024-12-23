export interface GameState {
  // Built-in state properties
  currentLevel: number;
  score: number;
  highScores: number[];
  lastPlayed: string | null;
  streak: number;
  settings: GameSettings;
  
  // TODO: Add your game-specific state properties here
  // Example:
  // playerName?: string;
  // inventory?: Item[];
  // achievements?: Achievement[];
}

export interface GameSettings {
  // Built-in settings
  theme: 'light' | 'dark';
  soundEnabled: boolean;
  musicEnabled: boolean;

  // TODO: Add your game-specific settings here
  // Example:
  // difficulty?: 'easy' | 'medium' | 'hard';
  // customControls?: Record<string, string>;
}

export const DEFAULT_GAME_STATE: GameState = {
  // Built-in defaults
  currentLevel: 1,
  score: 0,
  highScores: [],
  lastPlayed: null,
  streak: 0,
  settings: {
    theme: 'light',
    soundEnabled: true,
    musicEnabled: true,
    // TODO: Add defaults for your game-specific settings here
  },
  // TODO: Add defaults for your game-specific state here
}; 