import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <h3>&copy; 2024 - VenceMED</h3>
            <p>Quem somos e o que fazemos?</p>
            <p>
                Somos a VENCEMED, uma equipe de conscientização e agendamento de serviços afim de incentivar o descarte consciente de medicamentos vencidos ou sem uso.
                O agendamento funciona com a comunicação de nossa equipe com os estabelecimentos de pontos de coleta que buscaram nosso serviço, estando cadastrados em nosso site informando a eles pedidos para coleta de cliente que selecionaram seu estabelecimento. Tendo as informações do pedido como data, local e etc, enviam seus serviço de logística para buscar o medicamento na residência do cliente.
            </p>

            <div className="social-icons">
                <FaInstagram />
                <FaFacebook />
                <FaYoutube />
            </div>
        </footer>
    );
}

export default Footer;
