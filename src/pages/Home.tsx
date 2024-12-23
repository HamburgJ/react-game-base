import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGameState } from '../hooks/useGameState';

export const Home = () => {
  const { gameState } = useGameState();
  const { lastPlayed, streak } = gameState;

  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col md={8} lg={6}>
          <h1 className="game-title mb-4">Game Title</h1>
          
          {streak > 0 && (
            <div className="stats-display mb-4">
              Current Streak: {streak}
            </div>
          )}

          <Card className="game-container">
            <Card.Body>
              {/* TODO: Replace with your game's introduction */}
              <p className="mb-4">
                Your game introduction goes here. Explain what makes your game special
                and how to play it.
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
                  >
                    Start Game
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