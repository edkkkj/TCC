import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './componente/pages/Home';
import Impacto from './componente/pages/Impacto';
import Solucoes from './componente/pages/Solucoes';

import Header from './componente/pages/layout/Header';
import Footer from './componente/pages/layout/Footer';
import Container from './componente/pages/layout/Container';

function App() {
  return (
    <Router>
      <Header />
      <Container customClass="min-height">
      <Routes>
        <Route exact path="/Home" element={<Home />}  />
        <Route path="/Impacto" element={<Impacto />} />
        <Route path="/Solucoes" element={<Solucoes />} />
      </Routes>
      </Container>
      <Footer customClass="min-height" />
    </Router>
  );
}

export default App
