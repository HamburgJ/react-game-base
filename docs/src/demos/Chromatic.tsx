import React from 'react';

const ChromaticDemo: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Themed header bar */}
      <div style={{
        background: 'linear-gradient(135deg, #ff4794 0%, #ff8c00 25%, #ffee00 50%, #00e0ff 75%, #7b42ff 100%)',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '3px solid #333'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '1.5rem' }}>🎨</span>
          <div>
            <h3 style={{ 
              margin: 0, 
              color: 'white', 
              fontFamily: '"Courier New", monospace',
              fontSize: '1.25rem',
              letterSpacing: '0.1em',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>CHROMATIC</h3>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', fontSize: '0.75rem', fontFamily: 'monospace', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              DAILY COLOR PUZZLE
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <ColorChip label="R" color="#ff3333" />
          <ColorChip label="G" color="#33cc33" />
          <ColorChip label="B" color="#3366ff" />
        </div>
      </div>
      
      <iframe 
        src="/react-game-base/demos/chromatic/index.html" 
        title="Chromatic Demo" 
        style={{ width: '100%', height: '700px', border: 'none', display: 'block' }} 
      />
    </div>
  );
};

const ColorChip: React.FC<{ label: string; color: string }> = ({ label, color }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2px'
  }}>
    <div style={{
      width: '28px',
      height: '28px',
      background: color,
      border: '2px solid rgba(0,0,0,0.3)',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '0.7rem',
      fontFamily: 'monospace',
      textShadow: '0 1px 2px rgba(0,0,0,0.4)'
    }}>{label}</div>
  </div>
);

export default ChromaticDemo;
