import {Link} from "react-router-dom";
import { FaLinkedin, FaPhoneAlt, FaEnvelope, FaGithub } from 'react-icons/fa';
import { MdPermContactCalendar } from "react-icons/md";

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
            <ul className="middle-footer">
                <li>
                <Link to="/contact" className="site-title"> <MdPermContactCalendar/> Contact Me </Link>
                    
                </li>
                <li>
                    <a target="_blank" id="view-website" href="https://github.com/arcosea"> <FaGithub className="icon"/> GitHub</a>  
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
                    <a target="_blank" id="view-website" href="https://www.linkedin.com/in/erick-arcos2023/"> <FaLinkedin className="icon"/> LinkedIn </a>            
                </li>

            </ul>
        </nav>
    )
}