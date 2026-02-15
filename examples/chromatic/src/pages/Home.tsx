import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGameState } from '../template/context/GameStateContext';
import { getTodaysSeed } from '../template/utils/gameUtils';
import { gameConfig } from '../game.config';
import { CountdownTimer } from '../template/components/CountdownTimer';

export const Home = () => {
  const { gameState } = useGameState();
  const { lastPlayed, streak, todayCompleted } = gameState;

  // Get today's puzzle number
  const puzzleNumber = Math.floor((getTodaysSeed() % 1000000) / 100);

  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col md={8} lg={6}>
          <h1 className="game-title mb-4">{gameConfig.name}</h1>
          
          <div className="stats-display mb-4" role="status">
            {todayCompleted ? (
              <div>
                Come back tomorrow for the next puzzle!
                <br />
                <small className="text-muted">
                  {streak === 1 ? (
                    "You've started your streak!"
                  ) : (
                    `${streak} day streak! Keep it going!`
                  )}
                </small>
                <CountdownTimer />
              </div>
            ) : (
              <div>
                Daily Puzzle #{puzzleNumber} is ready!
                <br />
                <small className="text-muted">
                  {streak > 0 && `${streak} day streak - don't break it!`}
                </small>
              </div>
            )}
          </div>

          <Card className="home-card">
            <Card.Body>
              <p className="mb-4">
                A new puzzle every day. Complete it to maintain your streak!
              </p>

              {lastPlayed && (
                <p className="text-muted small mb-4">
                  Last played: {new Date(lastPlayed).toLocaleDateString()}
                </p>
              )}

              <div className="d-grid">
                <Link to="/play" className="d-grid">
                  <Button
                    variant="primary"
                    size="lg"
                    className="btn-game"
                    disabled={todayCompleted}
                  >
                    {todayCompleted ? 'Come Back Tomorrow' : 'Play Today\'s Puzzle'}
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}; 