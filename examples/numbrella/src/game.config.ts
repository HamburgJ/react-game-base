export const gameConfig = {
  name: 'Numbrella',
  description: 'Reach the target number using provided digits and operations.',
  author: 'Joshua Hamburger',
  version: '1.0.0',
  primaryColor: '#8E44AD',
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
  shareTemplate: '{name} #{dayNumber}\n{grid}\nScore: {score} | Streak: {streak} ☂️',
};
