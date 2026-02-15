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
  wins: number;
  winRate: number;
  maxStreak: number;
  todayCompleted: boolean;
}

export interface GameSettings {
  // Built-in settings
  theme: 'light' | 'dark';
}

// Get initial theme from system preference
const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const DEFAULT_GAME_STATE: GameState = {
  // Built-in defaults
  currentLevel: 1,
  score: 0,
  highScores: [],
  lastPlayed: null,
  streak: 0,
  settings: {
    theme: getInitialTheme(),
  },
  // Game completion defaults
  gamesPlayed: 0,
  wins: 0,
  winRate: 0,
  maxStreak: 0,
  todayCompleted: false,
}; 