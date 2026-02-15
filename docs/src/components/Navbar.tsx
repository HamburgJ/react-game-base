import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav style={{
      borderBottom: 'var(--border-width) solid var(--fg-ink)',
      backgroundColor: 'var(--bg-surface)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: 'var(--space-3) 0',
      marginBottom: 'var(--space-8)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: '1.25rem', 
          fontWeight: 800,
          textTransform: 'uppercase', 
          color: 'var(--fg-ink)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          textDecoration: 'none'
        }}>
          <span style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px', 
            height: '36px', 
            background: 'var(--fg-ink)', 
            color: 'white',
            border: '2px solid var(--fg-ink)',
            borderRadius: 'var(--border-radius-sm)',
            fontSize: '20px'
          }}>🎮</span>
          React Game Base
        </Link>
        
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <NavItem to="/" isActive={currentPath === '/'}>Home</NavItem>
          <NavItem to="/demos" isActive={currentPath.startsWith('/demos')}>Demos</NavItem>
          <NavItem to="/docs" isActive={currentPath.startsWith('/docs')}>Docs</NavItem>
          <ExternalLink href="https://github.com/HamburgJ/react-game-base">GitHub</ExternalLink>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ to: string; isActive?: boolean; children: React.ReactNode }> = ({ to, isActive, children }) => {
  return (
    <Link to={to} style={{
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      padding: '0.5rem 1rem',
      backgroundColor: isActive ? 'var(--accent-primary)' : 'transparent',
      color: isActive ? 'white' : 'var(--fg-ink)',
      border: '2px solid transparent',
      borderRadius: 'var(--border-radius-md)',
      transition: 'all 0.1s',
      textDecoration: 'none'
    }}>
      {children}
    </Link>
  );
};

const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      padding: '0.5rem 1rem',
      backgroundColor: 'transparent',
      color: 'var(--fg-ink)',
      border: '2px solid var(--fg-ink)',
      borderRadius: 'var(--border-radius-md)',
      transition: 'all 0.1s',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px'
    }}>
      {children} ↗
    </a>
  );
};

export default Navbar;
