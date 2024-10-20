import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../componente/ModalContext"; // Importando o contexto
import Modal from '../componente/Modal';
import ConfirmacaoSair from '../componente/ConfirmacaoSair';
import "../layout/Header.modules.css";
import { VscAccount } from 'react-icons/vsc';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCadastroOpen, setCadastroOpen] = useState(false);
  const [isSairConfirmOpen, setSairConfirmOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  // Acessando o contexto de modal para abrir o modal de login
  const { openLoginModal, closeLoginModal, isLoginModalOpen } = useContext(ModalContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (user) {
      setUsuarioLogado(user);
      setIsAdmin(user.isAdmin);
    }
  }, []);

  const handleConfirmSair = () => {
    setSairConfirmOpen(false);
    setUsuarioLogado(null);
    setIsAdmin(false);
    localStorage.removeItem("usuarioLogado");
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
      nomeUsuario,
      isAdmin,
    };

    const usuariosExistentes = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuariosExistentes.push(newUser);
    localStorage.setItem("usuarios", JSON.stringify(usuariosExistentes));
    localStorage.setItem("usuarioLogado", JSON.stringify(newUser));

    setUsuarioLogado(newUser);
    setEmail('');
    setSenha('');
    setTelefone('');
    setCep('');
    setCpf('');
    setNomeUsuario('');
    setIsAdmin(false);
    setCadastroOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário
    if (email.trim() === '' || senha.trim() === '') {
      alert("Preencha todos os campos!");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioEncontrado = usuarios.find(user => user.email === email && user.senha === senha);

    if (usuarioEncontrado) {
      setUsuarioLogado(usuarioEncontrado);
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
      closeLoginModal(); // Fecha o modal após login
      alert("Login realizado com sucesso!");
    } else {
      alert("Email ou senha incorretos");
    }
  };

  const openLoginModalHandler = () => {
    openLoginModal();
    setMenuOpen(false); // Fecha o menu ao abrir o modal de login
  };

  return (
    <header>
      <div className="top-section">
        <img src={"logo.png"} alt="Logo" />
        <div className="account-menu" onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
          <VscAccount className="account-icon" />
          {menuOpen && (
            <ul className="dropdown-menu">
              {!usuarioLogado ? (
                <>
                  <li>
                    <Link to="#" onClick={openLoginModalHandler}>Login</Link>
                  </li>
                  <li>
                    <Link onClick={() => { setCadastroOpen(true); setMenuOpen(false); }}>Cadastro</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/Perfil" onClick={() => setMenuOpen(false)}>Perfil</Link>
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
      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="text"
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
          <button type="submit" className="login-button">Entrar</button>
        </form>
      </Modal>

      {/* Modal de Cadastro */}
      {isCadastroOpen && (
        <Modal isOpen={isCadastroOpen} onClose={() => setCadastroOpen(false)}>
          <h2>Cadastro</h2>
          <form onSubmit={handleCadastro} className="form-cadastro">
            <label>Nome de Usuário:</label>
            <input
              type="text"
              value={nomeUsuario}
              onChange={(e) => setNomeUsuario(e.target.value)}
              placeholder="Digite seu nome de usuário"
              required
            />
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
