import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <h3>&copy; 2024 - VenceMED</h3>
            <div className="social-icons">
                <FaInstagram />
                <FaFacebook />
                <FaYoutube />
            </div>
        </footer>
    );
}

export default Footer;
