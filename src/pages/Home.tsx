import "../styling/Home.css";
import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import * as THREE from "three";
import TextGeometry, { BMFont, BMFontJsonParser, TextGeometryOption, TextAlign } from 'three-text-geometry';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { createScanner, isWhiteSpaceLike } from "typescript";
import { BooleanKeyframeTrack } from "three";


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

    // Welcome page
    useEffect(() => {
        let scene: THREE.Scene;
        let camera: THREE.PerspectiveCamera;
        let renderer: THREE.WebGLRenderer;
        let cube = new THREE.Mesh();

        function init() {
            // Create scene object
            scene = new THREE.Scene();
            scene.background = new THREE.Color("rgb(245, 245, 220)")

            // Setup camera with facing upward
            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight);
            camera.position.z = 40;

            // Setup renderer
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);

            window.addEventListener("resize", (event) => {
                renderer.setSize(window.innerWidth, window.innerHeight);
            })
            
            // Add renderer to only this page
            document.querySelector(".home")?.appendChild(renderer.domElement)
        
            // Add 
            const geometry = new THREE.BoxGeometry( 20, 20, 20 );
            const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
            cube = new THREE.Mesh( geometry, material );
            scene.add( cube );


            animate();
        }
        // Rendering loop
        function animate() {
            cube.rotateX(0.01);
            cube.rotateY(0.01);
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        init();
    }, []);


    return (
        <div className="home">
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



        </div>
    );
}