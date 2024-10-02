import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from '../componente/Modal'; // Importa o modal usado para login
import "../layout/Agendamentos.css";

function Agendamentos() {
  const navigate = useNavigate();
  const [agendamentos, setAgendamentos] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState(null); // Simulação de verificação de login
  const [isLoginOpen, setLoginOpen] = useState(false); // Controle do modal de login

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (usuario) {
      setUsuarioLogado(usuario);
      const todosAgendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
      const agendamentosUsuario = todosAgendamentos.filter(
        (agendamento) => agendamento.usuarioId === usuario.id
      );
      setAgendamentos(agendamentosUsuario);
    }
  }, []);

  const handleLoginRedirect = () => {
    setLoginOpen(true); // Abre o modal de login
  };

  return (
    <div className="Agendamentos">
      <section className="titulo">
      <h2>Meus Agendamentos</h2>
      </section>
      <section className="agendamentos-section">
        {usuarioLogado ? (
          <>
            {agendamentos.length > 0 ? (
              <ul className="agendamentos-list">
                {agendamentos.map((agendamento) => (
                  <li key={agendamento.id}>
                    <strong>Local:</strong> {agendamento.ponto.nome},<br />
                    <strong>Data:</strong> {agendamento.data},<br />
                    <strong>Horário:</strong> {agendamento.hora}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Sem agendamentos.</p>
            )}
          </>
        ) : (
          <div className="login-prompt">
            <p>Você está logado?</p>
            <button onClick={handleLoginRedirect} className="login-button">
              Ir para Login
            </button>
          </div>
        )}
      </section>

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
    </div>
  );
}

export default Agendamentos;
