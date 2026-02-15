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
          SYSTEM_MANUAL_V1.0
        </h1>
        
        <div style={{ 
          background: 'var(--bg-surface)', 
          padding: 'var(--space-8)', 
          borderRadius: 'var(--border-radius-lg)', 
          border: 'var(--border-width) solid var(--fg-ink)',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <h2 style={{ borderBottom: '2px dashed var(--fg-ink)', paddingBottom: 'var(--space-2)' }}>
            01_Initialization
          </h2>
          <p style={{ fontFamily: 'var(--font-display)' }}>
            To begin assembly, execute the following commands in your terminal. Ensure your operating system (Node.js) is v18+.
          </p>
          
          <div style={{ 
            background: '#000', 
            color: '#0f0', 
            padding: 'var(--space-4)', 
            borderRadius: 'var(--border-radius-sm)', 
            margin: 'var(--space-4) 0', 
            fontFamily: 'monospace',
            border: '2px solid var(--fg-dim)'
          }}>
            <p style={{ margin: 0 }}>$ npm install</p>
            <p style={{ margin: 0 }}>$ npm run dev</p>
          </div>

          <h2 style={{ marginTop: 'var(--space-8)', borderBottom: '2px dashed var(--fg-ink)', paddingBottom: 'var(--space-2)' }}>
            02_Configuration
          </h2>
          <p style={{ fontFamily: 'var(--font-display)' }}>
            Access the mainframe settings at <code style={{ background: 'var(--accent-tertiary)', padding: '0 4px', border: '1px solid var(--fg-ink)' }}>src/game.config.ts</code>. customize identity matrix.
          </p>
          
          <ul style={{ listStyle: 'square', marginLeft: '20px', fontFamily: 'var(--font-display)' }}>
            <li>Set GAME_TITLE parameter</li>
            <li>Define SHARE_URL vector</li>
            <li>Inject GOOGLE_ANALYTICS_ID (optional)</li>
          </ul>

          <div style={{ 
            marginTop: 'var(--space-8)', 
            padding: 'var(--space-4)', 
            background: 'var(--accent-secondary)', 
            border: 'var(--border-width) solid var(--fg-ink)',
            fontWeight: 'bold',
            textAlign: 'center',
            transform: 'rotate(-1deg)'
          }}>
             WARNING: DO NOT EDIT THE CORE FLUX CAPACITOR WITHOUT BACKUP.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Docs;
