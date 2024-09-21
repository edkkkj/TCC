import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../img/logo.png";
import "./Header.modules.css";
import { VscAccount } from 'react-icons/vsc';

function Header() {
    // Estado para controlar a exibição do menu suspenso
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="top-section">
                <img src={Logo} alt="Logo" />
                <h1>Conscientização sobre o Descarte de Medicamentos</h1>

                {/* Menu de conta que aparece ao passar o mouse */}
                <div
                    className="account-menu"
                    onMouseEnter={() => setMenuOpen(true)} // Abre o menu ao passar o mouse
                    onMouseLeave={() => setMenuOpen(false)} // Fecha o menu ao sair
                >
                    <VscAccount className="account-icon" />
                    {menuOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/cadastro">Cadastro</Link></li>
                            <li><Link to="/perfil">Perfil</Link></li>
                            <li><Link to="/sair">Sair</Link></li>
                        </ul>
                    )}
                </div>
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
