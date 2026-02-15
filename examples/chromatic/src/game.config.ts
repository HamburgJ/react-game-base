export const gameConfig = {
  name: 'Chromatic',
  description: 'Mix colors to match the target.',
  author: 'Joshua Hamburger',
  version: '1.0.0',
  primaryColor: '#F2C94C',
  fontFamily: "'Outfit', sans-serif",
  icon: '/favicon.svg',
  features: {
    streaks: true,
    sharing: true,
    statsGrid: true,
    countdown: true,
    darkMode: true,
    analytics: false,
  },
  gaId: '',
  shareTemplate: '{name} #{dayNumber}\n{grid}\nAccuracy: {score}% 🎨',
};
