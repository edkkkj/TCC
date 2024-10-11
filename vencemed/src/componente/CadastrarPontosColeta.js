import React, { useState, useEffect } from "react";
import "../layout/CadPontosColeta.css";
import { useNavigate } from "react-router-dom";

const CadPontosColeta = () => {
  const [pontos, setPontos] = useState(() => {
    return JSON.parse(localStorage.getItem("pontosDeColeta")) || [];
  });
  const [novoPonto, setNovoPonto] = useState({
    nome: "",
    endereco: "",
    cep: "",
    horario: "",
    fazAgendamento: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.isAdmin) {
      setIsAdmin(true);
    } else {
      alert('Apenas administradores podem acessar esta página.');
      navigate('/');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setNovoPonto({ ...novoPonto, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    setNovoPonto({ ...novoPonto, fazAgendamento: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const pontosAtualizados = pontos.map((ponto) =>
        ponto.id === editId ? { ...ponto, ...novoPonto } : ponto
      );
      setPontos(pontosAtualizados);
      localStorage.setItem("pontosDeColeta", JSON.stringify(pontosAtualizados));
      setIsEditing(false);
      setEditId(null);
      alert("Ponto de coleta atualizado com sucesso!");
    } else {
      const novoPontoDeColeta = {
        ...novoPonto,
        id: new Date().getTime(),
      };
      const pontosAtualizados = [...pontos, novoPontoDeColeta];
      setPontos(pontosAtualizados);
      localStorage.setItem("pontosDeColeta", JSON.stringify(pontosAtualizados));
      alert("Ponto de coleta cadastrado com sucesso!");
    }

    setNovoPonto({ nome: "", endereco: "", cep: "", horario: "", fazAgendamento: "" });
  };

  const handleEdit = (id) => {
    const ponto = pontos.find((ponto) => ponto.id === id);
    setNovoPonto({
      nome: ponto.nome,
      endereco: ponto.endereco,
      cep: ponto.cep,
      horario: ponto.horario,
      fazAgendamento: ponto.fazAgendamento,
    });
    setIsEditing(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const pontosAtualizados = pontos.filter((ponto) => ponto.id !== id);
    setPontos(pontosAtualizados);
    localStorage.setItem("pontosDeColeta", JSON.stringify(pontosAtualizados));
    alert("Ponto de coleta excluído com sucesso!");
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="PontosColeta">
      <section className="cadastro-section">
        <h1>{isEditing ? "Editar Ponto de Coleta" : "Cadastrar Ponto de Coleta"}</h1>
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
            <label>CEP:</label>
            <input
              type="text"
              name="cep"
              value={novoPonto.cep}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Horário de funcionamento:</label>
            <input
              type="text"
              name="horario"
              value={novoPonto.horario}
              onChange={handleChange}
              required
              placeholder="Ex: Segunda a Sexta, 9h às 18h"
            />
          </div>
          <div className="input-group">
            <label>Este ponto de coleta faz agendamento?</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label>
                <input
                  type="radio"
                  name="fazAgendamento"
                  value="sim"
                  checked={novoPonto.fazAgendamento === "sim"}
                  onChange={handleRadioChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="fazAgendamento"
                  value="não"
                  checked={novoPonto.fazAgendamento === "não"}
                  onChange={handleRadioChange}
                />
                Não
              </label>
            </div>
            <p>
              {novoPonto.fazAgendamento === "sim"
                ? "Se sim, este ponto de coleta faz agendamento."
                : novoPonto.fazAgendamento === "não"
                ? "Se não, este ponto de coleta não faz agendamento."
                : ""}
            </p>
          </div>
          <button className="submit-button" type="submit">
            {isEditing ? "Atualizar Ponto de Coleta" : "Cadastrar Ponto de Coleta"}
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
                <em>CEP: {ponto.cep}</em> <br />
                <em>Horário: {ponto.horario}</em> <br />
                <em>{ponto.fazAgendamento === "sim" ? "Este Ponto de Coleta faz agendamento"
                 : "Este Ponto de Coleta não faz agendamento"}</em>
                <div className="actions">
                  <button onClick={() => handleEdit(ponto.id)}>Editar</button>
                  <button onClick={() => handleDelete(ponto.id)}>Excluir</button>
                </div>
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

export default CadPontosColeta;
