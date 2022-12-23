import "../styling/Home.css";
import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';

export function Home(){
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    // Handles email submission
    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    // Changes name to current input
    const handleNameChange = (e: any) => {
        const { value } = e.target
        setName(value)
    }

    // Changes message to current input
    const handleMessageChange = (e: any) => {
        const { value } = e.target
        setMessage(value)
    }

    return (
        <div id="container">
            <h1 > Welcome to my Page!</h1>
            <div id="3js">

            </div>
            

            <div id="learn">
                <p id = "learn">
                    Learn more about my hobbies & interests: <Link to="/about" className="site-title" id="link"> About Me </Link>
                    
                </p>
                <p id = "learn">
                    Learn about my education and work experience: <Link to="/education" className="site-title" id="link"> Education & Work Experience</Link>
                </p>
                <p id = "learn">
                    Learn about some of the amazing projects I've worked on: <Link to="/projects" className="site-title" id="link"> Projects</Link>
                </p>
            </div>
            <div id ="contact_container">
                {/* <h2> Contact Me</h2>
                <form>
                    <label className="user-type" htmlFor="name"> Name: </label>
                    <input id="name" onChange={handleNameChange} value={name}></input>

                    <button onClick={handleSubmit} >Submit</button>

                </form> */}
            </div>



        </div>
    );
}