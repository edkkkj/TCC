import React, { useState, useEffect } from "react";
import "../layout/PontosColeta.css"; // Arquivo de estilo CSS para melhorar o visual
import axios from "axios"; // Certifique-se de instalar o axios

const PontosColeta = () => {
  const [pontos, setPontos] = useState([]);

  const [isAdmin, setIsAdmin] = useState(false);

  // Carregar os pontos de coleta do backend
  useEffect(() => {
    const fetchPontosColeta = async () => {
      try {
        const response = await axios.get("http://localhost:8080/pontos-coleta"); // Ajuste a URL para seu backend
        setPontos(response.data);
      } catch (error) {
        console.error("Erro ao buscar pontos de coleta", error);
      }
    };

    fetchPontosColeta();
  }, []);

  // Verificar se o usuário logado é admin
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (user && user.isAdmin) {
      setIsAdmin(true); // Define isAdmin como true apenas se o usuário estiver logado e for admin
    } else {
      setIsAdmin(false); // Garante que não será admin se não estiver logado ou não for admin
    }
  }, []);

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="hero-title">Pontos de Coleta</h1>
        <p className="hero-description">
          Descarte seu medicamento corretamente levando-o a um ponto de coleta.
        </p>
      </div>
      <h1>Pontos de Coleta</h1>
      <section className="pontos-section">
        <ul className="pontos-list">
          {pontos.length > 0 ? (
            pontos.map((ponto) => (
              <li key={ponto.id}>
                <strong>{ponto.nome}</strong> - {ponto.endereco} <br />
                <em>CEP: {ponto.cep}</em> <br />
                <em>Horário: {ponto.horarioFuncionamento}</em> <br />
                <em>
                  {ponto.temServicosAgendamento 
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

      {/* Verifica se o usuário está logado como admin para exibir o botão */}
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
