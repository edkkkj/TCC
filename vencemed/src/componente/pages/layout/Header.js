import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from './Modal';
import ConfirmacaoSair from './ConfirmacaoSair';
import "./Header.modules.css";
import { VscAccount } from 'react-icons/vsc';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isCadastroOpen, setCadastroOpen] = useState(false);
  const [isSairConfirmOpen, setSairConfirmOpen] = useState(false);

  const handleConfirmSair = () => {
    setSairConfirmOpen(false);
    // Aqui você pode colocar a lógica para deslogar o usuário
    console.log("Usuário deslogado");
  };

  return (
    <header>
      <div className="top-section">
        <img src={"logo.png"} alt="Logo" />
        <h1>Conscientização sobre o Descarte de Medicamentos</h1>

        <div
          className="account-menu"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <VscAccount className="account-icon" />
          {menuOpen && (
            <ul className="dropdown-menu">
              <li><Link onClick={() => { setLoginOpen(true); setMenuOpen(false); }}>Login</Link></li>
              <li><Link onClick={() => { setCadastroOpen(true); setMenuOpen(false); }}>Cadastro</Link></li>
              <li><Link to="/perfil" onClick={() => setMenuOpen(false)}>Perfil</Link></li>
              <li><Link className="sair-link" onClick={() => { setSairConfirmOpen(true); setMenuOpen(false); }}>Sair</Link></li>
            </ul>
          )}
        </div>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Impacto">Impacto</Link></li>
          <li><Link to="/Solucoes">Soluções</Link></li>
          <li><Link to="/Educacao">Educação</Link></li>
        </ul>
      </nav>

      {/* Modal de Login */}
      {isLoginOpen && (
        <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
          <h2>Login</h2>
          <form>
            <label>Email ou Nome de Usuário:</label>
            <input type="text" placeholder="Digite seu email ou nome de usuário" />
            <label>Senha:</label>
            <input type="password" placeholder="Digite sua senha" />
            <button type="submit">Entrar</button>
          </form>
        </Modal>
      )}

      {/* Modal de Cadastro */}
      {isCadastroOpen && (
        <Modal isOpen={isCadastroOpen} onClose={() => setCadastroOpen(false)}>
          <h2>Cadastro</h2>
          <form>
            <label>Email:</label>
            <input type="email" placeholder="Digite seu email" />
            <label>Senha:</label>
            <input type="password" placeholder="Crie uma senha" />
            <label>Telefone:</label>
            <input type="tel" placeholder="Digite seu telefone" />
            <label>CEP:</label>
            <input type="text" placeholder="Digite seu CEP" />
            <label>CPF:</label>
            <input type="text" placeholder="Digite seu CPF" />
            <button type="submit">Cadastrar</button>
          </form>
        </Modal>
      )}

      {/* Modal de Confirmação de Sair */}
      {isSairConfirmOpen && (
        <ConfirmacaoSair
          onConfirm={handleConfirmSair}
          onCancel={() => setSairConfirmOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;
