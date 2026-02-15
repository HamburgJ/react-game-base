import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorBoundary } from '../ErrorBoundary';

// Component that throws an error on render
const ThrowingComponent = ({ message = 'Test error' }: { message?: string }) => {
  throw new Error(message);
};

// Prevent jsdom from logging the uncaught error to the console during tests
const suppressErrorBoundaryWarnings = () => {
  return vi.spyOn(console, 'error').mockImplementation(() => {});
};

describe('ErrorBoundary', () => {
  let reloadMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    reloadMock = vi.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
      writable: true,
    });
  });

  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <div>Hello World</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('shows error UI when child throws', () => {
    const spy = suppressErrorBoundaryWarnings();

    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(/Don't worry/)).toBeInTheDocument();

    spy.mockRestore();
  });

  it('displays error message in details', () => {
    const spy = suppressErrorBoundaryWarnings();

    render(
      <ErrorBoundary>
        <ThrowingComponent message="Specific error occurred" />
      </ErrorBoundary>
    );

    expect(screen.getByText('Error details')).toBeInTheDocument();
    expect(screen.getByText('Specific error occurred')).toBeInTheDocument();

    spy.mockRestore();
  });

  it('has "Reload Page" and "Reset Game" buttons', () => {
    const spy = suppressErrorBoundaryWarnings();

    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    );

    expect(screen.getByRole('button', { name: 'Reload Page' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset Game' })).toBeInTheDocument();

    spy.mockRestore();
  });

  it('Reset Game button calls localStorage.removeItem and window.location.reload', async () => {
    const spy = suppressErrorBoundaryWarnings();
    localStorage.setItem('gameState', JSON.stringify({ score: 100 }));

    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'Reset Game' }));

    expect(localStorage.getItem('gameState')).toBeNull();
    expect(reloadMock).toHaveBeenCalled();

    spy.mockRestore();
  });

  it('Reload Page button calls window.location.reload', async () => {
    const spy = suppressErrorBoundaryWarnings();

    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'Reload Page' }));

    expect(reloadMock).toHaveBeenCalled();

    spy.mockRestore();
  });

  it('has role="alert" on error UI', () => {
    const spy = suppressErrorBoundaryWarnings();

    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();

    spy.mockRestore();
  });

  it('logs error to console', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowingComponent message="Logged error" />
      </ErrorBoundary>
    );

    expect(spy).toHaveBeenCalledWith(
      'Game error:',
      expect.objectContaining({ message: 'Logged error' }),
      expect.objectContaining({ componentStack: expect.any(String) })
    );

    spy.mockRestore();
  });
});
