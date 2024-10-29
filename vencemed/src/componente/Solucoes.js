import "../layout/Solucoes.css";

function Solucoes() {
    return (
        <div className="home-container">
            <div className="hero-content">
                <h1 className="hero-title">SOLUÇÕES</h1>
                <p className="hero-description">
                    Educação é chave para minimizar riscos.
                </p>
            </div>
            <div className="solucoes-content">
                <p>O descarte inconsciente de medicamentos requer mais atenção. Aqui, ensinamos como descartar corretamente, indo a pontos de coleta ou agendando serviços em nosso app.</p>
                
                <p><strong>Legislação:</strong> A Lei nº 12.305/2010 institui a Política Nacional de Resíduos Sólidos...</p>

                <hr/>
                
                <h3>Como Descartar</h3>
                <p><strong>1 - SEPARE NA SUA CASA:</strong><br /> Organize os medicamentos que precisam ser descartados. Verifique os rótulos e identifique aqueles vencidos, danificados ou que não serão mais utilizados.</p>
                <p><strong>2 - LEVE A UM PONTO DE COLETA:</strong><br />Muitos municípios, farmácias, postos de saúde e unidades de coleta oferecem pontos específicos para o descarte de medicamentos. Estes locais são preparados para encaminhar os resíduos para tratamento adequado.</p>
                <p><strong>3 - DESCARTE CORRETAMENTE:</strong><br />  Em alguns locais, as embalagens podem ser recicladas, então, se puder, descarte os medicamentos e suas embalagens separadamente, respeitando as instruções dos pontos de coleta. Existem programas de coleta de resíduos de medicamentos promovidos por farmácias e algumas redes de drogarias, que possuem recipientes específicos para o descarte de medicamentos sólidos (comprimidos, cápsulas) e líquidos (xaropes, soluções).</p>

                <hr/>
                
                <h3>Como Agendar em Nosso Site ou App Mobile</h3>
                <p><strong>1 - Escolher um ponto de coleta:</strong><br /> Próximo a sua residência, verificando se tem serviço de coleta por agendamento e depois é so informar seu CEP e/ou seu Endereço</p>
                <p><strong>2 - Verificar os horários:</strong><br /> Olhe os horários disponiveis dos pontos de coleta que se encaixe mais na sua rotina</p>
                <p><strong>3 - Escolher a data e hora da coleta:</strong><br /> De acordo com o horário de funcionamento do ponto escolhido, marque o dia e a hora da coleta</p>
                <p><strong>4 - Informar a condição do medicamento:</strong><br /> Quantidade, características do medicamento(cortante, frasco, cartela etc) e o motivo do descarte(vencido ou sem utilidade).</p>
                <p><strong>5 - Enviar o pedido de agendamento:</strong><br /> Agora é só enviar o pedido de agendamento para coleta em sua residência!</p>

            </div>
        </div>
    );
}

export default Solucoes;