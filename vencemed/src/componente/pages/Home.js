import React from "react";
import Logo from "../../img/logo.png"
import "../../App.css"

function Home() {
  return (
    <div className="Home">
      <body>

      <header>
        <img src={Logo} alt="Logo" title="Logo do Projeto" />
        <h1>Conscientização sobre o Descarte de Medicamentos</h1>
        <nav>
            <ul>
                <li><a> Impacto Ambiental </a></li>
                <li><a href="perigos.html">Perigos do Descarte Inadequado</a></li>
                <li><a href="solucoes.html">Soluções</a></li>
            </ul>
        </nav>
        </header>

        <section id="perigos">
        <h2>Perigos do Descarte Inadequado</h2>
        <p>O descarte de embalagens e remédios em lixo comum ou esgoto pode causar sérios riscos à saúde pública e ao meio ambiente, contribuindo para a contaminação de rios, oceanos e alimentos.</p>
        <ul>
            <li>Contaminação de cursos d'água e do solo</li>
            <li>Riscos à saúde humana e animal</li>
            <li>Proliferação de doenças e resistência a antibióticos</li>
        </ul>
    </section>

</body>
    </div>
  );
}

export default Home