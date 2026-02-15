import seedrandom from 'seedrandom';

export interface Color {
  r: number;
  g: number;
  b: number;
}

export const getTodaysColor = (seed: string): Color => {
  const rng = seedrandom(seed);
  return {
    r: Math.floor(rng() * 256),
    g: Math.floor(rng() * 256),
    b: Math.floor(rng() * 256),
  };
};

export const calculateSimilarity = (c1: Color, c2: Color): number => {
  const diffR = Math.abs(c1.r - c2.r);
  const diffG = Math.abs(c1.g - c2.g);
  const diffB = Math.abs(c1.b - c2.b);
  const totalDiff = diffR + diffG + diffB;
  const maxDiff = 255 * 3;
  
  return Math.max(0, 100 * (1 - totalDiff / maxDiff));
};

export const rgbToHex = (c: Color): string => {
  return `#${((1 << 24) + (c.r << 16) + (c.g << 8) + c.b).toString(16).slice(1)}`;
};
