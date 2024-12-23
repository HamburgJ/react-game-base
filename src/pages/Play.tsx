import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useGameState } from '../hooks/useGameState';
import { StatsModal } from '../components/StatsModal';
import { useState, useEffect } from 'react';
import { getTodaysSeed } from '../utils/gameUtils';

export const Play = () => {
  const { gameState, updateGameState } = useGameState();
  const { todayCompleted, gamesPlayed, streak } = gameState;
  const [showStats, setShowStats] = useState(false);

  // Get today's puzzle number
  const puzzleNumber = Math.floor((getTodaysSeed() % 1000000) / 100);

  // Show stats modal if already completed
  useEffect(() => {
    if (todayCompleted) {
      setShowStats(true);
    }
  }, [todayCompleted]);

  const handleComplete = () => {
    const newGamesPlayed = gamesPlayed + 1;
    updateGameState({
      todayCompleted: true,
      gamesPlayed: newGamesPlayed,
      winRate: (newGamesPlayed - 1) / newGamesPlayed, // Simple win rate calculation
      maxStreak: Math.max(gameState.maxStreak, streak)
    });
    setShowStats(true);
  };

  return (
    <Container fluid className="py-3">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Card className="game-container text-center">
            <Card.Body className="d-flex flex-column justify-content-center">
              <div className="stats-display mb-4 d-flex justify-content-between align-items-center">
                <span>Daily Puzzle #{puzzleNumber}</span>
                <span>{streak} Day Streak</span>
              </div>

              {/* TODO: Replace with your actual game content */}
              <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
                <p className="mb-4">This is a placeholder for your game content.</p>
                {!todayCompleted && (
                  <Button
                    variant="primary"
                    size="lg"
                    className="btn-game"
                    onClick={handleComplete}
                  >
                    Complete Puzzle
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <StatsModal show={showStats} onHide={() => setShowStats(false)} />
    </Container>
  );
}; 