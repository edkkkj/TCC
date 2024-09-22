import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './componente/pages/Home';
import Impacto from './componente/pages/Impacto';
import Solucoes from './componente/pages/Solucoes';
import Perfil from './componente/pages/layout/Perfil';
import Educacao from './componente/pages/Educacao';
import "./App.css";

import Header from './componente/pages/layout/Header';
import Footer from './componente/pages/layout/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Impacto" element={<Impacto />} />
        <Route path="/Solucoes" element={<Solucoes />} />
        <Route path="/perfil" element={<Perfil />} /> {/* Rota de Perfil */}
        <Route path="/Educacao" element={<Educacao />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
