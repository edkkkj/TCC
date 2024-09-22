import React, { useState } from 'react';
import './Perfil.modules.css';

function Perfil() {
  const [userData, setUserData] = useState({
    nome: "João Silva",
    email: "joao.silva@example.com",
    telefone: "(11) 99999-9999",
    cep: "12345-678",
    cpf: "123.456.789-00"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="perfil-container">
      <h2>Perfil do Usuário</h2>
      <div className="perfil-info">
        <div className="info-item">
          <label><strong>Nome:</strong></label>
          <input
            type="text"
            name="nome"
            value={userData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="info-item">
          <label><strong>Email:</strong></label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="info-item">
          <label><strong>Telefone:</strong></label>
          <input
            type="tel"
            name="telefone"
            value={userData.telefone}
            onChange={handleChange}
          />
        </div>
        <div className="info-item">
          <label><strong>CEP:</strong></label>
          <input
            type="text"
            name="cep"
            value={userData.cep}
            onChange={handleChange}
          />
        </div>
        <div className="info-item">
          <label><strong>CPF:</strong></label>
          <input
            type="text"
            name="cpf"
            value={userData.cpf}
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="save-button">Salvar Alterações</button>
    </div>
  );
}

export default Perfil;
