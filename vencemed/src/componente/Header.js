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

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser && storedUser.email === email && storedUser.senha === senha) {
      setLoggedInUser(storedUser);
      setLoginOpen(false);
    } else {
      alert("Email ou senha incorretos");
    }
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
          {isAdmin && (
            <li><Link to="/CadastrarPontosColeta">Cadastrar Ponto de Coleta</Link></li>
          )}
        </ul>
      </nav>

      {/* Modal de Login */}
      {isLoginOpen && (
        <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>Email ou Nome de Usuário:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email ou nome de usuário"
              required
            />
            <label>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
            <button type="submit" className="login-button">Entrar</button>
          </form>
        </Modal>
      )}

      {/* Modal de Cadastro */}
      {isCadastroOpen && (
        <Modal isOpen={isCadastroOpen} onClose={() => setCadastroOpen(false)}>
          <h2>Cadastro</h2>
          <form onSubmit={handleCadastro} className="form-cadastro">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
            <label>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
            <label>Telefone:</label>
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Digite seu telefone"
              required
            />
            <label>CEP:</label>
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="Digite seu CEP"
              required
            />
            <label>CPF:</label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="Digite seu CPF"
              required
            />
            <button type="submit" className="cadastro-button">Cadastrar</button>
          </form>
        </Modal>
      )}

      {isSairConfirmOpen && (
        <ConfirmacaoSair onConfirm={handleConfirmSair} onCancel={() => setSairConfirmOpen(false)} />
      )}
    </header>
  );
}

export default Header;
