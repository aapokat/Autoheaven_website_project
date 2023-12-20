import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import Tuote_1 from './pages/Tuote_1/tuote1';
import Oikeudellisettiedot from './pages/Oikeudellisettiedot/oikeudellisettiedot';
import EULA from './pages/EULA/eula';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/Tuote/:id'
          element={<Tuote_1/>}
        />
        <Route
          path='/Oikeudellisettiedot'
          element={<Oikeudellisettiedot/>}
        />
        <Route
          path='/EULA'
          element={<EULA/>}
        />
      </Routes>
    </Router>

  );
}

export default App;