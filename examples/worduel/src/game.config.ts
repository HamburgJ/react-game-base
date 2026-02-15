export const gameConfig = {
  // Game identity
  name: 'Worduel',
  description: 'Guess the hidden word in 6 tries.',
  author: 'Joshua Hamburger',
  version: '1.0.0',

  // Appearance
  primaryColor: '#538D4E', // Wordle Green
  fontFamily: "'Outfit', sans-serif",
  icon: '/favicon.svg', // Ideally we'd have a specific icon
  
  // Features (toggle on/off)
  features: {
    streaks: true,
    sharing: true,
    statsGrid: true, // This is key for Wordle
    countdown: true,
    darkMode: true,
    analytics: false,
  },

  // Analytics
  gaId: '',

  // Share text template
  shareTemplate: '{name} #{dayNumber}\n{grid}\nStreak: {streak} 🔥',
};
