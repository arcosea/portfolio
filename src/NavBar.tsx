import {Link} from "react-router-dom"
import { isPropertySignature } from "typescript";

export default function Navbar(){
    return (
        <nav className="nav">
            <Link to="/" className="site-title"> Welcome</Link>
            <ul>
                <li> 
                    <Link to="/" className="site-title"> Home</Link>
                </li>
                <li>
                    <Link to="/experience" className="site-title"> Experience</Link>
                </li>
                <li>
                    <Link to="/projects" className="site-title"> Projects</Link>
                </li>
            </ul>
        </nav>
    )
}

