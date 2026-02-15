import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} React Game Base. Open Source MIT License.</p>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="https://github.com/joshhamburger/react-game-base" style={{ color: 'var(--text-muted)' }}>GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
