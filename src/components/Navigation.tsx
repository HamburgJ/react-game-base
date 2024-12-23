import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCog, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../hooks/useTheme';

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar bg={theme} variant={theme} expand="lg" className="px-3">
      <Navbar.Brand as={Link} to="/">Game Title</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Button
            variant="link"
            onClick={toggleTheme}
            className="nav-link"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </Button>
          <Nav.Link as={Link} to="/info" aria-label="Information">
            <FontAwesomeIcon icon={faInfoCircle} />
          </Nav.Link>
          <Nav.Link as={Link} to="/settings" aria-label="Settings">
            <FontAwesomeIcon icon={faCog} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}; 