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

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleConfirmSair = () => {
    setSairConfirmOpen(false);
    console.log("Usuário deslogado");
  };

  const handleCadastro = (e) => {
    e.preventDefault();
    console.log({
      email,
      senha,
      telefone,
      cep,
      cpf,
      isAdmin,
    });
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
              <li>
                <Link onClick={() => { setLoginOpen(true); setMenuOpen(false); }}>Login</Link>
              </li>
              <li>
                <Link onClick={() => { setCadastroOpen(true); setMenuOpen(false); }}>Cadastro</Link>
              </li>
              <li>
                <Link to="/perfil" onClick={() => setMenuOpen(false)}>Perfil</Link>
              </li>
              <li>
                <Link className="sair-link" onClick={() => { setSairConfirmOpen(true); setMenuOpen(false); }}>Sair</Link>
              </li>
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
          <li><Link to="/PontosColeta">Pontos de Coleta</Link></li> {/* Novo link */}
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
          <form onSubmit={handleCadastro}>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Digite seu email" 
            />
            <label>Senha:</label>
            <input 
              type="password" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              required 
              placeholder="Crie uma senha" 
            />
            <label>Telefone:</label>
            <input 
              type="tel" 
              value={telefone} 
              onChange={(e) => setTelefone(e.target.value)} 
              required 
              placeholder="Digite seu telefone" 
            />
            <label>CEP:</label>
            <input 
              type="text" 
              value={cep} 
              onChange={(e) => setCep(e.target.value)} 
              required 
              placeholder="Digite seu CEP" 
            />
            <label>CPF:</label>
            <input 
              type="text" 
              value={cpf} 
              onChange={(e) => setCpf(e.target.value)} 
              required 
              placeholder="Digite seu CPF" 
            />
            <label>
              <input 
                type="checkbox" 
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)} 
              />
              <div className="Admin">
              Cadastrar como Admin
              </div>
            </label>
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
