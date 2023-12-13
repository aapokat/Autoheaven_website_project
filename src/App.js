import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import Tuote_1 from './pages/Tuote_1/tuote1';


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
      </Routes>
    </Router>

  );
}

export default App;