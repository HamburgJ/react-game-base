import { useState } from 'react';

/**
 * Props provided by the template to your game board.
 * 
 * The template handles everything else:
 * streaks, sharing, persistence, theming, deployment.
 */
export interface GameBoardProps {
  /** Today's unique puzzle number */
  puzzleNumber: number;
  /** Today's random seed (for deterministic puzzles) */
  seed: number;
  /** Call this when the player finishes the puzzle */
  onComplete: (won: boolean) => void;
  /** Call this to update the player's score */
  onScore: (score: number) => void;
}

/**
 * 🎮 YOUR GAME BOARD
 * 
 * This is where your game lives! Replace the example below
 * with your actual game implementation.
 * 
 * Example: A simple "click 5 times to win" game.
 */
export const GameBoard = ({ puzzleNumber, seed: _seed, onComplete, onScore }: GameBoardProps) => {
  const [clicks, setClicks] = useState(0);
  const target = 5;

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    onScore(newClicks);

    if (newClicks >= target) {
      onComplete(true);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }} tabIndex={0} aria-label={`Puzzle number ${puzzleNumber} game board`}>
      <h3>Puzzle #{puzzleNumber}</h3>
      <p style={{ color: '#95A5A6', marginBottom: '1.5rem' }}>
        Click the button {target} times to complete today's puzzle!
      </p>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        {clicks} / {target}
      </div>
      <button
        onClick={handleClick}
        aria-label={`Click me — ${clicks} of ${target} clicks`}
        style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          fontWeight: 600,
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#4A90E2',
          color: 'white',
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        Click Me!
      </button>
    </div>
  );
};
