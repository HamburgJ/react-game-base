import React from 'react';

const NumbrellaDemo: React.FC = () => {
  return (
    <div className="game-demo-frame">
      <iframe src="/react-game-base/demos/numbrella/index.html" title="Numbrella Demo" style={{ width: '100%', height: '800px', border: 'none' }} />
    </div>
  );
};

export default NumbrellaDemo;
