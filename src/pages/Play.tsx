import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useGameState } from '../hooks/useGameState';

export const Play = () => {
  const { gameState, updateGameState } = useGameState();
  const { currentLevel } = gameState;

  const handleNextLevel = () => {
    updateGameState({
      currentLevel: currentLevel + 1,
      streak: gameState.streak + 1,
    });
  };

  return (
    <Container fluid className="py-3">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Card className="game-container text-center">
            <Card.Body className="d-flex flex-column justify-content-center">
              <div className="stats-display mb-4">
                Level {currentLevel}
              </div>
              
              {/* TODO: REQUIRED - Replace this with your game implementation */}
              <div className="mb-4">
                <h2>Sample Game</h2>
                <p>Click the button to advance to the next level</p>
              </div>

              <div className="d-grid gap-2 col-md-6 mx-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="btn-game"
                  onClick={handleNextLevel}
                >
                  Complete Level
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}; 