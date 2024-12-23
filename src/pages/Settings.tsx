import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useGameState } from '../hooks/useGameState';
import { useTheme } from '../hooks/useTheme';

export const Settings = () => {
  const { gameState, updateSettings, resetGameState } = useGameState();
  const { theme, toggleTheme } = useTheme();
  const { soundEnabled, musicEnabled } = gameState.settings;

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all game progress?')) {
      resetGameState();
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-4">Settings</Card.Title>
              
              <Form>
                {/* Built-in theme setting - modify styling in global.css */}
                <Form.Group className="mb-3">
                  <Form.Label>Theme</Form.Label>
                  <Form.Check 
                    type="switch"
                    id="theme-switch"
                    label={`${theme.charAt(0).toUpperCase() + theme.slice(1)} Mode`}
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                  />
                </Form.Group>

                {/* Built-in sound settings - implement sound handling in your game */}
                <Form.Group className="mb-3">
                  <Form.Label>Sound</Form.Label>
                  <Form.Check 
                    type="switch"
                    id="sound-switch"
                    label="Sound Effects"
                    checked={soundEnabled}
                    onChange={() => updateSettings({ soundEnabled: !soundEnabled })}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check 
                    type="switch"
                    id="music-switch"
                    label="Background Music"
                    checked={musicEnabled}
                    onChange={() => updateSettings({ musicEnabled: !musicEnabled })}
                  />
                </Form.Group>

                {/* TODO: Add your game-specific settings here */}

                <hr />

                <div className="d-grid gap-2">
                  <Button 
                    variant="danger"
                    onClick={handleReset}
                  >
                    Reset Game Progress
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}; 