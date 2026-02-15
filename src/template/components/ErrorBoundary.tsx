import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Game error:', error, errorInfo);
  }

  handleReset = () => {
    localStorage.removeItem('gameState');
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <div className="error-boundary-content">
            <div className="error-icon">😵</div>
            <h2>Something went wrong</h2>
            <p className="error-message">
              Don't worry — your progress is saved. Try reloading the page.
            </p>
            {this.state.error && (
              <details className="error-details">
                <summary>Error details</summary>
                <pre>{this.state.error.message}</pre>
              </details>
            )}
            <div className="error-actions">
              <button
                className="btn btn-primary btn-game"
                onClick={this.handleReload}
              >
                Reload Page
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={this.handleReset}
              >
                Reset Game
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
