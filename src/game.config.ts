export const gameConfig = {
  // Game identity
  name: 'My Daily Game',
  description: 'A new puzzle every day!',
  author: 'Your Name',
  version: '1.0.0',

  // Appearance
  primaryColor: '#4A90E2',
  fontFamily: "'Outfit', sans-serif",
  icon: '/game-icon.svg',
  socialPreview: '/game-preview.png',

  // Features (toggle on/off)
  features: {
    streaks: true,
    sharing: true,
    statsGrid: true,
    countdown: true,
    darkMode: true,
    analytics: true,
  },

  // Analytics
  gaId: import.meta.env.VITE_GA_ID || '',

  // Share text template
  shareTemplate: '{name} #{dayNumber}\n{grid}\nStreak: {streak} 🔥',
};
