import "../layout/Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <h3>&copy; 2024 - VenceMED</h3> {/* Título centralizado na parte superior */}
            <div className="footer-content">
                <div className="contact-info">
                    <p>Contato: (11) 1234-5678</p> {/* Contato à esquerda */}
                    <p>Todos os direitos reservados.</p> {/* Mensagem adicional abaixo do contato */}
                </div>
                <div className="social-icons">
                    <div className="icon-item">
                        <FaInstagram />
                        <p>Nosso página no Instagram</p> {/* Descrição do Instagram */}
                    </div>
                    <div className="icon-item">
                        <FaFacebook />
                        <p>Nossa página no Facebook</p> {/* Descrição do Facebook */}
                    </div>
                    <div className="iconn-item">
                        <FaYoutube />
                        <p>Nossa página no YouTube</p> {/* Descrição do YouTube */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
