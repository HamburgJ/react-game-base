import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container">
        {/* Marquee */}
        <div style={{ 
          background: 'var(--fg-ink)', 
          color: 'var(--accent-tertiary)', 
          padding: 'var(--space-2)',
          fontFamily: 'var(--font-display)',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          marginBottom: 'var(--space-8)',
          borderRadius: 'var(--border-radius-sm)',
          border: 'var(--border-width) solid var(--fg-ink)'
        }}>
          <div style={{ animation: 'marquee 20s linear infinite' }}>
            PRESS START // INSERT COIN // HIGH SCORE: 999,999 // LEVEL 1 COMPLETE // NEW GAME UNLOCKED // PRESS START // INSERT COIN // HIGH SCORE: 999,999 // LEVEL 1 COMPLETE // NEW GAME UNLOCKED
          </div>
        </div>

        {/* Hero Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--space-4)',
          marginBottom: 'var(--space-8)'
        }}>
          
          {/* Main Hero Card */}
          <div className="brutalist-card" style={{ gridColumn: 'span 2', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--accent-secondary)', position: 'relative' }}>
             <div style={{ 
               position: 'absolute', 
               top: '-10px', 
               right: '-10px', 
               background: 'var(--accent-tertiary)', 
               padding: 'var(--space-2) var(--space-4)', 
               border: 'var(--border-width) solid var(--fg-ink)',
               transform: 'rotate(2deg)',
               fontWeight: 'bold',
               boxShadow: '4px 4px 0 var(--fg-ink)'
             }}>
               V1.0 RELEASED!
             </div>
             <h1 style={{ fontSize: 'var(--text-3xl)', textShadow: '4px 4px 0 var(--bg-surface)' }}>
               BUILD YOUR<br/>OWN ARCADE
             </h1>
             <p style={{ fontFamily: 'var(--font-display)', fontWeight: 'bold', background: 'var(--bg-surface)', display: 'inline-block', padding: 'var(--space-2)', border: '2px solid var(--fg-ink)' }}>
               React 19 + Vite + TypeScript Template
             </p>
             <div style={{ marginTop: 'var(--space-8)', display: 'flex', gap: 'var(--space-4)' }}>
               <a href="https://github.com/joshhamburger/react-game-base" className="brutalist-btn">
                 DOWNLOAD SOURCE
               </a>
               <Link to="/demos" className="brutalist-btn secondary">
                 INSERT COIN (DEMOS)
               </Link>
             </div>
          </div>

          {/* Stats / Info Card */}
          <div className="brutalist-card" style={{ background: 'var(--bg-surface)', transform: 'rotate(-1deg)' }}>
            <h3 style={{ borderBottom: '2px solid var(--fg-ink)', paddingBottom: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>SYSTEM SPECS</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)' }}>
              <li style={{ marginBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between' }}>
                <span>Wait_Time:</span> <span style={{ color: 'var(--status-success)', fontWeight: 'bold' }}>0ms</span>
              </li>
              <li style={{ marginBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between' }}>
                <span>Engine:</span> <span>Vite 6.0</span>
              </li>
              <li style={{ marginBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between' }}>
                <span>Logic:</span> <span>TypeScript</span>
              </li>
              <li style={{ marginBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between' }}>
                <span>Cost:</span> <span style={{ background: 'var(--accent-primary)', color: 'white', padding: '0 4px' }}>FREE</span>
              </li>
            </ul>
            <div style={{ marginTop: 'var(--space-4)', padding: 'var(--space-4)', background: '#f0f0f0', border: '2px dashed var(--fg-dim)', textAlign: 'center' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>NO DATABASE RQRD</p>
              <p style={{ margin: 0, fontSize: '0.8rem' }}>Uses LocalStorage</p>
            </div>
          </div>
        </div>

        {/* Features Staggered Grid */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-8)', fontSize: 'var(--text-2xl)' }}>
            <span style={{ background: 'var(--accent-quaternary)', color: 'white', padding: '0 var(--space-2)' }}>POWER-UPS</span> INCLUDED
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)' }}>
            
            {/* Feature 1 */}
            <div className="brutalist-card" style={{ transform: 'rotate(1deg)' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-2)' }}>🗓️</div>
              <h3>Daily Seeding</h3>
              <p>Everybody gets the same puzzle. Synchronized across the metaverse via PRNG algorithms.</p>
            </div>

            {/* Feature 2 */}
            <div className="brutalist-card" style={{ transform: 'rotate(-1deg)', marginTop: 'var(--space-4)' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-2)' }}>🔥</div>
              <h3>Streak Tracking</h3>
              <p>Dopamine hits included. Tracks wins, losses, and streaks automatically in browser storage.</p>
            </div>

            {/* Feature 3 */}
            <div className="brutalist-card" style={{ transform: 'rotate(1.5deg)' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-2)' }}>🚀</div>
              <h3>Turbo Deploy</h3>
              <p>Push to main &rarr; GitHub Actions &rarr; Live. Zero config deployment pipeline ready to go.</p>
            </div>
          
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: 'var(--space-8) 0', borderTop: 'var(--border-width) dashed var(--fg-dim)' }}>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>READY TO PLAY?</h2>
            <Link to="/demos" className="brutalist-btn" style={{ fontSize: '1.5rem', padding: 'var(--space-4) var(--space-8)', transform: 'rotate(-2deg)' }}>
              START GAME →
            </Link>
        </div>

      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </Layout>
  );
};

export default Home;
