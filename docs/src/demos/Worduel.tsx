import React from 'react';

const WorduelDemo: React.FC = () => {
  return (
    <div className="game-demo-frame">
      <iframe src="/react-game-base/demos/worduel/index.html" title="Worduel Demo" style={{ width: '100%', height: '800px', border: 'none' }} />
    </div>
  );
};

export default WorduelDemo;
