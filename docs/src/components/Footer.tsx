import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      backgroundColor: 'var(--bg-canvas)',
      padding: '4rem 0',
      marginTop: '6rem',
      textAlign: 'center'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ 
          fontSize: '0.9rem', 
          fontWeight: 600, 
          color: 'var(--fg-ink)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          React Game Base
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Badge>Open Source</Badge>
          <Badge>MIT License</Badge>
          <Badge color="var(--accent-primary)">React 19</Badge>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--fg-dim)', maxWidth: '400px', lineHeight: 1.6 }}>
          A free template for building your own daily puzzle games. 
          Built with Vite + TypeScript. Deployed via GitHub Actions.
        </p>
        
        <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--fg-dim)' }}>
          &copy; {new Date().getFullYear()} React Game Base
        </div>
      </div>
    </footer>
  );
};

const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color }) => (
  <span style={{ 
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.75rem',
    background: color ? color : 'var(--bg-surface-hover)',
    color: color ? 'white' : 'var(--fg-dim)',
    borderRadius: '99px',
    fontSize: '0.75rem',
    fontWeight: 500,
    border: color ? 'none' : '1px solid var(--border-color)'
  }}>
    {children}
  </span>
);

export default Footer;
