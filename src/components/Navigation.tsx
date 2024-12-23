import { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCog, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../hooks/useTheme';
import { SettingsModal } from './SettingsModal';
import { InfoModal } from './InfoModal';

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [showSettings, setShowSettings] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <Navbar className="px-3">
        <Navbar.Brand as={Link} to="/" className="game-title me-auto">Game Title</Navbar.Brand>
        <Nav className="nav-icons">
          <Button
            variant="link"
            onClick={toggleTheme}
            className="nav-link"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
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