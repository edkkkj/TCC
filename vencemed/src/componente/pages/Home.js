import React from "react";
import "../../App.css"
import Header from './layout/Header'
import Footer from "./layout/Footer";

function Home() {
  return (
    <div className="Home">
      <body>

      <Header>
      </Header>
 

        <section id="perigos">
        <h2>Perigos do Descarte Inadequado</h2>
        <p>O descarte de embalagens e remédios em lixo comum ou esgoto pode causar sérios riscos à saúde pública e ao meio ambiente, contribuindo para a contaminação de rios, oceanos e alimentos.</p>
        <ul>
            <li>Contaminação de cursos d'água e do solo</li>
            <li>Riscos à saúde humana e animal</li>
            <li>Proliferação de doenças e resistência a antibióticos</li>
        </ul>
    </section>

    <Footer>
      
    </Footer>

</body>
    </div>
  );
}

export default Home