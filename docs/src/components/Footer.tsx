import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      borderTop: 'var(--border-width) solid var(--border-color)',
      backgroundColor: 'var(--bg-surface)',
      padding: 'var(--space-8) 0',
      marginTop: 'auto',
      textAlign: 'center'
    }}>
      <div className="container">
        <h4 style={{ 
          margin: '0 0 var(--space-4) 0', 
          color: 'var(--fg-ink)',
          textShadow: '2px 2px 0 var(--accent-quaternary)'
        }}>
          REACT GAME BASE
        </h4>
        
        <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'center', marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
           <span className="pixel-badge">OPEN SOURCE</span>
           <span className="pixel-badge" style={{ background: 'var(--accent-secondary)' }}>MIT LICENSE</span>
           <span className="pixel-badge" style={{ background: 'var(--accent-primary)', color: 'white' }}>REACT 19</span>
        </div>

        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-dim)', fontFamily: 'var(--font-display)' }}>
          Built with Vite + TypeScript. Deployed via GitHub Actions.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
