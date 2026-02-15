import { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCog, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../hooks/useTheme';
import { SettingsModal } from './SettingsModal';
import { InfoModal } from './InfoModal';
import { gameConfig } from '../../game.config';

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [showSettings, setShowSettings] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const handleToggleTheme = () => {
    setIsRotating(true);
    toggleTheme();
    setTimeout(() => setIsRotating(false), 300);
  };

  return (
    <>
      <Navbar className="px-3">
        <Navbar.Brand as={Link} to="/" className="game-title me-auto" aria-label={gameConfig.name + ' - Home'}>{gameConfig.name}</Navbar.Brand>
        <Nav className="nav-icons">
          <Button
            variant="link"
            onClick={handleToggleTheme}
            className="nav-link"
            aria-label="Toggle theme"
          >
            <span className={`theme-toggle-icon${isRotating ? ' rotating' : ''}`}>
              <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
            </span>
          </Button>
          <Button
            variant="link"
            className="nav-link"
            onClick={() => setShowInfo(true)}
            aria-label="Information"
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </Button>
          <Button
            variant="link"
            className="nav-link"
            onClick={() => setShowSettings(true)}
            aria-label="Settings"
          >
            <FontAwesomeIcon icon={faCog} />
          </Button>
        </Nav>
      </Navbar>

      <SettingsModal show={showSettings} onHide={() => setShowSettings(false)} />
      <InfoModal show={showInfo} onHide={() => setShowInfo(false)} />
    </>
  );
}; 