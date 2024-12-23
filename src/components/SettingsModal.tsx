import { Modal, Form, Button } from 'react-bootstrap';
import { useGameState } from '../hooks/useGameState';
import { useTheme } from '../hooks/useTheme';

interface SettingsModalProps {
  show: boolean;
  onHide: () => void;
}

export const SettingsModal = ({ show, onHide }: SettingsModalProps) => {
  const { resetGameState } = useGameState();
  const { theme, toggleTheme } = useTheme();

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all game progress?')) {
      resetGameState();
      onHide();
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered className="modal-game">
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Theme</Form.Label>
            <Form.Check 
              type="switch"
              id="theme-switch"
              label={`${theme.charAt(0).toUpperCase() + theme.slice(1)} Mode`}
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
          </Form.Group>

          {/* TODO: Add your game-specific settings here */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant="danger"
          onClick={handleReset}
        >
          Reset Progress
        </Button>
        <Button variant="primary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}; 