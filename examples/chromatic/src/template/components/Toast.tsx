import { useToast, type ToastVariant } from '../context/ToastContext';

const variantIcons: Record<ToastVariant, string> = {
  success: '✅',
  error: '❌',
  info: 'ℹ️',
};

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`toast-item toast-${toast.variant}`}
          role="alert"
          onClick={() => removeToast(toast.id)}
        >
          <span className="toast-icon">{variantIcons[toast.variant]}</span>
          <span className="toast-message">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
