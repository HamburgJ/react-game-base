import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useGameState } from '../template/context/GameStateContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { generateShareText, shareResults } from '../template/utils/shareUtils';
import { getTodaysSeed } from '../template/utils/gameUtils';
import { useToast } from '../template/context/ToastContext';
import { gameConfig } from '../game.config';
import { GameBoard } from '../game/GameBoard';
import { CountdownTimer } from '../template/components/CountdownTimer';

export const Play = () => {
  const { gameState, updateGameState } = useGameState();
  const { addToast } = useToast();
  const { todayCompleted, gamesPlayed, streak, maxStreak, winRate, wins } = gameState;

  const seed = getTodaysSeed();
  const puzzleNumber = Math.floor((seed % 1000000) / 100);

  const handleComplete = (won: boolean) => {
    const newGamesPlayed = gamesPlayed + 1;
    const newWins = won ? wins + 1 : wins;
    updateGameState({
      todayCompleted: true,
      gamesPlayed: newGamesPlayed,
      wins: newWins,
      winRate: newWins / newGamesPlayed,
      maxStreak: Math.max(maxStreak, streak),
    });
  };

  const handleScore = (score: number) => {
    updateGameState({ score });
  };

  const handleShare = async () => {
    const shareText = generateShareText({
      title: gameConfig.name,
      dayNumber: puzzleNumber,
      streak,
      stats: {
        gamesPlayed,
        winRate,
        currentStreak: streak,
        maxStreak,
      },
    });

    try {
      await shareResults(shareText);
      addToast('Copied to clipboard! 📋', 'success');
    } catch {
      addToast("Couldn't copy — try again", 'error');
    }
  };

  return (
    <Container fluid className="py-3">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Card className="game-container text-center">
            <Card.Body>
              <div className="stats-display mb-4">
                <span>Daily Puzzle #{puzzleNumber}</span>
              </div>

              {todayCompleted ? (
                <div className="completed-state" role="status">
                  <h4 className="mb-4">Daily puzzle completed!</h4>
                  
                  {gameConfig.features.statsGrid && (
                    <div className="stats-grid mb-4" role="group" aria-label="Game statistics">
                      <div className="stat-item">
                        <div className="stat-value" aria-label={`${gamesPlayed} games played`}>{gamesPlayed}</div>
                        <div className="stat-label">Played</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value" aria-label={`${Math.round(winRate * 100)} percent win rate`}>{Math.round(winRate * 100)}%</div>
                        <div className="stat-label">Win Rate</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value" aria-label={`${streak} day streak`}>{streak}</div>
                        <div className="stat-label">Streak</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value" aria-label={`${maxStreak} best streak`}>{maxStreak}</div>
                        <div className="stat-label">Best</div>
                      </div>
                    </div>
                  )}

                  {gameConfig.features.sharing && (
                    <Button 
                      variant="primary" 
                      className="btn-game"
                      onClick={handleShare}
                      aria-label="Share your game result"
                    >
                      <FontAwesomeIcon icon={faShare} className="me-2" />
                      Share Result
                    </Button>
                  )}

                  <CountdownTimer />
                </div>
              ) : (
                <GameBoard
                  puzzleNumber={puzzleNumber}
                  seed={seed}
                  onComplete={handleComplete}
                  onScore={handleScore}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}; 