function impacto () {
    return(
        
        <body>
        <div className="impacto">
        <header>
          <img src={Logo} alt="Logo" title="Logo do Projeto" />
          <h1>Impacto Ambiental</h1>
          <nav>
              <ul>
                  <li><a href="impacto.html"> Impacto Ambiental </a></li>
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
  
      <footer>
              <p>&copy; 2024 - VenceMED</p>
      </footer>
      </div>
  </body>

    );
}

export default impacto