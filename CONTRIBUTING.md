# Contributing to React Game Base

Thank you for your interest in contributing! 🎮

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/react-game-base.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/my-feature`
5. Make your changes
6. Run tests: `npm test`
7. Commit: `git commit -m "feat: add my feature"`
8. Push: `git push origin feature/my-feature`
9. Open a Pull Request

## Development

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm test             # Run tests
npm run test:coverage # Tests with coverage
npm run lint         # Lint code
```

## Project Structure

- `src/template/` — Framework code (core improvements go here)
- `src/game/` — Example game scaffold
- `src/pages/` — Page components
- `src/game.config.ts` — Centralized configuration

## Code Style

- TypeScript strict mode
- React functional components with hooks
- CSS custom properties for theming
- Meaningful variable and function names
- JSDoc comments for public APIs

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — Code style changes (formatting, etc.)
- `refactor:` — Code refactoring
- `test:` — Adding or updating tests
- `chore:` — Maintenance tasks

## Reporting Bugs

Please open an issue with:
1. Clear title and description
2. Steps to reproduce
3. Expected vs actual behavior
4. Browser and OS information

## Suggesting Features

Open an issue with the "feature request" label and describe:
1. The problem you're solving
2. Your proposed solution
3. Any alternatives you've considered

## Built a Game?

We'd love to see it! Open an issue with the "showcase" label to have your game featured in the README.
