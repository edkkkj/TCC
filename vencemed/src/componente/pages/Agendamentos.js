import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./layout/Agendamentos.css"; // Certifique-se de criar ou ajustar o CSS

function Agendamentos() {
  const location = useLocation();
  const { state } = location;

  const [agendamentos, setAgendamentos] = useState(() => {
    return JSON.parse(localStorage.getItem("agendamentos")) || [];
  });

  useEffect(() => {
    if (state?.agendamento) {
      setAgendamentos((prevAgendamentos) => [...prevAgendamentos, state.agendamento]);
    }
  }, [state]);

  return (
    <div className="Agendamentos">
      <section className="agendamentos-section">
        <h2>Agendamentos de Descarte de Medicamentos</h2>
        <p>
          Organize o seu descarte de medicamentos vencidos de forma segura e responsável. 
          Aqui estão seus agendamentos:
        </p>
        
        {agendamentos.length > 0 ? (
          <div className="agendamentos-list">
            <h3>Meus Agendamentos</h3>
            <ul>
              {agendamentos.map((agendamento) => (
                <li key={agendamento.id}>
                  Local: {agendamento.ponto.nome}, Data: {agendamento.data}, Horário: {agendamento.hora}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Você ainda não tem agendamentos.</p>
        )}
        
        <Link to="/PontosColeta">
          <button className="agendar-button">Fazer Agendamentos</button>
        </Link>
      </section>
    </div>
  );
}

export default Agendamentos;
