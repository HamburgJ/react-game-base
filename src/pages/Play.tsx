import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useGameState } from '../context/GameStateContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { generateShareText, shareResults } from '../utils/shareUtils';
import { getTodaysSeed } from '../utils/gameUtils';

export const Play = () => {
  const { gameState, updateGameState } = useGameState();
  const { todayCompleted, gamesPlayed, streak, maxStreak, winRate, wins } = gameState;

  // Get today's puzzle number
  const puzzleNumber = Math.floor((getTodaysSeed() % 1000000) / 100);

  const handleComplete = () => {
    const newGamesPlayed = gamesPlayed + 1;
    const newWins = wins + 1;
    updateGameState({
      todayCompleted: true,
      gamesPlayed: newGamesPlayed,
      wins: newWins,
      winRate: newWins / newGamesPlayed,
      maxStreak: Math.max(maxStreak, streak)
    });
  };

  const handleShare = async () => {
    const shareText = generateShareText({
      title: 'Game Title',
      dayNumber: puzzleNumber,
      streak,
      stats: {
        gamesPlayed,
        winRate,
        currentStreak: streak,
        maxStreak,
      }
    });

    await shareResults(shareText);
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
                <div className="completed-state">
                  <h4 className="mb-4">Daily puzzle completed!</h4>
                  
                  <div className="stats-grid mb-4">
                    <div className="stat-item">
                      <div className="stat-value">{gamesPlayed}</div>
                      <div className="stat-label">Played</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">{Math.round(winRate * 100)}%</div>
                      <div className="stat-label">Win Rate</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">{streak}</div>
                      <div className="stat-label">Streak</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">{maxStreak}</div>
                      <div className="stat-label">Best</div>
                    </div>
                  </div>

                  <Button 
                    variant="primary" 
                    className="btn-game"
                    onClick={handleShare}
                  >
                    <FontAwesomeIcon icon={faShare} className="me-2" />
                    Share Result
                  </Button>
                </div>
              ) : (
                <div className="game-content">
                  {/* TODO: Replace with your actual game content */}
                  <p className="mb-4">This is a placeholder for your game content.</p>
                  <Button
                    variant="primary"
                    size="lg"
                    className="btn-game"
                    onClick={handleComplete}
                  >
                    Complete Puzzle
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}; 