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
          fontSize: '1.25rem', 
          fontWeight: 900,
          textTransform: 'uppercase', 
          color: 'var(--fg-ink)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}>
          <span style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px', 
            height: '32px', 
            background: 'var(--accent-primary)', 
            color: 'white',
            border: '2px solid var(--fg-ink)',
            boxShadow: '2px 2px 0 var(--fg-ink)',
            borderRadius: '4px',
            fontSize: '16px'
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
      borderRadius: 'var(--border-radius-sm)',
      fontSize: 'var(--text-sm)'
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
      borderRadius: 'var(--border-radius-sm)',
      fontSize: 'var(--text-sm)'
    }}>
      {children} ↗
    </a>
  );
};

export default Navbar;
