import React, { useState } from 'react';
import '../pages/layout/Educacao.modules.css';

function Educacao() {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const toggleArticle = (index, event) => {
    event.preventDefault(); // Previne a atualização da página
    setExpandedArticle(expandedArticle === index ? null : index);
  };

  return (
    <div className="educacao-container">
      <h2>Seção de Educação</h2>
      <div className="artigos">
        <h3>Artigos Recentes</h3>
        <article className="artigo">
          <h4>Ciclo de Vida dos Medicamentos</h4>
          {expandedArticle === 0 && (
            <p>
              Descubra como os medicamentos são produzidos, utilizados e descartados, e o impacto disso no meio ambiente. 
              Entenda as etapas do ciclo, desde a fabricação até o descarte final.
            </p>
          )}
          <a href="#" onClick={(event) => toggleArticle(0, event)} className="read-more">Leia mais</a>
        </article>
        <article className="artigo">
          <h4>Impactos Ambientais do Descarte Inadequado</h4>
          {expandedArticle === 1 && (
            <p>
              Entenda os riscos associados ao descarte inadequado de medicamentos e como isso afeta a saúde pública e o meio ambiente, 
              contribuindo para a poluição e contaminação dos recursos hídricos.
            </p>
          )}
          <a href="#" onClick={(event) => toggleArticle(1, event)} className="read-more">Leia mais</a>
        </article>
        <article className="artigo">
          <h4>Dicas para o Descarte Seguro de Medicamentos</h4>
          {expandedArticle === 2 && (
            <p>
              Aprenda como descartar corretamente medicamentos vencidos ou não utilizados, incluindo orientações sobre pontos de coleta e opções de descarte seguro.
            </p>
          )}
          <a href="#" onClick={(event) => toggleArticle(2, event)} className="read-more">Leia mais</a>
        </article>
      </div>
      [<div className="videos">
        <h3>Vídeos Educativos</h3>
        <div className="video">
          <h4>Como Descartar Medicamentos Corretamente</h4>
          <iframe
            title="Como Descartar Medicamentos Corretamente"
            src="https://youtu.be/10Ovf8MBW-0?si=v3EmCjrRvj8h9hnv"
            allowFullScreen
          />
        </div>
        <div className="video">
          <h4>O Que Fazer com Medicamentos Vencidos?</h4>
          <iframe
            title="O Que Fazer com Medicamentos Vencidos?"
            src="https://www.youtube.com/embed/3D-6P3nvHIE"
            allowFullScreen
          />
        </div>
        <div className="video">
          <h4>Impactos do Descarte Inadequado</h4>
          <iframe
            title="Impactos do Descarte Inadequado"
            src="https://www.youtube.com/embed/k-d2clT9D-g"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default Educacao;
