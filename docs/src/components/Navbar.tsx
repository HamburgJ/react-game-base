import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav style={{
      borderBottom: '1px solid var(--border-color)',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '0.75rem 0',
      marginBottom: '2rem'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: '1.125rem', 
          fontWeight: 700,
          color: 'var(--fg-ink)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none'
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px', 
            height: '32px', 
            background: 'var(--accent-primary)', 
            color: 'white',
            borderRadius: '6px',
            fontSize: '18px',
            boxShadow: 'var(--shadow-sm)'
          }}>🎮</div>
          React Game Base
        </Link>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <NavItem to="/" isActive={currentPath === '/'}>Home</NavItem>
          <NavItem to="/demos" isActive={currentPath.startsWith('/demos')}>Demos</NavItem>
          <NavItem to="/docs" isActive={currentPath.startsWith('/docs')}>Docs</NavItem>
          <div style={{ width: '1px', background: 'var(--border-color)', margin: '0 0.5rem' }}></div>
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
      fontWeight: 500,
      padding: '0.5rem 1rem',
      backgroundColor: isActive ? 'var(--bg-surface-hover)' : 'transparent',
      color: isActive ? 'var(--accent-primary)' : 'var(--fg-dim)',
      transition: 'all 0.2s',
      borderRadius: '6px',
      fontSize: '0.9rem',
      textDecoration: 'none'
    }}>
      {children}
    </Link>
  );
};

const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      padding: '0.5rem 1rem',
      color: 'var(--fg-dim)',
      transition: 'all 0.2s',
      borderRadius: '6px',
      fontSize: '0.9rem',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }}>
      {children} 
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
    </a>
  );
};

export default Navbar;
