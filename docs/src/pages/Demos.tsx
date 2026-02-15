import React from 'react';
import Layout from '../components/Layout';
import { Outlet, Link } from 'react-router-dom';

const DemosLayout: React.FC = () => {
  return (
    <Layout>
      <div className="container demos-container">
        <h1>Demo Games</h1>
        <nav className="demos-nav">
          <Link to="/demos/worduel">Worduel</Link>
          <Link to="/demos/numbrella">Numbrella</Link>
          <Link to="/demos/chromatic">Chromatic</Link>
        </nav>
        <div className="demo-viewport">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default DemosLayout;
