export interface GameState {
  // Built-in state properties
  currentLevel: number;
  score: number;
  highScores: number[];
  lastPlayed: string | null;
  streak: number;
  settings: GameSettings;
  
  // Game completion tracking
  gamesPlayed: number;
  winRate: number;
  maxStreak: number;
  todayCompleted: boolean;
}

export interface GameSettings {
  // Built-in settings
  theme: 'light' | 'dark';
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
  },
  // Game completion defaults
  gamesPlayed: 0,
  winRate: 0,
  maxStreak: 0,
  todayCompleted: false,
}; 