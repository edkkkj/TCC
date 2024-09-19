import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './componente/pages/Home';
import Impacto from './componente/pages/Impacto';
import Solucoes from './componente/pages/Solucoes';

import Header from './componente/pages/layout/Header'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Home" element={<Home />}  />
        <Route path="/Impacto" element={<Impacto />} />
        <Route path="/Solucoes" element={<Solucoes />} />
      </Routes>
    </Router>
  );
}

export default App
