import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Docs from './pages/Docs';
import DemosLayout from './pages/Demos';
import WorduelDemo from './demos/Worduel';
import NumbrellaDemo from './demos/Numbrella';
import ChromaticDemo from './demos/Chromatic';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/demos" element={<DemosLayout />}>
        <Route path="worduel" element={<WorduelDemo />} />
        <Route path="numbrella" element={<NumbrellaDemo />} />
        <Route path="chromatic" element={<ChromaticDemo />} />
      </Route>
    </Routes>
  );
}

export default App;
