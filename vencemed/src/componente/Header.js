import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from '../componente/Modal';
import ConfirmacaoSair from '../componente/ConfirmacaoSair';
import "../layout/Header.modules.css";
import { VscAccount } from 'react-icons/vsc';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isCadastroOpen, setCadastroOpen] = useState(false);
  const [isSairConfirmOpen, setSairConfirmOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setLoggedInUser(user);
      setIsAdmin(user.isAdmin);
    }
  }, []);

  const handleConfirmSair = () => {
    setSairConfirmOpen(false);
    setLoggedInUser(null);
    setIsAdmin(false);
    localStorage.removeItem("loggedInUser");
    console.log("Usuário deslogado");
  };

  const handleCadastro = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      senha,
      telefone,
      cep,
      cpf,
      isAdmin,
    };
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    setLoggedInUser(newUser);
    setEmail('');
    setSenha('');
    setTelefone('');
    setCep('');
    setCpf('');
    setIsAdmin(false);
    setCadastroOpen(false);
  };

  return (
    <header>
      <div className="top-section">
        <img src={"logo.png"} alt="Logo" />
        <div className="account-menu" onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
          <VscAccount className="account-icon" />
          {menuOpen && (
            <ul className="dropdown-menu">
              {!loggedInUser ? (
                <>
                  <li>
                    <Link onClick={() => { setLoginOpen(true); setMenuOpen(false); }}>Login</Link>
                  </li>
                  <li>
                    <Link onClick={() => { setCadastroOpen(true); setMenuOpen(false); }}>Cadastro</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/perfil" onClick={() => setMenuOpen(false)}>Perfil</Link>
                  </li>
                  <li>
                    <Link className="sair-link" onClick={() => { setSairConfirmOpen(true); setMenuOpen(false); }}>Sair</Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Impacto">Impacto</Link></li>
          <li><Link to="/Solucoes">Soluções</Link></li>
          <li><Link to="/Agendamentos">Agendamentos</Link></li>
          <li><Link to="/PontosColeta">Pontos de Coleta</Link></li>
          {/* O link "Cadastrar Pontos de Coleta" aparece apenas para administradores */}
          {isAdmin && (
            <li><Link to="/CadastrarPontosColeta">Cadastrar Ponto de Coleta</Link></li>
          )}
        </ul>
      </nav>

      {/* Modal de Login e Cadastro não inclui "Cadastrar Ponto de Coleta" */}
      {isLoginOpen && <Modal title="Login" onClose={() => setLoginOpen(false)} />}
      {isCadastroOpen && <Modal title="Cadastro" onClose={() => setCadastroOpen(false)} />}
      {isSairConfirmOpen && <ConfirmacaoSair onConfirm={handleConfirmSair} onCancel={() => setSairConfirmOpen(false)} />}
    </header>
  );
}

export default Header;
