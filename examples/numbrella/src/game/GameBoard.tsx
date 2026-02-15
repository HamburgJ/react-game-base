import React, { useState, useEffect } from 'react';
import { getTodaysPuzzle, evaluateExpression, NumPuzzle } from './gameLogic';
import '../template/styles/global.css'; 

interface GameBoardProps {
  puzzleNumber: number;
  seed: string | number;
  onComplete: (success: boolean) => void;
  onScore: (score: number) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({ seed, onComplete }) => {
  const [puzzle, setPuzzle] = useState<NumPuzzle | null>(null);
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    setPuzzle(getTodaysPuzzle(String(seed)));
    setExpression('');
    setResult(null);
    setIsSolved(false);
  }, [seed]);

  const handleInput = (val: string) => {
    if (isSolved) return;
    setExpression(prev => prev + val);
  };

  const handleBackspace = () => {
    if (isSolved) return;
    setExpression(prev => prev.slice(0, -1));
  };
  
  const handleClear = () => {
    if (isSolved) return;
    setExpression('');
    setResult(null);
  };

  const checkSolution = () => {
    if (!puzzle) return;
    const res = evaluateExpression(expression);
    setResult(res);
    
    if (res === puzzle.target) {
      setIsSolved(true);
      onComplete(true);
    }
  };

  if (!puzzle) return <div>Loading...</div>;

  return (
    <div className="numbrella-board" style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <div className="target-display" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#8E44AD' }}>
        {puzzle.target}
      </div>
      <div className="expression-display" style={{ 
        minHeight: '60px', 
        border: '2px solid #ccc', 
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        marginBottom: '20px',
        maxWidth: '100%'
      }}>
        {expression || 'Your expression'}
      </div>
      {result !== null && (
        <div style={{ marginBottom: '10px', color: result === puzzle.target ? 'green' : 'red' }}>
          Equals: {result}
        </div>
      )}
      <div className="controls" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {puzzle.numbers.map((num, i) => (
          <button key={i} className="btn-game" onClick={() => handleInput(num.toString())} disabled={isSolved}>
            {num}
          </button>
        ))}
        {['+', '-', '*', '/', '(', ')'].map(op => (
          <button key={op} className="btn-game" onClick={() => handleInput(op)} disabled={isSolved} style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
            {op}
          </button>
        ))}
        <button onClick={handleBackspace} className="btn-game" style={{ backgroundColor: '#ffcccb', color: '#333' }}>⌫</button>
        <button onClick={handleClear} className="btn-game" style={{ backgroundColor: '#ffcccb', color: '#333' }}>C</button>
        <button onClick={checkSolution} className="btn-game" style={{ gridColumn: 'span 2', backgroundColor: '#8E44AD', color: 'white' }} disabled={isSolved}>
          =
        </button>
      </div>
    </div>
  );
};
