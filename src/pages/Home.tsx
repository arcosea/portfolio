import "../styling/Home.css";
import {Link} from "react-router-dom";

export function Home(){
    return (
        <div id="container">
            <h1> Welcome!</h1>
            <img src="/profile.png" id="profile" alt="profile picture of Erick Arcos"></img>

            <p id = "info">
                Hey Everyone! My Name is <strong>Erick Arcos</strong>, a student at <em>Pacific Lutheran University</em>. 
                I am studying <strong>Applied Physics (BS)</strong> and <strong>Computer Science (BA)</strong> with a Minor in Mathematics. 
                I have interests in robotics, embedded systems, aerospace engineering, Artificial Intelligence,
                Machine learning, software development and so much more!
            </p>

            <div id="learn">
                <p id = "learn">
                    Learn more about me: <Link to="/about" className="site-title" id="link"> About Me </Link>
                    
                </p>
                <p id = "learn">
                    Learn about some of the amazing projects I've worked on: <Link to="/projects" className="site-title" id="link"> Projects</Link>
                </p>
            </div>
            <div id ="contact_container">
                <h2> Contact Me</h2>
        
            </div>

        </div>
    );
}