import React, { useState } from "react";
import "../pages/layout/PontosColeta.css"; // Arquivo de estilo CSS para melhorar o visual

const PontosColeta = () => {
  const [pontos, setPontos] = useState(() => {
    return JSON.parse(localStorage.getItem("pontosDeColeta")) || [];
  });
  const [novoPonto, setNovoPonto] = useState({
    nome: "",
    endereco: "",
    lat: "",
    lng: "",
  });

  const handleChange = (e) => {
    setNovoPonto({ ...novoPonto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoPontoDeColeta = {
      ...novoPonto,
      id: new Date().getTime(), // Gera um ID único para cada ponto
    };
    const pontosAtualizados = [...pontos, novoPontoDeColeta];
    setPontos(pontosAtualizados);
    localStorage.setItem("pontosDeColeta", JSON.stringify(pontosAtualizados));
    setNovoPonto({ nome: "", endereco: "", lat: "", lng: "" });
    alert("Ponto de coleta cadastrado com sucesso!");
  };

  return (
    <div className="PontosColeta">
      <section className="cadastro-section">
        <h1>Cadastrar Ponto de Coleta</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={novoPonto.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Endereço:</label>
            <input
              type="text"
              name="endereco"
              value={novoPonto.endereco}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Latitude:</label>
            <input
              type="text"
              name="lat"
              value={novoPonto.lat}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Longitude:</label>
            <input
              type="text"
              name="lng"
              value={novoPonto.lng}
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit-button" type="submit">
            Cadastrar Ponto de Coleta
          </button>
        </form>
      </section>

      <section className="pontos-section">
        <h2>Pontos de Coleta Cadastrados</h2>
        <ul className="pontos-list">
          {pontos.length > 0 ? (
            pontos.map((ponto) => (
              <li key={ponto.id}>
                <strong>{ponto.nome}</strong> - {ponto.endereco} <br />
                <em>(Lat: {ponto.lat}, Lng: {ponto.lng})</em>
              </li>
            ))
          ) : (
            <p>Nenhum ponto de coleta cadastrado ainda.</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default PontosColeta;
