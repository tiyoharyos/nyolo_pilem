import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Intro from './component/Intro';
import SuperHero from './component/SuperHero';
import Trending from './component/Trending'
import ListFilm from './component/ListFilm';
import "./App.css"


function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Intro />} />
            <Route path="trending" element={<Trending />} />
            <Route path="superhero" element={<SuperHero />} />
            <Route path="listfilm" element={<ListFilm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
