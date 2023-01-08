import {Link} from "react-router-dom";
import { FaLinkedin, FaPhoneAlt, FaEnvelope, FaGithub } from 'react-icons/fa';

// Class 
export default function Footer(){
    return (
        <nav className="footer">
            <ul className="left-footer">
                <li>
                    Erick Arcos
                </li>

                <li>
                    Pacific Lutheran University
                </li>

                <li>
                    About Me
                </li>
            </ul>

            <ul className="right-footer">
                <li>
                   <FaEnvelope className="icon"/> arcosea@plu.edu
                </li>

                <li>
                    <FaPhoneAlt className="icon"/> 253 282 6040
                </li>

                <li>
                    <FaLinkedin className="icon"/> LinkedIn 
                </li>
                <li>
                    <FaGithub className="icon"/> GitHub
                </li>
            </ul>
        </nav>
    )
}