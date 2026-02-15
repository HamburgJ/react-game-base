import seedrandom from 'seedrandom';

export interface NumPuzzle {
  target: number;
  numbers: number[];
}

export const getTodaysPuzzle = (seed: string): NumPuzzle => {
  const rng = seedrandom(seed);
  const target = Math.floor(rng() * 899) + 100;
  const pool = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 25, 50, 75, 100];
  const numbers: number[] = [];
  
  for (let i = 0; i < 6; i++) {
    const idx = Math.floor(rng() * pool.length);
    numbers.push(pool[idx]);
    pool.splice(idx, 1);
  }
  
  return { target, numbers };
};

export const evaluateExpression = (expression: string): number | null => {
  try {
    if (!/^[\d+\-*/()\s]+$/.test(expression)) return null;
    // eslint-disable-next-line no-eval
    return eval(expression); 
  } catch {
    return null;
  }
};
