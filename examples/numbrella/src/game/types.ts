/**
 * 🎯 YOUR GAME TYPES
 * 
 * Define your game-specific types here.
 * Keep template types in src/template/types/ — they're managed by the framework.
 */

/** Example: State for your game board */
export interface GameBoardState {
  /** Current guesses or moves the player has made */
  guesses: string[];
  /** Whether the current puzzle is solved */
  solved: boolean;
  /** Player's score for this puzzle */
  score: number;
}

/** Example: A single move or guess */
export interface GameMove {
  /** The value of the guess/move */
  value: string;
  /** When the move was made */
  timestamp: number;
}
