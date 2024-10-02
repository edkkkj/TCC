import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Adicione os novos ícones
import "../layout/Home.css"; // Certifique-se de adicionar o arquivo de estilo

function Home() {
  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="hero-title">Bem-vindo à VENCEMED!</h1>
        <p className="hero-description">
          Sua solução para o descarte responsável de medicamentos.
        </p>
      </div>

      <div className="icon-section">
        <div className="icon-item">
          <FaFacebook className="social-icon" />
          <h3>Impacto</h3>
          <p>Descarte inadequado contamina o ambiente.</p>
        </div>

        <div className="icon-item">
          <FaInstagram className="social-icon" />
          <h3>Como Descartar</h3>
          <p>Leve a medicamentos aos pontos de coleta.</p>
        </div>

        <div className="icon-item">
          <FaTwitter className="social-icon" />
          <h3>Soluções</h3>
          <p>Educação é chave para minimizar riscos.</p>
        </div>

        <div className="icon-item">
          <FaLinkedin className="social-icon" />
          <h3>Pontos de Coleta</h3>
          <p>Encontre locais para descarte seguro.</p>
        </div>
      </div>

      {/* Resto do conteúdo */}
      <div className="info-content">
        <h2>Informações</h2>
        <p>
          Estamos aqui para ajudar você a entender a importância do descarte
          responsável de medicamentos.
        </p>
      </div>
    </div>
  );
}

export default Home;
