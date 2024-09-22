import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <section id="perigos">
        <h2>Perigos do Descarte Inadequado</h2>
        <p>O descarte de embalagens e remédios em lixo comum ou esgoto pode causar sérios riscos à saúde pública e ao meio ambiente, contribuindo para a contaminação de rios, oceanos e alimentos.</p>
        <ul>
          <li>Contaminação de cursos d'água e do solo</li>
          <li>Riscos à saúde humana e animal</li>
          <li>Proliferação de doenças e resistência a antibióticos</li>
        </ul>
      </section>

      <section id="dicas">
        <h2>Dicas para Descarte Seguro</h2>
        <ul>
          <li>Retire a embalagem original e esconda informações pessoais.</li>
          <li>Leve os medicamentos a pontos de coleta autorizados.</li>
          <li>Não jogue remédios no vaso sanitário ou na pia.</li>
        </ul>
      </section>

      <section id="acao">
        <h2>Participe da Mudança!</h2>
        <p>Descubra onde descartar seus medicamentos de forma segura.</p>
        <Link to="/PontosColeta" className="button">Encontre Pontos de Coleta</Link>
      </section>

      <section id="estatisticas">
        <h2>Impacto do Descarte Inadequado</h2>
        <p>Sabia que cerca de 30% dos medicamentos não utilizados são descartados incorretamente?</p>
      </section>

      <section id="testemunhos">
        <h2>O que as pessoas estão dizendo</h2>
        <blockquote>
          <p>"Aprendi como descartar medicamentos de forma segura e agora sempre faço isso!" - Maria S.</p>
        </blockquote>
      </section>

      <section id="imagem-impacto">
        <h2>Visualize o Impacto</h2>
        <img src="url-da-imagem" alt="Impacto do descarte inadequado" />
      </section>
    </div>
  );
}

export default Home;
