import { Link } from "react-router-dom";
import Logo from "../../../img/logo.png"; // Ajuste o caminho conforme necessário
import "./Header.modules.css";

function Header() {
    return (
        <header>
            <div className="top-section">
                <img src={Logo} alt="Logo" />
                <h1>Conscientização sobre o Descarte de Medicamentos</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Impacto">Impacto</Link></li>
                    <li><Link to="/Solucoes">Soluções</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
