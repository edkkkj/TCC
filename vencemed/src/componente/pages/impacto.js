import Logo from "../../img/logo.png"

function Impacto () {
    return(
        
        <body>
        <div className="impacto">
        <header>
          <img src={Logo} alt="Logo" title="Logo do Projeto" />
          <h1>Impacto Ambiental</h1>
            <nav>
                <ul>
                    <li><a href="impacto.html">Impacto Ambiental</a></li>
                    <li><a href="perigos.html">Perigos do Descarte Inadequado</a></li>
                    <li><a href="solucoes.html">Soluções</a></li>
                </ul>
            </nav>
        </header>

        <section id="impacto">
            <h2>Impacto Ambiental do Descarte Inadequado</h2>
            <p>Medicamentos descartados incorretamente podem contaminar o solo e a água, afetando a fauna e a flora. Substâncias químicas podem se acumular nos ecossistemas e impactar a biodiversidade.</p>
            <img src={Logo} alt="Impacto ambiental de medicamentos"/>
        </section>

      </div>
  </body>

    );
}

export default Impacto