import {Link} from "react-router-dom";

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
                    Personal Portfolio
                </li>
            </ul>

            <ul className="right-footer">
                <li>
                    arcosea@plu.edu
                </li>

                <li>
                    253 282 6040
                </li>

                <li>
                    linkedin.com/in/erick-arcos2023/
                </li>
            </ul>
        </nav>
    )
}