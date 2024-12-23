import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useGameState } from '../hooks/useGameState';
import { generateShareText, shareResults } from '../utils/shareUtils';
import { getTodaysSeed } from '../utils/gameUtils';

interface StatsModalProps {
  show: boolean;
  onHide: () => void;
}

export const StatsModal = ({ show, onHide }: StatsModalProps) => {
  const { gameState } = useGameState();
  const { streak, gamesPlayed, winRate, maxStreak } = gameState;

  const handleShare = async () => {
    const shareText = generateShareText({
      title: 'Game Title',
      dayNumber: Math.floor((getTodaysSeed() % 1000000) / 100),
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
    <Modal show={show} onHide={onHide} centered className="modal-game">
      <Modal.Header closeButton>
        <Modal.Title>Great job!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
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
          className="w-100 mb-3"
          onClick={handleShare}
        >
          <FontAwesomeIcon icon={faShare} className="me-2" />
          Share Result
        </Button>
      </Modal.Body>
    </Modal>
  );
}; 