import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container">
        {/* Ticker */}
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
          <div style={{ animation: 'marquee 25s linear infinite' }}>
            DAILY PUZZLE GAMES // REACT 19 + TYPESCRIPT // STREAKS &amp; STATS // ZERO CONFIG DEPLOY // OPEN SOURCE &amp; FREE // DAILY PUZZLE GAMES // REACT 19 + TYPESCRIPT // STREAKS &amp; STATS // ZERO CONFIG DEPLOY // OPEN SOURCE &amp; FREE
          </div>
        </div>

        {/* Hero Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr', 
          gap: 'var(--space-4)',
          marginBottom: 'var(--space-8)'
        }}>
          
          {/* Main Hero Card */}
          <div className="brutalist-card" style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--accent-secondary)', position: 'relative' }}>
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
               BUILD YOUR<br/>OWN WORDLE
             </h1>
             <p style={{ fontFamily: 'var(--font-display)', fontWeight: 'bold', background: 'var(--bg-surface)', display: 'inline-block', padding: 'var(--space-2)', border: '2px solid var(--fg-ink)' }}>
               A React + TypeScript template for daily puzzle games.
             </p>
             <div style={{ marginTop: 'var(--space-8)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
               <a href="https://github.com/HamburgJ/react-game-base" className="brutalist-btn">
                 GET THE TEMPLATE
               </a>
               <Link to="/demos" className="brutalist-btn secondary">
                 TRY THE DEMOS
               </Link>
             </div>
          </div>

          {/* Tech Stack Card */}
          <div className="brutalist-card" style={{ background: 'var(--bg-surface)', transform: 'rotate(-1deg)' }}>
            <h3 style={{ borderBottom: '2px solid var(--fg-ink)', paddingBottom: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>TECH STACK</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)' }}>
              <li style={{ marginBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between' }}>
                <span>Framework:</span> <span>React 19</span>
              </li>
              <li style={{ marginBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between' }}>
                <span>Bundler:</span> <span>Vite 6</span>
              </li>
              <li style={{ marginBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between' }}>
                <span>Language:</span> <span>TypeScript</span>
              </li>
              <li style={{ marginBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between' }}>
                <span>Storage:</span> <span>LocalStorage</span>
              </li>
              <li style={{ marginBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between' }}>
                <span>Deploy:</span> <span>GitHub Pages</span>
              </li>
              <li style={{ marginBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between' }}>
                <span>Cost:</span> <span style={{ background: 'var(--accent-primary)', color: 'white', padding: '0 4px' }}>FREE</span>
              </li>
            </ul>
            <div style={{ marginTop: 'var(--space-4)', padding: 'var(--space-3)', background: '#f0f0f0', border: '2px dashed var(--fg-dim)', textAlign: 'center' }}>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: 'var(--text-sm)' }}>No backend required</p>
              <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--fg-dim)' }}>Everything runs in the browser</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-8)', fontSize: 'var(--text-2xl)' }}>
            <span style={{ background: 'var(--accent-quaternary)', color: 'white', padding: '0 var(--space-2)' }}>BATTERIES</span> INCLUDED
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)' }}>
            
            <div className="brutalist-card" style={{ transform: 'rotate(1deg)' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-2)' }}>🗓️</div>
              <h3>Daily Seeding</h3>
              <p>Every player gets the same puzzle each day. A built-in PRNG system keeps results consistent across devices without needing a server.</p>
            </div>

            <div className="brutalist-card" style={{ transform: 'rotate(-1deg)', marginTop: 'var(--space-4)' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-2)' }}>🔥</div>
              <h3>Streaks &amp; Stats</h3>
              <p>Win streaks, play history, and performance stats are tracked automatically in the browser. Includes a shareable results component.</p>
            </div>

            <div className="brutalist-card" style={{ transform: 'rotate(1.5deg)' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-2)' }}>🚀</div>
              <h3>One-Push Deploy</h3>
              <p>Push to main and your game is live. Includes a GitHub Actions workflow that builds and deploys to GitHub Pages automatically.</p>
            </div>
          
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: 'var(--space-8) 0', borderTop: 'var(--border-width) dashed var(--fg-dim)' }}>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>SEE IT IN ACTION</h2>
            <p style={{ marginBottom: 'var(--space-4)', color: 'var(--fg-dim)', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
              We built 3 different games with this template to show what{"'"}s possible.
            </p>
            <Link to="/demos" className="brutalist-btn" style={{ fontSize: '1.25rem', padding: 'var(--space-3) var(--space-8)' }}>
              PLAY THE DEMOS →
            </Link>
        </div>

      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @media (max-width: 768px) {
          .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Home;
