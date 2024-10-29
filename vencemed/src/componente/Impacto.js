import React from "react";
import "../layout/Impacto.css";
import wavesImage from '../img/wave.webp'

function Impacto() {
  return (
    <div className="impacto-container">
      <div className="hero-contente">
        <h1 className="hero-title">Impacto Ambiental do Descarte Inadequado</h1>
        <p className="hero-description">
          O descarte inadequado de medicamentos vencidos ou não utilizados pode gerar danos significativos ao meio ambiente.
        </p>
      </div>

      <div className="info-section">
        <h2>
        Perigos do Descarte Inadequado de Medicamentos: Impactos no Meio Ambiente e na Saúde Pública
        </h2>
        <hr />
      
      </div>

      {/* Estrutura da imagem central com as seções laterais */}
      <div className="imagee-structure">

        <div className="sides-section">
          <h3>Impactos</h3>
          <p>1-Contaminação de recursos hídricos: Medicamentos descartados no lixo comum ou no esgoto acabam contaminando rios, lagos e oceanos.</p>
          <p>2-Efeitos na saúde pública: O descarte inadequado de medicamentos favorece o acesso indevido a esses produtos, como em lixões ou aterros sanitários, onde pessoas e animais podem consumi-los de maneira inadequada. </p>
          <p>3-Riscos para o solo e para a agricultura: Isso pode afetar a qualidade dos alimentos e prejudicar a saúde humana e animal</p>
        </div>

        <div className="center-image">
        </div>

        <div className="rights-section">
          <h3>Descarte Inadequado</h3>
          <p>
          Jogar esses medicamentos no lixo comum ou na descarga sanitária pode liberar substâncias químicas nocivas ao solo, à fauna e à saúde pública, afetando qualquer um que entrar em contato com áreas contaminadas.
        </p>
        <p>
          Ao ser descartado pela rede de esgoto, os medicamentos também afetam a qualidade da água. Diferentes tipos de medicamentos apresentam riscos variados, dependendo de suas características, como inflamabilidade, corrosividade, reatividade e toxicidade.
        </p>
      
        </div>

      </div>

         {/* Imagem de onda acima da estrutura da imagem */}
         <img src={wavesImage} alt="Onda" className="waves-image" />

    </div>
  );
}

export default Impacto;
