import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToastContainer } from '../Toast';
import { ToastProvider, useToast } from '../../context/ToastContext';

const renderWithProvider = () => {
  return render(
    <ToastProvider>
      <ToastContainer />
    </ToastProvider>
  );
};

describe('ToastContainer', () => {
  it('renders nothing when no toasts', () => {
    const { container } = renderWithProvider();
    expect(container.innerHTML).toBe('');
  });

  it('renders toast messages with correct variant styling', async () => {
    const TestComponent = () => {
      const { addToast } = useToast();
      return <button onClick={() => addToast('Success!', 'success', 0)}>Add</button>;
    };

    render(
      <ToastProvider>
        <TestComponent />
        <ToastContainer />
      </ToastProvider>
    );

    const user = userEvent.setup();
    await user.click(screen.getByText('Add'));

    expect(screen.getByText('Success!')).toBeInTheDocument();
    const toastItem = screen.getByText('Success!').closest('.toast-item');
    expect(toastItem).toHaveClass('toast-success');
  });

  it('shows correct variant icons for success', async () => {
    const AddToastButton = () => {
      const { addToast } = useToast();
      return <button onClick={() => addToast('Great job!', 'success', 0)}>Add Success</button>;
    };

    render(
      <ToastProvider>
        <AddToastButton />
        <ToastContainer />
      </ToastProvider>
    );

    const user = userEvent.setup();
    await user.click(screen.getByText('Add Success'));

    expect(screen.getByText('✅')).toBeInTheDocument();
    expect(screen.getByText('Great job!')).toBeInTheDocument();
  });

  it('shows correct variant icons for error', async () => {
    const AddToastButton = () => {
      const { addToast } = useToast();
      return <button onClick={() => addToast('Something failed', 'error', 0)}>Add Error</button>;
    };

    render(
      <ToastProvider>
        <AddToastButton />
        <ToastContainer />
      </ToastProvider>
    );

    const user = userEvent.setup();
    await user.click(screen.getByText('Add Error'));

    expect(screen.getByText('❌')).toBeInTheDocument();
    expect(screen.getByText('Something failed')).toBeInTheDocument();
  });

  it('shows correct variant icons for info', async () => {
    const AddToastButton = () => {
      const { addToast } = useToast();
      return <button onClick={() => addToast('FYI', 'info', 0)}>Add Info</button>;
    };

    render(
      <ToastProvider>
        <AddToastButton />
        <ToastContainer />
      </ToastProvider>
    );

    const user = userEvent.setup();
    await user.click(screen.getByText('Add Info'));

    expect(screen.getByText('ℹ️')).toBeInTheDocument();
    expect(screen.getByText('FYI')).toBeInTheDocument();
  });

  it('click to dismiss toast calls removeToast', async () => {
    const AddToastButton = () => {
      const { addToast } = useToast();
      return <button onClick={() => addToast('Dismiss me', 'info', 0)}>Add</button>;
    };

    render(
      <ToastProvider>
        <AddToastButton />
        <ToastContainer />
      </ToastProvider>
    );

    const user = userEvent.setup();
    await user.click(screen.getByText('Add'));

    expect(screen.getByText('Dismiss me')).toBeInTheDocument();

    await user.click(screen.getByText('Dismiss me'));

    expect(screen.queryByText('Dismiss me')).not.toBeInTheDocument();
  });

  it('renders multiple toasts', async () => {
    const AddToastsButton = () => {
      const { addToast } = useToast();
      return (
        <button
          onClick={() => {
            addToast('First toast', 'success', 0);
            addToast('Second toast', 'error', 0);
            addToast('Third toast', 'info', 0);
          }}
        >
          Add All
        </button>
      );
    };

    render(
      <ToastProvider>
        <AddToastsButton />
        <ToastContainer />
      </ToastProvider>
    );

    const user = userEvent.setup();
    await user.click(screen.getByText('Add All'));

    expect(screen.getByText('First toast')).toBeInTheDocument();
    expect(screen.getByText('Second toast')).toBeInTheDocument();
    expect(screen.getByText('Third toast')).toBeInTheDocument();
  });

  it('has correct ARIA roles', async () => {
    const AddToastButton = () => {
      const { addToast } = useToast();
      return <button onClick={() => addToast('Accessible toast', 'info', 0)}>Add</button>;
    };

    render(
      <ToastProvider>
        <AddToastButton />
        <ToastContainer />
      </ToastProvider>
    );

    const user = userEvent.setup();
    await user.click(screen.getByText('Add'));

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
