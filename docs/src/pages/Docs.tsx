import React from 'react';
import Layout from '../components/Layout';

const Docs: React.FC = () => {
  return (
    <Layout>
      <div className="container" style={{ padding: '4rem 0' }}>
        <h1 style={{ marginBottom: '2rem' }}>Documentation</h1>
        
        <div style={{ background: 'var(--bg-surface)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
          <h2>Getting Started</h2>
          <p style={{ color: 'var(--text-muted)' }}>To start building your game, verify you have Node.js installed.</p>
          
          <div style={{ background: 'var(--bg-body)', padding: '1rem', borderRadius: 'var(--radius-md)', margin: '1rem 0', fontFamily: 'monospace' }}>
            <code>
            npm install<br/>
            npm run dev
            </code>
          </div>

          <h2 style={{ marginTop: '2rem' }}>Configuration</h2>
          <p style={{ color: 'var(--text-muted)' }}>Edit <code style={{ background: 'var(--bg-body)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>src/game.config.ts</code> to customize your game identity.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Docs;
