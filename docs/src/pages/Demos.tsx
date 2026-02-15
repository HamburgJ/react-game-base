import React from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Demos: React.FC = () => {
  const location = useLocation();
  const isIndex = location.pathname === '/demos' || location.pathname === '/demos/';

  // If we are at the index, show the "Select Game" screen
  if (isIndex) {
    return (
      <Layout>
        <div className="container" style={{ padding: 'var(--space-8) 0' }}>
          <h1 style={{ textAlign: 'center', marginBottom: 'var(--space-8)', fontSize: 'var(--text-3xl)', textShadow: '4px 4px 0 var(--accent-primary)' }}>
            SELECT CARTRIDGE
          </h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)' }}>
             {/* Game 1 */}
             <Link to="worduel" className="brutalist-card call-to-action" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transform: 'rotate(-1deg)', transition: 'all 0.2s' }}>
               <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--accent-primary)', marginBottom: 'var(--space-4)', border: 'var(--border-width) solid var(--fg-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'white' }}>
                 📝
               </div>
               <h2 style={{ fontSize: 'var(--text-xl)' }}>WORDUEL</h2>
               <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)' }}>
                 Reflexes: Low<br/>
                 Brain: High
               </p>
               <span className="brutalist-btn" style={{ marginTop: 'auto' }}>INSERT →</span>
             </Link>

             {/* Game 2 */}
             <Link to="numbrella" className="brutalist-card call-to-action" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transform: 'rotate(1deg)', transition: 'all 0.2s' }}>
               <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--accent-quaternary)', marginBottom: 'var(--space-4)', border: 'var(--border-width) solid var(--fg-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'white' }}>
                 🔢
               </div>
               <h2 style={{ fontSize: 'var(--text-xl)' }}>NUMBRELLA</h2>
               <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)' }}>
                 Reflexes: Low<br/>
                 Brain: Max
               </p>
               <span className="brutalist-btn" style={{ marginTop: 'auto' }}>INSERT →</span>
             </Link>

             {/* Game 3 */}
             <Link to="chromatic" className="brutalist-card call-to-action" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transform: 'rotate(-0.5deg)', transition: 'all 0.2s' }}>
               <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--accent-tertiary)', marginBottom: 'var(--space-4)', border: 'var(--border-width) solid var(--fg-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'black' }}>
                 🎨
               </div>
               <h2 style={{ fontSize: 'var(--text-xl)' }}>CHROMATIC</h2>
               <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)' }}>
                 Reflexes: Med<br/>
                 Brain: Med
               </p>
               <span className="brutalist-btn" style={{ marginTop: 'auto' }}>INSERT →</span>
             </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // If a game is selected, show the "Console" view
  return (
    <Layout>
      <div className="container">
        <div style={{ padding: 'var(--space-4) 0', display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
           <Link to="/demos" className="brutalist-btn secondary" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>
             ← EJECT CARTRIDGE
           </Link>
           <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'bold' }}>
             PLAYING: {location.pathname.split('/').pop()?.toUpperCase()}
           </span>
        </div>

        {/* The Monitor Bezel */}
        <div style={{ 
          background: '#2a2a2a', 
          padding: '20px 20px 40px 20px', 
          borderRadius: '20px 20px 4px 4px', 
          border: '4px solid #1a1a1a',
          boxShadow: '0 10px 0 #1a1a1a, 0 20px 0 rgba(0,0,0,0.2)'
        }}>
           <div style={{ 
             background: 'white', 
             border: '4px inset #1a1a1a', 
             minHeight: '600px',
             borderRadius: '4px',
             overflow: 'hidden',
             position: 'relative'
           }}>
             {/* CRT Effect Overlay */}
             <div style={{ pointerEvents: 'none', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%)', backgroundSize: '100% 4px', zIndex: 10 }}></div>
             <Outlet />
           </div>
           
           <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '20px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'red', boxShadow: '0 0 10px red' }}></div>
              <div style={{ fontFamily: 'monospace', color: '#666' }}>SONY TRINITRON</div>
           </div>
        </div>
      </div>
    </Layout>
  );
};

export default Demos;
