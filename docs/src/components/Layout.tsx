import React, { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; // Ensure global styles are imported

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
