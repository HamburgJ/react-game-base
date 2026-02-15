import React from 'react';import { Link, useLocation } from 'react-router-dom';const Navbar: React.FC = () => {  const location = useLocation();  const isActive = (path: string) => location.pathname === path ? 'active' : '';  return (    <nav className="navbar">      <div className="container navbar-container">        <Link to="/" className="logo">          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">            <rect width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.1"/>            <path d="M7 7H17V17H7V7Z" fill="currentColor" fillOpacity="0.8"/>          </svg>          React Game Base        </Link>        <div className="nav-links">          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>          <Link to="/demos" className={`nav-link ${location.pathname.startsWith('/demos') ? 'active' : ''}`}>Demos</Link>
          <a href="https://github.com/joshhamburger/react-game-base" className="nav-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
