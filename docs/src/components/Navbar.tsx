import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav style={{
      borderBottom: 'var(--border-width) solid var(--border-color)',
      backgroundColor: 'var(--bg-surface)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: 'var(--space-2) 0',
      marginBottom: 'var(--space-4)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: '1.5rem', 
          fontWeight: 900,
          textTransform: 'uppercase', 
          color: 'var(--accent-primary)',
          textShadow: '2px 2px 0px var(--fg-ink)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}>
          <span style={{ 
            display: 'inline-block', 
            width: '24px', 
            height: '24px', 
            background: 'var(--accent-secondary)', 
            border: '2px solid var(--fg-ink)',
            boxShadow: '2px 2px 0 var(--fg-ink)' 
          }}></span>
          RGB_System
        </Link>
        
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <NavLink to="/" isActive={currentPath === '/'}>Index</NavLink>
          <NavLink to="/demos" isActive={currentPath.startsWith('/demos')}>Games</NavLink>
          <ExternalLink href="https://github.com/joshhamburger/react-game-base">Src_Code</ExternalLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; isActive?: boolean; children: React.ReactNode }> = ({ to, isActive, children }) => {
  return (
    <Link to={to} style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      padding: 'var(--space-1) var(--space-2)',
      border: '2px solid',
      borderColor: isActive ? 'var(--fg-ink)' : 'transparent',
      backgroundColor: isActive ? 'var(--accent-tertiary)' : 'transparent',
      color: 'var(--fg-ink)',
      boxShadow: isActive ? '2px 2px 0 var(--fg-ink)' : 'none',
      transition: 'all 0.1s',
      borderRadius: 'var(--border-radius-sm)'
    }}>
      {children}
    </Link>
  );
};

const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      padding: 'var(--space-1) var(--space-2)',
      border: '2px solid transparent',
      color: 'var(--fg-dim)',
      transition: 'all 0.1s',
      borderRadius: 'var(--border-radius-sm)'
    }}>
      {children} ↗
    </a>
  );
};

export default Navbar;
