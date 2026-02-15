import React from 'react';
import Layout from '../components/Layout';

const Docs: React.FC = () => {
  return (
    <Layout>
      <div className="container" style={{ padding: 'var(--space-8) 0' }}>
        <h1 style={{ 
          fontSize: 'var(--text-2xl)', 
          textAlign: 'center', 
          marginBottom: 'var(--space-8)',
          textShadow: '4px 4px 0 var(--accent-secondary)'
        }}>
          GETTING STARTED
        </h1>
        
        <div style={{ 
          background: 'var(--bg-surface)', 
          padding: 'var(--space-8)', 
          borderRadius: 'var(--border-radius-lg)', 
          border: 'var(--border-width) solid var(--fg-ink)',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <h2 style={{ borderBottom: '2px dashed var(--fg-ink)', paddingBottom: 'var(--space-2)' }}>
            01. QUICK START
          </h2>
          <p style={{ fontFamily: 'var(--font-display)' }}>
            Clone the template, install dependencies, and start the dev server. Requires Node.js 18+.
          </p>
          
          <div style={{ 
            background: '#0d0d0d', 
            color: '#0f0', 
            padding: 'var(--space-4)', 
            borderRadius: 'var(--border-radius-sm)', 
            margin: 'var(--space-4) 0', 
            fontFamily: 'monospace',
            border: '2px solid var(--fg-dim)'
          }}>
            <p style={{ margin: 0, marginBottom: '4px' }}>$ git clone https://github.com/HamburgJ/react-game-base.git</p>
            <p style={{ margin: 0, marginBottom: '4px' }}>$ cd react-game-base</p>
            <p style={{ margin: 0, marginBottom: '4px' }}>$ npm install</p>
            <p style={{ margin: 0 }}>$ npm run dev</p>
          </div>

          <h2 style={{ marginTop: 'var(--space-8)', borderBottom: '2px dashed var(--fg-ink)', paddingBottom: 'var(--space-2)' }}>
            02. CONFIGURATION
          </h2>
          <p style={{ fontFamily: 'var(--font-display)' }}>
            Edit <code style={{ background: 'var(--accent-tertiary)', padding: '0 4px', border: '1px solid var(--fg-ink)' }}>src/game.config.ts</code> to customize your game{"'"}s identity and behavior.
          </p>
          
          <ul style={{ listStyle: 'square', marginLeft: '20px', fontFamily: 'var(--font-display)' }}>
            <li>Set your game{"'"}s title and description</li>
            <li>Configure the share URL for results sharing</li>
            <li>Add your Google Analytics ID (optional)</li>
            <li>Customize the color scheme via CSS variables</li>
          </ul>

          <h2 style={{ marginTop: 'var(--space-8)', borderBottom: '2px dashed var(--fg-ink)', paddingBottom: 'var(--space-2)' }}>
            03. BUILD YOUR GAME
          </h2>
          <p style={{ fontFamily: 'var(--font-display)' }}>
            Replace the default game logic in <code style={{ background: 'var(--accent-tertiary)', padding: '0 4px', border: '1px solid var(--fg-ink)' }}>src/game/</code> with your own puzzle mechanics. The template handles everything else: daily seeding, streak tracking, share buttons, settings, and theming.
          </p>

          <h2 style={{ marginTop: 'var(--space-8)', borderBottom: '2px dashed var(--fg-ink)', paddingBottom: 'var(--space-2)' }}>
            04. DEPLOY
          </h2>
          <p style={{ fontFamily: 'var(--font-display)' }}>
            Push to <code style={{ background: 'var(--accent-tertiary)', padding: '0 4px', border: '1px solid var(--fg-ink)' }}>main</code> and the included GitHub Actions workflow will build and deploy your game to GitHub Pages automatically.
          </p>

          <div style={{ 
            marginTop: 'var(--space-8)', 
            padding: 'var(--space-4)', 
            background: 'var(--accent-secondary)', 
            border: 'var(--border-width) solid var(--fg-ink)',
            fontWeight: 'bold',
            textAlign: 'center',
            transform: 'rotate(-0.5deg)',
            fontFamily: 'var(--font-display)'
          }}>
             TIP: Check out the 3 demo games to see the template in action before building your own.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Docs;
