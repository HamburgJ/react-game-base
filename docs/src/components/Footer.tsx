import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} React Game Base. Created by Joshua Hamburger.</p>
        <div className="footer-links">
          <a href="https://github.com/joshhamburger/react-game-base" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/docs/CONTRIBUTING.md">Contribute</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
