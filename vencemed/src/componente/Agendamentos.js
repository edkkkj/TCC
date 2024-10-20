// src/pages/Agendamentos.js
import React, { useEffect, useState, useContext } from "react";
import { ModalContext } from "../componente/ModalContext"; // Certifique-se de que o caminho está correto
import Modal from "./Modal";
import "../layout/Agendamentos.css";

function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [isLogado, setIsLogado] = useState(false);
  const { openLoginModal } = useContext(ModalContext); // Acessando a função do contexto

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    setIsLogado(!!usuarioLogado);
    if (usuarioLogado) {
      const agendamentosSalvos = JSON.parse(localStorage.getItem("agendamentos")) || [];
      setAgendamentos(agendamentosSalvos);
    }
  }, []);

  return (
    <div className="Agendamentos">
      <h1>Meus Agendamentos</h1>
      <div className="agendamentos-section">
        {/* Se não estiver logado, exibe o botão de login */}
        {!isLogado ? (
          <div className="login-prompt">
            <p>Você não está logado.</p>
            <button onClick={openLoginModal} className="login-button">Fazer Login</button>
          </div>
        ) : agendamentos.length === 0 ? (
          <p className="sem-agendamentos">Você não tem agendamentos no momento.</p>
        ) : (
          <ul className="agendamentos-list">
            {agendamentos.map((agendamento, index) => (
              <li key={index}>
                <strong>Local:</strong> {agendamento.ponto.nome},<br />
                <strong>Data:</strong> {agendamento.data},<br />
                <strong>Horário:</strong> {agendamento.hora}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Agendamentos;
