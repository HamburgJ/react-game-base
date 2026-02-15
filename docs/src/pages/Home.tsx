import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div style={{ marginBottom: '1rem', display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)', fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-primary)' }}>
            v1.0 is now available 🚀
          </div>
          <h1>
            Build your own <span className="text-gradient">Wordle</span> for <br/>
            students, friends, or customers.
          </h1>
          <p className="hero-subtitle">
            The ultimate React + TypeScript template for daily puzzle games.
            Includes streak tracking, social sharing, analytics, and dark mode out of the box.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="https://github.com/joshhamburger/react-game-base" className="btn btn-primary">
              Clone Template
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
            <Link to="/demos" className="btn btn-secondary">Play Demos</Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Everything you need to launch</h2>
            <p style={{ color: 'var(--text-muted)' }}>Focus on your game logic. We handled the boring stuff.</p>
          </div>
          
          <div className="grid grid-cols-2">
            <div className="feature-card">
              <span className="feature-icon">🗓️</span>
              <h3>Daily Seeding System</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Every player gets the same puzzle each day. Built-in PRNG system ensures consistent cross-device experience without a database.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔥</span>
              <h3>Streaks & Statistics</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Local storage based persistence for win streaks, played games, and win percentage. Visualization component included.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎨</span>
              <h3>Theming & Dark Mode</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Fully responsive with automatic dark mode support. easy-to-configure CSS variables for your brand's color scheme.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🚀</span>
              <h3>Zero-Config Deployment</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Includes GitHub Actions workflows to build and deploy your game to GitHub Pages automatically on push.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Teaser */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
           <h2>See it in action</h2>
           <p className="hero-subtitle">We built 3 distinct games to prove the template's flexibility.</p>
           
           <div className="grid grid-cols-3" style={{ marginTop: '3rem' }}>
             <Link to="/demos/worduel" className="feature-card" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'left' }}>
               <div style={{ height: '140px', background: '#e0f2fe', borderRadius: 'var(--radius-md)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>📝</div>
               <h3>Worduel</h3>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Classic 5-letter word guessing game with keyboard input.</p>
               <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem', marginTop: 'auto', display: 'block', paddingTop: '1rem' }}>Play Now →</span>
             </Link>
             
             <Link to="/demos/numbrella" className="feature-card" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'left' }}>
               <div style={{ height: '140px', background: '#f5d0fe', borderRadius: 'var(--radius-md)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>🔢</div>
               <h3>Numbrella</h3>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Reach the target number using basic arithmetic operations.</p>
               <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem', marginTop: 'auto', display: 'block', paddingTop: '1rem' }}>Play Now →</span>
             </Link>
             
             <Link to="/demos/chromatic" className="feature-card" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'left' }}>
               <div style={{ height: '140px', background: '#fef08a', borderRadius: 'var(--radius-md)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>🎨</div>
               <h3>Chromatic</h3>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Mix RGB sliders to match the daily target color.</p>
               <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem', marginTop: 'auto', display: 'block', paddingTop: '1rem' }}>Play Now →</span>
             </Link>
           </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
