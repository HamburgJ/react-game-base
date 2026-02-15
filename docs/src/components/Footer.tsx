import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      borderTop: 'var(--border-width) solid var(--fg-ink)',
      backgroundColor: 'var(--bg-canvas)',
      padding: '4rem 0',
      marginTop: '6rem',
      textAlign: 'center'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <h4 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 900, 
          color: 'var(--fg-ink)',
          textTransform: 'uppercase',
          margin: 0
        }}>
          React Game Base
        </h4>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Badge>Open Source</Badge>
          <Badge>MIT License</Badge>
          <Badge invert>React 19</Badge>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--fg-dim)', maxWidth: '400px', lineHeight: 1.6, fontWeight: 500 }}>
          A free template for building your own daily puzzle games. 
          Built with Vite + TypeScript. Deployed via GitHub Actions.
        </p>
        
        <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--fg-dim)', fontWeight: 700, textTransform: 'uppercase' }}>
          &copy; {new Date().getFullYear()} React Game Base
        </div>
      </div>
    </footer>
  );
};

const Badge: React.FC<{ children: React.ReactNode; invert?: boolean }> = ({ children, invert }) => (
  <span style={{ 
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.75rem',
    background: invert ? 'var(--fg-ink)' : 'white',
    color: invert ? 'white' : 'var(--fg-ink)',
    borderRadius: 'var(--border-radius-sm)',
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    border: '2px solid var(--fg-ink)',
    boxShadow: '2px 2px 0 var(--fg-ink)',
    letterSpacing: '0.05em'
  }}>
    {children}
  </span>
);

export default Footer;
