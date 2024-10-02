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
    <div className="PontosColeta">
      <h1>Pontos de Coleta Cadastrados</h1>
      <section className="pontos-section">
        <ul className="pontos-list">
          {pontos.length > 0 ? (
            pontos.map((ponto) => (
              <li key={ponto.id}>
                <strong>{ponto.nome}</strong> - {ponto.endereco} <br />
                <em>CEP: {ponto.cep}</em> <br />
                <em>Horário: {ponto.horario}</em>
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
          <button onClick={() => window.location.href = '/CadastrarPontoColeta'}>
            Cadastrar Ponto de Coleta
          </button>
        </div>
      )}
    </div>
  );
};

export default PontosColeta;
