import { Container, Row, Col, Card } from 'react-bootstrap';
import { useGameState } from '../hooks/useGameState';

export const Play = () => {
  const { gameState } = useGameState();
  const { currentLevel, score, streak } = gameState;

  return (
    <Container fluid className="py-3">
      <Row className="mb-3">
        <Col>
          {/* TODO: Customize game stats display. Add/remove stats as needed */}
          <div className="d-flex justify-content-between align-items-center">
            <div>Level: {currentLevel}</div>
            <div>Score: {score}</div>
            <div>Streak: {streak}</div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Card className="game-container">
            <Card.Body>
              {/* TODO: REQUIRED - Replace this with your game implementation
                  Suggested steps:
                  1. Create a new component for your game (e.g., GameBoard.tsx)
                  2. Import and use it here
                  3. Add game-specific state management
                  4. Add game controls and event handlers
                  5. Add game rendering logic
              */}
              <div className="text-center p-5">
                <h2>Game Area</h2>
                <p>Replace this with your game implementation</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}; 