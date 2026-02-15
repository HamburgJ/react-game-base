import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './template/styles/global.css';
import './game/theme.css';

import { ErrorBoundary } from './template/components/ErrorBoundary';
import { Navigation } from './template/components/Navigation';
import { ToastContainer } from './template/components/Toast';
import { Home } from './pages/Home';
import { Play } from './pages/Play';
import { GameStateProvider } from './template/context/GameStateContext';
import { ToastProvider } from './template/context/ToastContext';
import { gameConfig } from './game.config';

function App() {
  useEffect(() => {
    document.title = gameConfig.name;
  }, []);

  return (
    <GameStateProvider>
      <ErrorBoundary>
      <ToastProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navigation />
          <ToastContainer />
          <main>
            <Container fluid className="flex-grow-1 px-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/play" element={<Play />} />
              </Routes>
            </Container>
          </main>
        </div>
      </Router>
      </ToastProvider>
      </ErrorBoundary>
    </GameStateProvider>
  );
}

export default App;
