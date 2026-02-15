# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-02-14

### Added
- **Centralized configuration** — `game.config.ts` for all game settings
- **GameBoard scaffold** — Typed component with example game in `src/game/`
- **Toast notifications** — Visual feedback for share, errors, and game events
- **Countdown timer** — "Next puzzle in HH:MM:SS" on completion screen
- **Error boundary** — Graceful error handling with recovery options
- **Loading spinner** — Suspense fallback for initial load
- **PWA support** — Service worker, manifest, offline capabilities
- **Test suite** — Vitest + React Testing Library with core tests
- **Animations** — Entrance animations, micro-interactions, stat pop-ins
- **Accessibility** — ARIA labels, keyboard navigation, touch targets, reduced motion

### Changed
- **Consolidated state management** — Single source of truth via React Context
- **Reorganized file structure** — `src/template/` (framework) vs `src/game/` (user code)
- **Fixed resetGameState** — Now preserves theme, resets streak to 0
- **Improved share feedback** — Toast notifications on clipboard copy

### Fixed
- Dual state management bug (hook vs context)
- Missing streak logic in context provider
- todayCompleted not resetting on new day
- No visual feedback on share action

## [0.1.0] - Initial Release

### Added
- React 18 + TypeScript + Vite template
- Dark/light theme support
- localStorage state persistence
- Daily streak tracking
- Share utilities with emoji grid
- Seeded random and puzzle-of-the-day utilities
- GitHub Pages deployment via Actions
- Google Analytics 4 scaffold
