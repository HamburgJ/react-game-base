import React from 'react';

const WorduelDemo: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Themed header bar */}
      <div style={{
        background: '#2d6a4f',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '3px solid #1b4332'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '1.5rem' }}>📝</span>
          <div>
            <h3 style={{ 
              margin: 0, 
              color: 'white', 
              fontFamily: '"Courier New", monospace',
              fontSize: '1.25rem',
              letterSpacing: '0.1em'
            }}>WORDUEL</h3>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontFamily: 'monospace' }}>
              DAILY WORD PUZZLE
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['W', 'O', 'R', 'D', 'S'].map((letter, i) => (
            <span key={i} style={{
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: i < 3 ? '#52b788' : 'rgba(255,255,255,0.2)',
              border: '2px solid rgba(255,255,255,0.3)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.75rem',
              fontFamily: 'monospace'
            }}>{letter}</span>
          ))}
        </div>
      </div>
      
      <iframe 
        src="/react-game-base/demos/worduel/index.html" 
        title="Worduel Demo" 
        style={{ width: '100%', height: '700px', border: 'none', display: 'block' }} 
      />
    </div>
  );
};

export default WorduelDemo;
