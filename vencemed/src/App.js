import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './componente/Home';
import Impacto from './componente/Impacto';
import Solucoes from './componente/Solucoes';
import Perfil from './componente/Perfil';
import Agendamentos from './componente/Agendamentos'; // Importando Agendamentos
import PontosColeta from './componente/PontosColeta';
import CadastrarPontosColeta from './componente/CadastrarPontosColeta';

import "./App.css";


import Header from './componente/Header';
import Footer from './componente/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Impacto" element={<Impacto />} />
        <Route path="/Solucoes" element={<Solucoes />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/Agendamentos" element={<Agendamentos />} />
        <Route path="/PontosColeta" element={<PontosColeta />} />
        <Route path="/CadastrarPontosColeta" element={<CadastrarPontosColeta />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
