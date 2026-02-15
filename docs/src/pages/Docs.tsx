import React from 'react';
import Layout from '../components/Layout';

const Docs: React.FC = () => {
  return (
    <Layout>
      <div className="container docs-container">
        <h1>Documentation</h1>
        <p>Welcome to the React Game Base documentation!</p>
        
        <h2>Getting Started</h2>
        <p>To start building your game, click "Use this template" on GitHub.</p>
        <pre>
          <code>
            npm install
            npm run dev
          </code>
        </pre>

        <h2>Configuration</h2>
        <p>Edit <code>src/game.config.ts</code> to customize your game's identity.</p>

        {/* This can be expanded with real markdown content later */}
      </div>
    </Layout>
  );
};

export default Docs;
