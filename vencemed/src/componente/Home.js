import React from "react";
import { MdLocationOn } from "react-icons/md"; 
import { MdRecycling } from "react-icons/md";
import { IoMdWarning } from "react-icons/io";
import { HiLightBulb } from "react-icons/hi";
import waveImage from '../img/wave.webp'; // Caminho da imagem de ondulação
import "../layout/Home.css"; 

function Home() {
  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="hero-title">Bem-vindo à VENCEMED!</h1>
        <p className="hero-description">
          Sua solução para o descarte responsável de medicamentos.
        </p>
      </div>

      <div className="icone-section">
        <div className="icone-item">
          <IoMdWarning className="social-icone" />
          <h3>Impacto</h3>
          <p>Descarte inadequado contamina o ambiente.</p>
        </div>

        <div className="icone-item">
          <MdRecycling className="social-icone" />
          <h3>Como Descartar</h3>
          <p>Leve a medicamentos aos pontos de coleta.</p>
        </div>

        <div className="icone-item">
          <HiLightBulb className="social-icone" />
          <h3>Soluções</h3>
          <p>Educação é chave para minimizar riscos.</p>
        </div>

        <div className="icone-item">
          <MdLocationOn className="social-icone" />
          <h3>Pontos de Coleta</h3>
          <p>Encontre locais para descarte seguro.</p>
        </div>
      </div>


      {/* Estrutura da imagem central com as seções laterais */}
      <div className="image-structure">

        <div className="side-section">
          <h3>importância de Descartar corretamente</h3>
        </div>

        <div className="center-image">
        </div>

        <div className="right-section">
          <h3>Riscos e Maleficios</h3>
        </div>

      </div>

         {/* Imagem de onda acima da estrutura da imagem */}
         <img src={waveImage} alt="Onda" className="wave-image" />

      <div className="info-content">
        <h2>Quem somos e oque fazemos?</h2>
        <p>
        Somos a VENCEMED, uma equipe de conscientização e agendamento de serviços afim de incentivar o descarte consciente de medicamentos vencidos ou sem uso.
        </p>
        <p>
        O agendamento funciona com a comunicação de nossa equipe com os estabelecimentos de pontos de coleta que buscaram nosso serviço, estando cadastrados em nosso site informando a eles pedidos para coleta de cliente que selecionaram seu estabelecimento. Tendo as informações do pedido como data, local e etc, enviam seus serviço de logística para buscar o medicamento na residência do cliente.
        </p>
      </div>
    </div>
  );
}

export default Home;
