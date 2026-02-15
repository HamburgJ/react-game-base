import { useState, useEffect } from 'react';
import { getTimeUntilNextPuzzle, formatCountdown } from '../utils/gameUtils';
import { gameConfig } from '../../game.config';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilNextPuzzle());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeUntilNextPuzzle();
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        window.location.reload();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!gameConfig.features.countdown) return null;

  return (
    <div className="countdown-timer" role="timer" aria-live="polite" aria-label={`Next puzzle in ${formatCountdown(timeLeft)}`}>
      <div className="countdown-label">Next puzzle in</div>
      <div className="countdown-value">{formatCountdown(timeLeft)}</div>
    </div>
  );
};
