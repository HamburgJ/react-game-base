import { Modal, Button } from 'react-bootstrap';

interface InfoModalProps {
  show: boolean;
  onHide: () => void;
}

export const InfoModal = ({ show, onHide }: InfoModalProps) => {
  return (
    <Modal show={show} onHide={onHide} centered className="modal-game">
      <Modal.Header closeButton>
        <Modal.Title>How to Play</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* TODO: Replace with your game's instructions */}
        <p>
          Explain the game rules and mechanics here. Make it clear and
          concise so players can quickly understand how to play your game.
        </p>
        
        <h5 className="mt-4">Features</h5>
        <ul className="list-unstyled">
          <li>• Feature 1 description</li>
          <li>• Feature 2 description</li>
          <li>• Feature 3 description</li>
        </ul>

        <hr />
        
        <small className="text-muted">
          Created with React Game Base Template
          <br />
          © {new Date().getFullYear()} Your Name
        </small>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}; 