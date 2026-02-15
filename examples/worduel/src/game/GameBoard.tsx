import React, { useState, useEffect, useCallback } from 'react';
import { getTodaysWord, checkGuess, LetterState } from './gameLogic';
import '../template/styles/global.css'; 

interface GameBoardProps {
  puzzleNumber: number;
  seed: string | number;
  onComplete: (success: boolean) => void;
  onScore: (score: number) => void;
}

const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

export const GameBoard: React.FC<GameBoardProps> = ({ seed, onComplete }) => {
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const word = getTodaysWord(String(seed));
    setTargetWord(word);
    setGuesses([]);
    setCurrentGuess('');
    setGameOver(false);
  }, [seed]);

  const submitGuess = useCallback(() => {
    if (currentGuess.length !== WORD_LENGTH || gameOver) return;
    
    // In a real app, validate word exists in dictionary here
    
    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess('');

    if (currentGuess === targetWord) {
      setGameOver(true);
      onComplete(true);
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameOver(true);
      onComplete(false);
    }
  }, [currentGuess, guesses, gameOver, targetWord, onComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;

      const key = e.key.toUpperCase();
      
      if (key === 'ENTER') {
        submitGuess();
      } else if (key === 'BACKSPACE') {
        setCurrentGuess(prev => prev.slice(0, -1));
      } else if (/^[A-Z]$/.test(key) && currentGuess.length < WORD_LENGTH) {
        setCurrentGuess(prev => prev + key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, gameOver, submitGuess]);

  // Use a simple grid render
  const empties = Array(MAX_GUESSES - 1 - guesses.length).fill(null);

  if (!targetWord) return <div>Loading...</div>;

  return (
    <div className="worduel-board">
      <div style={{ display: 'grid', gap: '5px', maxWidth: '300px', margin: '0 auto' }}>
        {guesses.map((guess, i) => (
          <Row key={i} word={guess} states={checkGuess(guess, targetWord)} />
        ))}
        {!gameOver && guesses.length < MAX_GUESSES && (
          <Row word={currentGuess} current />
        )}
        {empties.map((_, i) => (
          <Row key={`empty-${i}`} word="" />
        ))}
      </div>
      
      {gameOver && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h3>{guesses[guesses.length - 1] === targetWord ? 'You Won!' : `Game Over: ${targetWord}`}</h3>
        </div>
      )}
    </div>
  );
};

const Row: React.FC<{ word: string; states?: LetterState[]; current?: boolean }> = ({ word, states, current }) => {
  const letters = word.split('');
  const displayLetters = [...letters, ...Array(WORD_LENGTH - letters.length).fill('')];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px' }}>
      {displayLetters.map((letter, i) => {
        const state = states ? states[i] : 'empty';
        const bg = state === 'correct' ? '#538D4E' : 
                   state === 'present' ? '#B59F3B' : 
                   state === 'absent' ? '#3A3A3C' : 'transparent';
        const border = current && letter ? '2px solid #888' : '2px solid #333';
        const color = state !== 'empty' ? 'white' : 'inherit';

        return (
          <div key={i} style={{
            width: '100%',
            aspectRatio: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            backgroundColor: bg,
            border: state !== 'empty' ? 'none' : border,
            color
          }}>
            {letter}
          </div>
        );
      })}
    </div>
  );
};
