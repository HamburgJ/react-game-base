import React from 'react';

const ChromaticDemo: React.FC = () => {
  return (
    <div className="game-demo-frame">
      <iframe src="/react-game-base/demos/chromatic/index.html" title="Chromatic Demo" style={{ width: '100%', height: '800px', border: 'none' }} />
    </div>
  );
};

export default ChromaticDemo;
