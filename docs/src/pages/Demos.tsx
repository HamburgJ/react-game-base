import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Layout from '../components/Layout';

const GAMES = [
  { slug: 'worduel', name: 'Worduel', emoji: '📝', color: '#2d6a4f', desc: 'Guess the 5-letter word in 6 tries. Classic daily word puzzle.' },
  { slug: 'numbrella', name: 'Numbrella', emoji: '🔢', color: 'var(--accent-quaternary)', desc: 'Hit the target number using basic math operations.' },
  { slug: 'chromatic', name: 'Chromatic', emoji: '🎨', color: 'var(--accent-primary)', desc: 'Mix RGB sliders to match the daily target color.' },
];

const Demos: React.FC = () => {
  const location = useLocation();
  const isIndex = location.pathname === '/demos' || location.pathname === '/demos/';
  const currentGame = location.pathname.split('/').pop();

  if (isIndex) {
    return (
      <Layout>
        <div className="container" style={{ padding: 'var(--space-8) 0' }}>
          <h1 style={{ textAlign: 'center', marginBottom: 'var(--space-2)', fontSize: 'var(--text-3xl)', textShadow: '4px 4px 0 var(--accent-primary)' }}>
            DEMO GAMES
          </h1>
          <p style={{ textAlign: 'center', color: 'var(--fg-dim)', marginBottom: 'var(--space-8)', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            Three different games built with the same template. Pick one and play.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)' }}>
             {GAMES.map((game, i) => (
               <Link key={game.slug} to={game.slug} className="brutalist-card" style={{ 
                 textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', 
                 transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`, transition: 'all 0.2s' 
               }}>
                 <div style={{ width: '100%', aspectRatio: '16/9', background: game.color, marginBottom: 'var(--space-4)', border: 'var(--border-width) solid var(--fg-ink)', borderRadius: 'var(--border-radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                   {game.emoji}
                 </div>
                 <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-1)' }}>{game.name.toUpperCase()}</h2>
                 <p style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-dim)', marginBottom: 'var(--space-4)' }}>
                   {game.desc}
                 </p>
                 <span className="brutalist-btn" style={{ marginTop: 'auto' }}>PLAY →</span>
               </Link>
             ))}
          </div>
        </div>
      </Layout>
    );
  }

  const activeGame = GAMES.find(g => g.slug === currentGame);

  return (
    <Layout>
      <div className="container">
        {/* Back bar */}
        <div style={{ padding: 'var(--space-4) 0', display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
           <Link to="/demos" className="brutalist-btn secondary" style={{ padding: '4px 12px', fontSize: '0.8rem' }}>
             ← BACK TO DEMOS
           </Link>
           <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'bold' }}>
             NOW PLAYING: {activeGame?.name.toUpperCase() ?? currentGame?.toUpperCase()}
           </span>
        </div>

        {/* Game Frame */}
        <div style={{ 
          background: 'var(--bg-surface)', 
          border: 'var(--border-width) solid var(--fg-ink)',
          borderRadius: 'var(--border-radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          marginBottom: 'var(--space-8)'
        }}>
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default Demos;
