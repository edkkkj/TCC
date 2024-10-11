import React, { useState, useEffect } from "react";
import "../layout/PontosColeta.css"; // Arquivo de estilo CSS para melhorar o visual

const PontosColeta = () => {
  const [pontos, setPontos] = useState(() => {
    return JSON.parse(localStorage.getItem("pontosDeColeta")) || [];
  });

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setIsAdmin(user ? user.isAdmin : false); // Verifica se o usuário logado é admin
  }, []);

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="hero-title">Pontos de Coleta</h1>
        <p className="hero-description">
          Descarte seu medicamento corretamente levando-a um ponto de coleta.
        </p>
      </div>
      <h1>Pontos de Coleta Cadastrados</h1>
      <section className="pontos-section">
        <ul className="pontos-list">
          {pontos.length > 0 ? (
            pontos.map((ponto) => (
              <li key={ponto.id}>
                <strong>{ponto.nome}</strong> - {ponto.endereco} <br />
                <em>CEP: {ponto.cep}</em> <br />
                <em>Horário: {ponto.horario}</em> <br />
                <em>
                  {ponto.fazAgendamento === "sim"
                    ? "Este ponto de coleta faz agendamento."
                    : "Este ponto de coleta não faz agendamento."}
                </em>
              </li>
            ))
          ) : (
            <p>Nenhum ponto de coleta cadastrado ainda.</p>
          )}
        </ul>
      </section>

      {isAdmin && (
        <div className="cadastro-link">
          <p>
            <strong>Apenas administradores podem cadastrar novos pontos de coleta.</strong>
          </p>
          <button onClick={() => window.location.href = '/CadastrarPontosColeta'}>
            Cadastrar Ponto de Coleta
          </button>
        </div>
      )}
    </div>
  );
};

export default PontosColeta;
