import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../componente/ModalContext"; // Importando o contexto
import Modal from '../componente/Modal';
import ConfirmacaoSair from '../componente/ConfirmacaoSair';
import axios from 'axios';
import "../layout/Header.modules.css";
import { VscAccount } from 'react-icons/vsc';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCadastroOpen, setCadastroOpen] = useState(false);
  const [isSairConfirmOpen, setSairConfirmOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
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

  const handleCadastro = async (e) => {
    e.preventDefault();
    const newUser = {
      nome,
      email,
      senha,
      telefone,
      cep,
      cpf,
      isAdmin,
    };

    try {
      await axios.post('http://localhost:8080/usuarios', newUser); // Ajuste a URL conforme necessário
      localStorage.setItem("usuarioLogado", JSON.stringify(newUser)); // Salva no localStorage para persistência
      setUsuarioLogado(newUser);
      alert("Cadastro realizado com sucesso!");
      setCadastroOpen(false);
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
      alert("Erro ao cadastrar. Tente novamente.");
    } finally {
      // Limpa os campos após o cadastro
      setNome('');
      setEmail('');
      setSenha('');
      setTelefone('');
      setCep('');
      setCpf('');
      setIsAdmin(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário
    if (email.trim() === '' || senha.trim() === '') {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/usuarios/login', { email, senha }); // Ajuste a URL conforme necessário
      const usuarioEncontrado = response.data;

      if (usuarioEncontrado) {
        setUsuarioLogado(usuarioEncontrado);
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
        closeLoginModal(); // Fecha o modal após login
        alert("Login realizado com sucesso!");
      } else {
        alert("Email ou senha incorretos");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      alert("Erro ao realizar login. Verifique seu email e senha.");
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
              value={nome}
              onChange={(e) => setNome(e.target.value)}
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
              maxLength={14}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Digite seu telefone"
              required
            />
            <label>CEP:</label>
            <input
              type="text"
              value={cep}
              maxLength={8}
              onChange={(e) => setCep(e.target.value)}
              placeholder="Digite seu CEP"
              required
            />
            <label>CPF:</label>
            <input
              type="text"
              value={cpf}
              maxLength={11}
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