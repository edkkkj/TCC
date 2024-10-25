import React, { useState, useEffect } from 'react';
import "../layout/Perfil.modules.css";

function Perfil() {
  const [userData, setUserData] = useState({
    id: null, // Certifique-se de que o ID é carregado
    email: '',
    senha: '',
    telefone: '',
    cep: '',
    cpf: '',
    isAdmin: false,
  });

  useEffect(() => {
    // Carrega os dados do perfil do localStorage
    const storedUserData = JSON.parse(localStorage.getItem('usuarioLogado'));
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

  const handleSave = async () => {
    try {
      // Verifica se o ID está presente antes de fazer a requisição PUT
      if (userData.id) {
        const response = await fetch(`http://localhost:8080/usuarios/${userData.id}`, {
          method: 'PUT', // PUT para atualizar
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData), // Envia os dados atualizados
        });

        if (response.ok) {
          const updatedUser = await response.json();
          localStorage.setItem('usuarioLogado', JSON.stringify(updatedUser)); // Atualiza o localStorage
          alert('Perfil atualizado com sucesso!');
        } else {
          alert('Erro ao atualizar o perfil!');
        }
      } else {
        alert('ID de usuário não encontrado. Verifique o carregamento dos dados.');
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
      alert('Erro ao conectar com o servidor!');
    }
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
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={userData.senha}
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
