import React, { useState, useEffect } from "react";
import "../layout/CadPontosColeta.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CadPontosColeta = () => {
  const [pontos, setPontos] = useState([]);
  const [novoPonto, setNovoPonto] = useState({
    nome: "",
    endereco: "",
    cep: "",
    horario: "",
    fazAgendamento: false, // Inicializa como booleano
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
      alert("Apenas administradores podem acessar esta página.");
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchPontosColeta = async () => {
      try {
        const response = await axios.get("http://localhost:8080/pontos-coleta");
        setPontos(response.data);
      } catch (error) {
        console.error("Erro ao buscar pontos de coleta", error);
      }
    };
    fetchPontosColeta();
  }, []);

  const handleChange = (e) => {
    setNovoPonto({ ...novoPonto, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    setNovoPonto({ ...novoPonto, fazAgendamento: e.target.value === "true" });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pontoParaSalvar = { 
      ...novoPonto, 
      horarioFuncionamento: novoPonto.horario,
      temServicosAgendamento: novoPonto.fazAgendamento // Envia para o backend
    };
    
    try {
      if (isEditing) {
        await axios.put(`http://localhost:8080/pontos-coleta/${editId}`, pontoParaSalvar);
        alert("Ponto de coleta atualizado com sucesso!");
      } else {
        await axios.post("http://localhost:8080/pontos-coleta", pontoParaSalvar);
        alert("Ponto de coleta cadastrado com sucesso!");
      }
  
      setNovoPonto({ nome: "", endereco: "", cep: "", horario: "", fazAgendamento: false });
      setIsEditing(false);
      setEditId(null);
  
      const response = await axios.get("http://localhost:8080/pontos-coleta");
      setPontos(response.data);
    } catch (error) {
      console.error("Erro ao salvar ponto de coleta", error);
      alert("Erro ao salvar ponto de coleta.");
    }
  };

  const handleEdit = (id) => {
    const ponto = pontos.find((ponto) => ponto.id === id);
    setNovoPonto({
      nome: ponto.nome,
      endereco: ponto.endereco,
      cep: ponto.cep,
      horario: ponto.horarioFuncionamento,
      fazAgendamento: ponto.temServicosAgendamento, // Recebe o valor booleano
    });
    setIsEditing(true);
    setEditId(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/pontos-coleta/${id}`);
      alert("Ponto de coleta excluído com sucesso!");

      const response = await axios.get("http://localhost:8080/pontos-coleta");
      setPontos(response.data);
    } catch (error) {
      console.error("Erro ao excluir ponto de coleta", error);
      alert("Erro ao excluir ponto de coleta.");
    }
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
              maxLength={8}
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
                  value="true" // Muda o valor para booleano
                  checked={novoPonto.fazAgendamento === true}
                  onChange={handleRadioChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="fazAgendamento"
                  value="false" // Muda o valor para booleano
                  checked={novoPonto.fazAgendamento === false}
                  onChange={handleRadioChange}
                />
                Não
              </label>
            </div>
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
          <em>Horário: {ponto.horarioFuncionamento}</em> <br />
          <em>
            {ponto.temServicosAgendamento
              ? "Este Ponto de Coleta faz agendamento" 
              : "Este Ponto de Coleta não faz agendamento"} 
          </em>
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
