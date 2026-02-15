import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="container">
          <h1>Build your own Wordle in minutes, not weeks.</h1>
          <p className="hero-subtitle">
            The React + TypeScript template for daily puzzle games.
            Streaks, sharing, analytics, dark mode, and one-click deploy — all handled.
          </p>
          <div className="cta-container">
            <a href="https://github.com/joshhamburger/react-game-base" className="btn btn-primary">Use This Template</a>
            <Link to="/demos" className="btn btn-secondary">Try the Demos</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Everything you need</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="icon">🎯</span>
              <h3>Daily Puzzles</h3>
              <p>Auto-generated daily challenges with seeded randomization.</p>
            </div>
            <div className="feature-card">
              <span className="icon">🔥</span>
              <h3>Streak Tracking</h3>
              <p>Built-in streak system that persists across sessions.</p>
            </div>
            <div className="feature-card">
              <span className="icon">📤</span>
              <h3>Social Sharing</h3>
              <p>Emoji grid generation and native share sheet support.</p>
            </div>
            <div className="feature-card">
              <span className="icon">🚀</span>
              <h3>One-Click Deploy</h3>
              <p>Deploy to GitHub Pages automatically with included Actions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="demos-preview">
        <div className="container">
          <h2>See what's possible</h2>
          <div className="games-grid">
            <Link to="/demos/worduel" className="game-card">
              <h3>Worduel</h3>
              <p>Classic word guessing game</p>
            </Link>
            <Link to="/demos/numbrella" className="game-card">
              <h3>Numbrella</h3>
              <p>Daily math puzzle</p>
            </Link>
            <Link to="/demos/chromatic" className="game-card">
              <h3>Chromatic</h3>
              <p>Color matching challenge</p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
