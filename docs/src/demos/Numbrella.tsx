import React from 'react';

const NumbrellaDemo: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Themed header bar */}
      <div style={{
        background: '#5a189a',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '3px solid #3c096c'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '1.5rem' }}>🔢</span>
          <div>
            <h3 style={{ 
              margin: 0, 
              color: 'white', 
              fontFamily: '"Courier New", monospace',
              fontSize: '1.25rem',
              letterSpacing: '0.1em'
            }}>NUMBRELLA</h3>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontFamily: 'monospace' }}>
              DAILY MATH PUZZLE
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {['+', '−', '×', '÷'].map((op, i) => (
            <span key={i} style={{
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '50%',
              color: '#e0aaff',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              fontFamily: 'monospace'
            }}>{op}</span>
          ))}
          <span style={{
            marginLeft: '4px',
            padding: '4px 10px',
            background: '#e0aaff',
            color: '#3c096c',
            fontWeight: 'bold',
            fontSize: '0.75rem',
            fontFamily: 'monospace',
            borderRadius: '4px'
          }}>=&nbsp;?</span>
        </div>
      </div>
      
      <iframe 
        src="/react-game-base/demos/numbrella/index.html" 
        title="Numbrella Demo" 
        style={{ width: '100%', height: '700px', border: 'none', display: 'block' }} 
      />
    </div>
  );
};

export default NumbrellaDemo;
