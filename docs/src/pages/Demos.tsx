import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const DemosLayout: React.FC = () => {
  const location = useLocation();
  const isIndex = location.pathname === '/demos' || location.pathname === '/demos/';

  return (
    <Layout>
      <div style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', padding: '1rem 0' }}>
            <NavLink 
              to="/demos" 
              end
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
              style={{ whiteSpace: 'nowrap' }}
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/demos/worduel" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Worduel
            </NavLink>
            <NavLink 
              to="/demos/numbrella" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Numbrella
            </NavLink>
            <NavLink 
              to="/demos/chromatic" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Chromatic
            </NavLink>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1rem' }}>
        {isIndex ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h2>Choose a game to play</h2>
            <p className="hero-subtitle">Experience the flexibility of the template.</p>
            
            <div className="grid grid-cols-3" style={{ marginTop: '3rem', textAlign: 'left' }}>
               <Link to="/demos/worduel" className="feature-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                 <h3>Worduel</h3>
                 <p style={{ color: 'var(--text-muted)' }}>5-letter word game</p>
               </Link>
               <Link to="/demos/numbrella" className="feature-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                 <h3>Numbrella</h3>
                 <p style={{ color: 'var(--text-muted)' }}>Daily operations math game</p>
               </Link>
               <Link to="/demos/chromatic" className="feature-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                 <h3>Chromatic</h3>
                 <p style={{ color: 'var(--text-muted)' }}>Color matching challenge</p>
               </Link>
            </div>
          </div>
        ) : (
          <div style={{ background: 'var(--bg-surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <Outlet />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default DemosLayout;
