import { Link } from "react-router-dom";
import Style from "./Header.modules.css";

function NavBar () {
    return (
    <ul className={Style}>
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/impacto">Impacto</Link></li>
      <li><Link to="/solucoes">Soluções</Link></li>
    </ul>
    )
}

export default NavBar