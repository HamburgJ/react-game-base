import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container" style={{ padding: '6rem 1.5rem', maxWidth: '1024px' }}>
        
        {/* Helper Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <span style={{ 
            background: 'var(--bg-surface)', 
            border: '1px solid var(--border-color)', 
            padding: '0.25rem 0.75rem', 
            borderRadius: '99px',
            fontSize: '0.875rem',
            color: 'var(--fg-dim)',
            fontWeight: 500
          }}>
            v1.0 Now Available
          </span>
        </div>

        {/* Hero Section */}
        <section style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          marginBottom: '5rem' 
        }}>
          
          <h1 style={{ 
            fontSize: 'var(--text-4xl)', 
            marginBottom: '1.5rem',
            maxWidth: '800px',
            color: 'var(--fg-ink)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            fontWeight: 800
          }}>
            Build Your Own <span style={{ color: 'var(--accent-primary)' }}>Daily Puzzle Game</span>
          </h1>
          
          <p style={{ 
            fontSize: 'var(--text-xl)', 
            color: 'var(--fg-dim)', 
            maxWidth: '600px', 
            marginBottom: '2.5rem',
            lineHeight: 1.6 
          }}>
            A production-ready React + TypeScript template. Zero config deployment, 
            built-in streak tracking, and daily seeded puzzles.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/docs" className="btn-primary" style={{ fontSize: '1.125rem', padding: '0.75rem 2rem' }}>
              Get Started
            </Link>
            <Link to="/demos" className="btn-secondary" style={{ fontSize: '1.125rem', padding: '0.75rem 2rem' }}>
              View Demos
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="grid-3" style={{ gap: '2rem' }}>
            {/* Feature 1 */}
            <div className="card-base" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ 
                width: '48px', height: '48px', 
                background: 'var(--bg-surface)', 
                borderRadius: '8px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', marginBottom: '1.5rem',
                border: '1px solid var(--border-color)'
              }}>🗓️</div>
              <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.5rem' }}>Daily Seeding</h3>
              <p style={{ color: 'var(--fg-dim)', margin: 0, fontSize: '0.95rem' }}>
                Integrated PRNG system ensures every player gets the same puzzle every day, without running a backend server.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card-base" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ 
                width: '48px', height: '48px', 
                background: 'var(--bg-surface)', 
                borderRadius: '8px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', marginBottom: '1.5rem',
                border: '1px solid var(--border-color)'
              }}>🔥</div>
              <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.5rem' }}>Streaks &amp; Stats</h3>
              <p style={{ color: 'var(--fg-dim)', margin: 0, fontSize: '0.95rem' }}>
                Win streaks, distribution graphs, and play history are tracked automatically in local storage.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card-base" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ 
                width: '48px', height: '48px', 
                background: 'var(--bg-surface)', 
                borderRadius: '8px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', marginBottom: '1.5rem',
                border: '1px solid var(--border-color)'
              }}>🚀</div>
              <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.5rem' }}>One-Push Deploy</h3>
              <p style={{ color: 'var(--fg-dim)', margin: 0, fontSize: '0.95rem' }}>
                Includes a GitHub Actions workflow. Just push to main and your game is built and deployed to GitHub Pages.
              </p>
            </div>
          </div>
        </section>

        {/* Demos Preview */}
        <section style={{ 
          background: 'var(--bg-surface)', 
          borderRadius: 'var(--border-radius-lg)', 
          padding: '4rem 2rem',
          textAlign: 'center',
          border: '1px solid var(--border-color)'
        }}>
          <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: '1rem' }}>See it in Action</h2>
          <p style={{ color: 'var(--fg-dim)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            We built three fully-featured games using this template to demonstrate different mechanics and themes.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
             <Link to="/demos/worduel" className="btn-secondary">Play Worduel</Link>
             <Link to="/demos/numbrella" className="btn-secondary">Play Numbrella</Link>
             <Link to="/demos/chromatic" className="btn-secondary">Play Chromatic</Link>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Home;
