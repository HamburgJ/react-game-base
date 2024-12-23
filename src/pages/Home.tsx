import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGameState } from '../hooks/useGameState';

export const Home = () => {
  const { gameState } = useGameState();
  const { lastPlayed } = gameState;

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="text-center">
            <Card.Body>
              {/* TODO: Replace with your game title */}
              <Card.Title className="mb-4">Welcome to Game Title</Card.Title>
              {/* TODO: Replace with your game's introduction */}
              <Card.Text>
                Your game introduction goes here. Explain what makes your game special
                and how to play it.
              </Card.Text>
              {lastPlayed && (
                <Card.Text className="text-muted mb-3">
                  Last played: {new Date(lastPlayed).toLocaleDateString()}
                </Card.Text>
              )}
              <Link to="/play" className="d-grid">
                {/* TODO: Customize button text if needed */}
                <Button
                  variant="primary"
                  size="lg"
                  className="mb-3"
                >
                  Start Game
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}; 