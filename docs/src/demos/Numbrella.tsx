import React, { useEffect, useRef } from 'react';

const NumbrellaDemo: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.focus();
    }
  }, []);

  return (
    <div className="container" style={{ maxWidth: '600px', padding: 'var(--space-4) 0' }}>
      <div className="card-base" style={{ overflow: 'hidden' }}>
        {/* Simple Studio Header */}
        <div style={{ 
          background: 'var(--bg-surface)', 
          padding: 'var(--space-3)', 
          borderBottom: 'var(--border-width) solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{ fontSize: '1.25rem', margin: 0 }}>NUMBRELLA</h2>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--fg-dim)' }}>
            DAILY MATH GAME
          </div>
        </div>
        
        {/* Game Container */}
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          height: '700px',
          background: '#f8f9fa'
        }}>
          <iframe 
            ref={iframeRef}
            src={import.meta.env.BASE_URL + 'games/numbrella/index.html'} 
            title="Numbrella Game Demo"
            style={{ 
              width: '100%', 
              height: '100%', 
              border: 'none',
              display: 'block'
            }}
          />
        </div>
      </div>
      
      <div style={{ 
        textAlign: 'center', 
        marginTop: 'var(--space-4)',
        fontSize: '0.875rem',
        color: 'var(--fg-dim)'
      }}>
        <a href={import.meta.env.BASE_URL + 'games/numbrella/index.html'} target="_blank" style={{ color: 'var(--accent-primary)' }}>Open in new tab ↗</a>
      </div>
    </div>
  );
};

export default NumbrellaDemo;
