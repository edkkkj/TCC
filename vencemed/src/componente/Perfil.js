import React, { useState, useEffect } from 'react';
import "../layout/Perfil.modules.css";

function Perfil() {
  const [userData, setUserData] = useState({
    email: '',
    telefone: '',
    cep: '',
    cpf: '',
    isAdmin: false,
  });

  useEffect(() => {
    // Simula carregamento dos dados do perfil do localStorage
    const storedUserData = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Atualiza os dados do perfil no localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userData));
    alert('Perfil atualizado com sucesso!');
  };

  return (
    <div className="perfil-container">
      <h2>Meu Perfil</h2>
      <div className="perfil-info">
        <div className="info-item">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="info-item">
          <label>Telefone:</label>
          <input
            type="tel"
            name="telefone"
            value={userData.telefone}
            onChange={handleChange}
          />
        </div>
        <div className="info-item">
          <label>CEP:</label>
          <input
            type="text"
            name="cep"
            value={userData.cep}
            onChange={handleChange}
          />
        </div>
        <div className="info-item">
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={userData.cpf}
            onChange={handleChange}
          />
        </div>
        <div className="info-item">
          <label>Admin:</label>
          <input
            type="checkbox"
            name="isAdmin"
            checked={userData.isAdmin}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                isAdmin: e.target.checked,
              }))
            }
          />
        </div>
        <button className="save-button" onClick={handleSave}>
          Salvar Alterações
        </button>
      </div>
    </div>
  );
}

export default Perfil;
