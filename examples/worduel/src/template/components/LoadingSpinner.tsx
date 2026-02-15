export const LoadingSpinner = () => {
  return (
    <div className="loading-container" role="status" aria-label="Loading game">
      <div className="loading-spinner" aria-hidden="true" />
      <p className="loading-text">Loading...</p>
    </div>
  );
};
