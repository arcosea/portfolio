import {Link} from "react-router-dom"
import { isPropertySignature } from "typescript";

export default function Navbar(){
    return (
        <nav className="nav">
            <Link to="/" className="site-title"> Site Name</Link>
            <ul>
                <Link to="/" className="site-title"> Home</Link>
                <Link to="/about" className="site-title"> About</Link>
                <Link to="/projects" className="site-title"> Projects</Link>
            </ul>


        </nav>
    )
}

