import Lixo from "../img/lixo.png";
import "../layout/Impacto.css"

function Impacto() {
    return (
        <div>
            <section className="titulo">
    <h2>Impacto Ambiental do Descarte Inadequado</h2>
</section>


            <section id="impacto">
                <p>
                    O descarte inadequado de medicamentos vencidos ou não utilizados pode gerar danos significativos ao meio ambiente. Jogar esses medicamentos no lixo comum ou na descarga sanitária pode liberar substâncias químicas nocivas ao solo, à fauna e à saúde pública, afetando qualquer um que entrar em contato com áreas contaminadas.
                </p>

                <hr />

                <p>
                    Ao ser descartado pela rede de esgoto, os medicamentos também afetam a qualidade da água. Diferentes tipos de medicamentos apresentam riscos variados, dependendo de suas características, como inflamabilidade, corrosividade, reatividade e toxicidade.
                </p>

                <hr />

                <p>
                    O descarte inconsciente de medicamentos requer mais atenção. Aqui, ensinamos como descartar corretamente, indo a pontos de coleta ou agendando serviços em nosso app.
                </p>
            </section>
            
            <section id="imagem-impacto">
                <h2>O que o descarte inadequado causa</h2>
                <img src={Lixo} alt="Impacto do descarte inadequado" />
            </section>
        </div>
    );
}

export default Impacto;
