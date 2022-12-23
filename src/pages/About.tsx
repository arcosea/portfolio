import "../styling/About.css";
import {Link} from "react-router-dom";

export function About(){
    return (
        <div id="container">
            <h2 id="header"> About Me</h2>

            <div id="person">
                <p id = "info">
                    Hey Everyone! My Name is <strong>Erick Arcos</strong>, a student at <em>Pacific Lutheran University</em>. 
                    I am studying <strong>Applied Physics (BS)</strong> and <strong>Computer Science (BA)</strong> with a Minor in Mathematics. 
                    I have interests in robotics, embedded systems, aerospace engineering, Artificial Intelligence,
                    Machine learning, software development and so much more!
                </p>
                <img src="/profile.png" id="profile" alt="profile picture of Erick Arcos"></img>
    
            </div>
        
        
        
        
        </div>
    );
}