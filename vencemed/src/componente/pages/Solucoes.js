import "./layout/Solucoes.css"

function Solucoes() {
    return (
        <div>
            <section className="titulo">
            <h2>Soluções para um Descarte Seguro</h2>
            </section>

            <section id="solucoes">
    
                <p>O descarte inconsciente de medicamentos requer mais atenção. Aqui, ensinamos como descartar corretamente, indo a pontos de coleta ou agendando serviços em nosso app.</p>

                <hr /> {/* Linha de separação */}

                <p><strong>Legislação:</strong> A Lei nº 12.305/2010 institui a Política Nacional de Resíduos Sólidos, estabelecendo que o setor produtivo, os usuários e o poder público têm responsabilidade compartilhada na definição de um destino correto aos produtos e bens de consumo ao final de sua vida útil.</p>

                <hr /> {/* Linha de separação */}

                <h3>Como Descartar</h3>
                <p><strong>1 - SEPARE NA SUA CASA:</strong><br />
                    Verifique na sua casa a data de vencimento de seus medicamentos e se tem algum medicamento que não é mais usado. Separe os vencidos e aqueles que você sabe que não serão mais usados.
                </p>

                <p><strong>2 - LEVE A UM PONTO DE COLETA:</strong><br />
                    Leve-os com suas respectivas caixas a uma das farmácias participantes e localize uma estação coletora.
                </p>

                <p><strong>3 - DESCARTE CORRETAMENTE:</strong><br />
                    Na estação coletora, siga a orientação de registro, separação, inutilização das embalagens e deposite separadamente nos locais indicados (separar com cuidado objetos cortantes, etc.).
                </p>

                <hr /> {/* Linha de separação */}

                <h3>Como Agendar em Nosso Site ou App Mobile</h3>
                <p><strong>1 - Escolher um ponto de coleta:</strong><br />
                    Próximo a sua residência, informando seu CEP e conferindo se ele tem serviços de coleta.
                </p>
                <p><strong>2 - Verificar os horários:</strong><br />
                    Olhe os horários do ponto de coleta.
                </p>
                <p><strong>3 - Escolher a data e hora da coleta:</strong><br />
                    De acordo com o horário de funcionamento do ponto.
                </p>
                <p><strong>4 - Informar a condição do medicamento:</strong><br />
                    Quantidade, características e necessidades do medicamento para evitar riscos na coleta.
                </p>
                <p><strong>5 - Enviar o pedido de agendamento:</strong><br />
                    Agora é só enviar o pedido de agendamento e informaremos o ponto de coleta.
                </p>
            </section>
        </div>
    );
}

export default Solucoes;