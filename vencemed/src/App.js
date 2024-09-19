import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './componente/pages/Home';
import Impacto from './componente/pages/Impacto';
import Solucoes from './componente/pages/Solucoes';
import "./App.css"

import Header from './componente/pages/layout/Header'
import Footer from './componente/pages/layout/Footer';


function App() {
  return (
    <Router>
      <Header>

      </Header>
      <Routes>
        <Route exact path="/Home" element={<Home />}  />
        <Route path="/Impacto" element={<Impacto />} />
        <Route path="/Solucoes" element={<Solucoes />} />
      </Routes>
      <Footer>

      </Footer>
    </Router>
  );
}

export default App
