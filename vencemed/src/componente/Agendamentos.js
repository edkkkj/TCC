import React, { useState, useEffect } from "react";
import Modal from '../componente/Modal';
import "../layout/Agendamentos.css";

function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

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

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="hero-title">Veja seus agendamentos realizados</h1>
        <p className="hero-description">
          Entre na mesma conta que você realizou um agendamento no nosso app.
        </p>
      </div>
      <section className="titulo">
        <h2>Meus Agendamentos</h2>
      </section>
      <section className="agendamentos-section">
        {usuarioLogado ? (
          agendamentos.length > 0 ? (
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
          )
        ) : (
          <p>Você não está logado.</p>
        )}
      </section>
    </div>
  );
}

export default Agendamentos;