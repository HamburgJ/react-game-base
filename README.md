# React Game Base Template

A template repository for creating and deploying browser-based games to GitHub Pages with automatic deployment, state persistence, and responsive design.

## Features

- React + TypeScript
- Vite for fast development and building
- GitHub Pages deployment ready
- React Bootstrap for UI components
- React Router DOM with hash routing
- State management with localStorage persistence
- Responsive design
- Dark/Light theme support
- Automatic deployment configuration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-game-base.git
cd react-game-base
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
└── styles/        # Global styles and themes
```

## Customization Guide

### 1. Game Implementation

The template provides several key files that need to be customized for your game:

#### Required Changes
1. `src/pages/Play.tsx`
   - Replace the placeholder game area with your game implementation
   - Customize game stats display (level, score, streak)
   - Add game-specific controls and UI elements

2. `src/types/GameState.ts`
   - Add game-specific state properties to `GameState` interface
   - Add game-specific settings to `GameSettings` interface
   - Set appropriate default values in `DEFAULT_GAME_STATE`

3. `src/pages/Home.tsx`
   - Update game title and introduction
   - Customize the start game button

#### Optional Changes
1. `src/pages/Settings.tsx`
   - Add game-specific settings
   - Customize existing settings behavior

2. `src/pages/Info.tsx`
   - Update game rules and features
   - Add credits and acknowledgments

3. `src/styles/global.css`
   - Customize theme colors
   - Add game-specific styles

4. `public/game-icon.svg`
   - Replace with your game's icon

### 2. State Management

The template provides built-in state management with the following features:
- Persistent storage using localStorage
- Theme switching
- Sound/Music toggles
- Progress tracking (level, score, streak)

To add custom state:
1. Update `GameState` interface in `types/GameState.ts`
2. Use `useGameState` hook to access and modify state
3. Add state update logic in your game components

Example:
```typescript
const { gameState, updateGameState } = useGameState();

// Update specific state properties
updateGameState({
  score: newScore,
  currentLevel: nextLevel,
});
```

### 3. Theme Customization

1. Light/Dark theme support is built-in
2. Customize theme colors in `src/styles/global.css`
3. Use Bootstrap's theme classes for consistent styling
4. High contrast mode support included

### 4. Deployment

The template is configured for automatic GitHub Pages deployment:

1. Fork or create a new repository from this template
2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set "Source" to "GitHub Actions"
3. Push your changes to the main branch
4. The GitHub Action will automatically:
   - Build your project
   - Configure the correct base URL
   - Deploy to GitHub Pages
   - Provide the deployment URL in the action output

No manual configuration is needed for deployment paths - everything is handled automatically!

### 5. Performance Considerations

1. Implement loading states for async operations
2. Use React.lazy for code splitting if needed
3. Optimize game assets and animations
4. Consider using Web Workers for intensive computations

## Common Issues

1. **GitHub Pages 404**: Make sure GitHub Pages is enabled and set to deploy from GitHub Actions in your repository settings.
2. **State Reset**: The reset functionality in settings will clear ALL game progress. Customize the reset behavior in `useGameState` if needed.
3. **Mobile Support**: Test touch interactions thoroughly and adjust UI for small screens.

## License

MIT License - feel free to use this template for any purpose.
