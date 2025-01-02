# React Game Base Template

A template repository for creating daily browser games like Wordle, Connections, or similar puzzle games. Features automatic deployment, state persistence, daily streaks, and responsive design.

## Play the [Live Demo](https://burgerfun.tech/four-nines/) of Four Nines, a daily puzzle game created from this template

## Features

- 🎮 Perfect for daily puzzle games
- 🌙 Built-in dark/light theme
- 📊 Daily streak tracking
- 🔄 Automatic state persistence
- 📱 Mobile-first responsive design
- 🚀 One-click GitHub Pages deployment
- 📈 Google Analytics 4 support
- 🎨 Clean, modern UI with Bootstrap
- 🔗 Social sharing with result grids
- 📊 Stats comparison system

## Quick Start

1. Click "Use this template" to create your repository
2. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
3. Configure analytics and sharing:
   - Copy `.env.example` to `.env`
   - Add your Google Analytics 4 ID
   - Add your game preview image at `/public/game-preview.png`
4. Your game will be live at `https://yourusername.github.io/your-repo-name`

## Customization

Look for `TODO` comments in these files:

### Required Changes
1. `src/pages/Play.tsx`
   - Replace placeholder with your game logic
   - Customize completion state display

2. `src/pages/Home.tsx`
   - Update game title and introduction
   - Customize welcome message

3. `src/types/GameState.ts`
   - Add game-specific state properties
   - Add game-specific settings

### Optional Changes
1. `public/game-icon.svg`
   - Replace with your game icon

2. `src/styles/global.css`
   - Customize colors and theme
   - Add game-specific styles

3. `src/components/InfoModal.tsx`
   - Update game instructions
   - Add game features list

## Built-in Features

### State Management
```typescript
const { gameState, updateGameState } = useGameState();

// Update game state
updateGameState({
  score: newScore,
  todayCompleted: true,
});
```

### Daily Puzzles
- Automatically generates puzzle number from date
- Tracks completion status
- Prevents replaying completed puzzles
- Shows stats after completion

### Theme Support
```typescript
const { theme, toggleTheme } = useTheme();
```

### Result Sharing
```typescript
// Share results with native share API or clipboard fallback
const shareText = generateShareText({
  title: 'My Game',
  dayNumber: puzzleNumber,
  streak: 5,
  stats: gameStats
});
await shareResults(shareText);
```

### Stats Tracking
- Games played
- Win rate
- Current streak
- Best streak
- Daily completion status

### Analytics Integration
1. Set up Google Analytics:
   ```env
   # .env
   VITE_GA_ID=G-XXXXXXXXXX
   ```

2. Track custom events:
   ```typescript
   gtag('event', 'puzzle_complete', {
     puzzle_number: puzzleNumber,
     streak: streak
   });
   ```

### Social Media Integration
- Open Graph meta tags for rich previews
- Twitter card support
- Customizable share images
- Automatic puzzle numbering

## Game Development Tips

### State Persistence
All game state is automatically saved to localStorage. Common state properties:
- `todayCompleted`: Whether today's puzzle is completed
- `streak`: Daily visit streak
- `lastPlayed`: Last played timestamp
- `gamesPlayed`: Total games completed
- `winRate`: Player's win rate

### Adding Custom Features

1. **Daily Puzzles**
```typescript
const getTodaysPuzzle = () => {
  const today = new Date();
  const puzzleIndex = Math.floor(today.getTime() / (24 * 60 * 60 * 1000));
  return puzzles[puzzleIndex % puzzles.length];
};
```

2. **Progress Saving**
```typescript
updateGameState({
  todayCompleted: true,
  gamesPlayed: gamesPlayed + 1,
  winRate: calculateWinRate(),
});
```

3. **Statistics**
```typescript
updateGameState({
  gamesPlayed: gameState.gamesPlayed + 1,
  winRate: (gamesPlayed - 1) / gamesPlayed,
  maxStreak: Math.max(maxStreak, streak),
});
```

### Common Game Patterns

1. **Daily Reset**
```typescript
const isNewDay = () => {
  const lastPlayed = new Date(gameState.lastPlayed);
  const now = new Date();
  return !isSameDay(lastPlayed, now);
};
```

2. **Share Results**
```typescript
const handleShare = async () => {
  const text = generateShareText({
    title: 'Game Title',
    dayNumber: puzzleNumber,
    streak,
    stats: gameStats
  });
  await shareResults(text);
};
```

## Common Issues

1. **GitHub Pages 404**: Make sure GitHub Pages is enabled and set to deploy from GitHub Actions
2. **State Reset**: The reset functionality clears ALL game progress
3. **Mobile Testing**: Test touch interactions thoroughly
4. **Analytics Not Working**: Verify your GA4 ID in `.env` file
5. **Share Not Working**: Some browsers restrict clipboard access to HTTPS

## License

MIT License - feel free to use this template for any purpose.
