import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">React Game Base ⚡</Link>
        <div className="navbar-links">
          <Link to="/demos">Demos</Link>
          <Link to="/docs">Docs</Link>
          <a href="https://github.com/joshhamburger/react-game-base" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
