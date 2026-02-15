<!-- Badges -->
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)](https://vitejs.dev/)
[![PWA](https://img.shields.io/badge/PWA-Ready-green?logo=pwa)](https://web.dev/progressive-web-apps/)

# ⚡ React Game Base

**Build your own Wordle in minutes, not weeks.**

The React + TypeScript template for daily puzzle games. Streaks, sharing, analytics, dark mode, and one-click deploy — all included. Just add your game.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎯 **Daily Puzzles** | Deterministic puzzle numbering with seeded randomization |
| 🔥 **Streak Tracking** | Consecutive day detection with automatic streak management |
| 📤 **Social Sharing** | Emoji grid sharing with clipboard + native share API |
| 🌙 **Dark Mode** | System preference detection with manual toggle |
| ⏱️ **Countdown Timer** | "Next puzzle in HH:MM:SS" with auto-refresh at midnight |
| 📱 **PWA Ready** | Installable app with offline support via service worker |
| 🚀 **One-Click Deploy** | GitHub Pages deployment via Actions |
| 📊 **Analytics** | Google Analytics 4 integration scaffold |
| 🛡️ **Error Boundary** | Graceful error handling with recovery options |
| 🔔 **Toast Notifications** | Visual feedback for share, errors, and game events |
| ♿ **Accessible** | WCAG AA compliant: ARIA labels, keyboard nav, reduced motion |
| 🎨 **Animations** | Micro-interactions, entrance animations, and visual polish |

## 🚀 Quick Start

### 1. Use this template

Click **"Use this template"** on GitHub, or:

```bash
git clone https://github.com/joshhamburger/react-game-base.git my-game
cd my-game
npm install
npm run dev
```

### 2. Configure your game

Edit `src/game.config.ts`:

```ts
export const gameConfig = {
  name: 'My Daily Game',
  description: 'A new puzzle every day!',
  author: 'Your Name',
  // ... features, theme, analytics
};
```

### 3. Build your game

Replace the example in `src/game/GameBoard.tsx`:

```tsx
export const GameBoard = ({ puzzleNumber, seed, onComplete, onScore }: GameBoardProps) => {
  // Your game logic here!
  return <div>Build something awesome ✨</div>;
};
```

### 4. Deploy

Push to GitHub and enable GitHub Pages — your game deploys automatically.

## 📁 Project Structure

```
src/
  game.config.ts         ← Configure your game here
  game/                  ← YOUR code goes here
    GameBoard.tsx         ← Your main game component
    gameLogic.ts          ← Puzzle generation & validation
    types.ts              ← Your game-specific types
  template/              ← Framework code (don't edit)
    components/           ← UI components
    context/              ← State management
    hooks/                ← Custom hooks
    utils/                ← Utility functions
    styles/               ← Global styles
    types/                ← Template types
  pages/
    Home.tsx              ← Home page (light customization)
    Play.tsx              ← Game page (wraps your GameBoard)
```

**The rule is simple:** Put your code in `src/game/`, configure in `game.config.ts`, and don't touch `src/template/`.

## 🎮 GameBoard API

Your `GameBoard` component receives these props from the template:

| Prop | Type | Description |
|------|------|-------------|
| `puzzleNumber` | `number` | Today's unique puzzle number |
| `seed` | `number` | Deterministic seed for today's puzzle |
| `onComplete` | `(won: boolean) => void` | Call when the player finishes |
| `onScore` | `(score: number) => void` | Call to update the player's score |

## ⚙️ Configuration

All configuration lives in `src/game.config.ts`:

```ts
export const gameConfig = {
  // Identity
  name: 'My Daily Game',
  description: 'A new puzzle every day!',
  author: 'Your Name',
  version: '1.0.0',

  // Appearance
  primaryColor: '#4A90E2',
  fontFamily: "'Outfit', sans-serif",

  // Feature flags
  features: {
    streaks: true,
    sharing: true,
    statsGrid: true,
    countdown: true,
    darkMode: true,
    analytics: true,
  },

  // Share format
  shareTemplate: '{name} #{dayNumber}\n{grid}\nStreak: {streak} 🔥',
};
```

## 🧪 Testing

```bash
npm test              # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

Tests use [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## 🛠️ Tech Stack

- **React 18** — UI framework
- **TypeScript 5** — Type safety
- **Vite 5** — Build tool & dev server
- **Bootstrap 5** — UI components
- **React Router 6** — Client-side routing
- **Vitest** — Testing framework
- **vite-plugin-pwa** — Progressive Web App support

## 📄 License

MIT © [Joshua Hamburger](https://github.com/joshhamburger)
