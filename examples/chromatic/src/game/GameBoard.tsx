import React, { useState, useEffect } from 'react';
import { getTodaysColor, calculateSimilarity, Color, rgbToHex } from './gameLogic';
import '../template/styles/global.css'; 

interface GameBoardProps {
  puzzleNumber: number;
  seed: string | number;
  onComplete: (success: boolean) => void;
  onScore: (score: number) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({ seed, onComplete }) => {
  const [targetColor, setTargetColor] = useState<Color | null>(null);
  const [userColor, setUserColor] = useState<Color>({ r: 128, g: 128, b: 128 });
  const [similarity, setSimilarity] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTargetColor(getTodaysColor(String(seed)));
    setUserColor({ r: 128, g: 128, b: 128 });
    setSimilarity(null);
    setSubmitted(false);
  }, [seed]);

  const handleSliderChange = (channel: 'r' | 'g' | 'b', value: number) => {
    if (submitted) return;
    setUserColor(prev => ({ ...prev, [channel]: value }));
  };

  const handleSubmit = () => {
    if (!targetColor) return;
    
    const score = calculateSimilarity(userColor, targetColor);
    setSimilarity(score);
    setSubmitted(true);
    onComplete(true); 
  };

  if (!targetColor) return <div>Loading...</div>;

  return (
    <div className="chromatic-board" style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', justifyContent: 'center' }}>
        <div style={{ width: '100px', height: '100px', backgroundColor: rgbToHex(targetColor), borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
          <span style={{ display: 'block', paddingTop: '110%', fontSize: '0.8rem' }}>Target</span>
        </div>
        <div style={{ width: '100px', height: '100px', backgroundColor: rgbToHex(userColor), borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
          <span style={{ display: 'block', paddingTop: '110%', fontSize: '0.8rem' }}>Your Mix</span>
        </div>
      </div>
      <div className="sliders" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <label>
          Red
          <input 
            type="range" 
            min="0" 
            max="255" 
            value={userColor.r} 
            onChange={(e) => handleSliderChange('r', parseInt(e.target.value))} 
            style={{ width: '100%', accentColor: 'red' }}
            disabled={submitted}
          />
        </label>
        <label>
          Green
          <input 
            type="range" 
            min="0" 
            max="255" 
            value={userColor.g} 
            onChange={(e) => handleSliderChange('g', parseInt(e.target.value))} 
            style={{ width: '100%', accentColor: 'green' }}
            disabled={submitted}
          />
        </label>
        <label>
          Blue
          <input 
            type="range" 
            min="0" 
            max="255" 
            value={userColor.b} 
            onChange={(e) => handleSliderChange('b', parseInt(e.target.value))} 
            style={{ width: '100%', accentColor: 'blue' }}
            disabled={submitted}
          />
        </label>
      </div>
      <button onClick={handleSubmit} className="btn-primary" style={{ marginTop: '30px', padding: '10px 30px' }} disabled={submitted}>
        Match!
      </button>
      {similarity !== null && (
        <div style={{ marginTop: '20px', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Accuracy: {similarity.toFixed(1)}%
        </div>
      )}
    </div>
  );
};
