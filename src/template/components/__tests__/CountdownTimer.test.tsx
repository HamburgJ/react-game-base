import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';

// Mock gameUtils before importing the component
vi.mock('../../utils/gameUtils', () => ({
  getTimeUntilNextPuzzle: vi.fn(() => (12 * 60 * 60 + 30 * 60 + 45) * 1000), // 12:30:45
  formatCountdown: vi.fn((ms: number) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }),
}));

// Mock gameConfig - default to countdown enabled
vi.mock('../../../game.config', () => ({
  gameConfig: {
    features: {
      countdown: true,
    },
  },
}));

import { CountdownTimer } from '../CountdownTimer';
import { gameConfig } from '../../../game.config';

describe('CountdownTimer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Reset countdown feature to true before each test
    (gameConfig.features as { countdown: boolean }).countdown = true;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders countdown display with timer role', () => {
    render(<CountdownTimer />);

    expect(screen.getByRole('timer')).toBeInTheDocument();
  });

  it('shows "Next puzzle in" label', () => {
    render(<CountdownTimer />);

    expect(screen.getByText('Next puzzle in')).toBeInTheDocument();
  });

  it('displays formatted time in HH:MM:SS format', () => {
    render(<CountdownTimer />);

    expect(screen.getByText('12:30:45')).toBeInTheDocument();
  });

  it('has correct aria-label with time', () => {
    render(<CountdownTimer />);

    const timer = screen.getByRole('timer');
    expect(timer).toHaveAttribute('aria-label', 'Next puzzle in 12:30:45');
  });

  it('returns null when features.countdown is false', () => {
    (gameConfig.features as { countdown: boolean }).countdown = false;

    const { container } = render(<CountdownTimer />);

    expect(container.innerHTML).toBe('');
  });
});
