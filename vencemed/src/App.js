// App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componente/Home';
import Impacto from './componente/Impacto';
import Solucoes from './componente/Solucoes';
import Perfil from './componente/Perfil';
import Agendamentos from './componente/Agendamentos'; // Importando Agendamentos
import PontosColeta from './componente/PontosColeta';
import CadastrarPontosColeta from './componente/CadastrarPontosColeta';
import Modal from './componente/Modal';

import Header from './componente/Header';
import Footer from './componente/Footer';

import { ModalProvider } from './componente/ModalContext'; // Importando o ModalProvider

import "./App.css";

function App() {
  return (
    <Router>
    <ModalProvider>
      <Header />
      <Modal />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/impacto" element={<Impacto />} />
        <Route path="/Solucoes" element={<Solucoes />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/Agendamentos" element={<Agendamentos />} />
        <Route path="/PontosColeta" element={<PontosColeta />} />
        <Route path="/CadastrarPontosColeta" element={<CadastrarPontosColeta />} />
      </Routes>
      <Footer />
    </ModalProvider>
  </Router>
  );
}

export default App;
