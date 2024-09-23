import React from "react";
import "./layout/Home.css"; // Certifique-se de adicionar o arquivo de estilo

function Home() {
  return (
    <div className="Home">
      <section id="somos" className="section">
        <h1>Quem somos e o que fazemos?</h1>
        <p>
          Somos a <strong>VENCEMED</strong>, uma equipe dedicada à conscientização e ao agendamento de serviços, com o objetivo de incentivar o descarte responsável de medicamentos vencidos ou sem uso.
        </p>
        <p>
          Nosso sistema de agendamento permite a comunicação entre nossa equipe e os estabelecimentos de pontos de coleta, cadastrados em nosso site. Estes estabelecimentos recebem as solicitações de coleta dos clientes, com informações como data e local, e enviam seus serviços de logística para buscar os medicamentos diretamente na residência dos clientes.
        </p>
      </section>

      <hr className="section-divider" />

      <section id="perigos" className="section">
        <h2>Perigos do Descarte Inadequado</h2>
        <p>
          O descarte de embalagens e remédios em lixo comum ou esgoto pode gerar sérios riscos à saúde pública e ao meio ambiente, contribuindo para a contaminação de rios, oceanos e alimentos.
        </p>
        <ul>
          <li>Contaminação de cursos d'água e do solo</li>
          <li>Riscos à saúde humana e animal</li>
          <li>Proliferação de doenças e resistência a antibióticos</li>
        </ul>
      </section>

      <hr className="section-divider" />

      <section id="dicas" className="section">
        <h2>Dicas para Descarte Seguro</h2>
        <ul>
          <li>Retire a embalagem original e esconda informações pessoais.</li>
          <li>Leve os medicamentos a pontos de coleta autorizados.</li>
          <li>Não jogue remédios no vaso sanitário ou na pia.</li>
        </ul>
      </section>

      <hr className="section-divider" />

      <section id="estatisticas" className="section">
        <h2>Impacto do Descarte Inadequado</h2>
        <p>
          Sabia que cerca de <strong>30% dos medicamentos</strong> não utilizados são descartados de forma incorreta, aumentando os riscos de contaminação ambiental?
        </p>
      </section>
    </div>
  );
}

export default Home;
