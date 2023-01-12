import {Link} from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import * as THREE from "three";
import {Text} from 'troika-three-text';

export function WelcomeCanvas(){
    // Welcome page
    useEffect(() => {
        let scene: THREE.Scene;
        let camera: THREE.PerspectiveCamera;
        let renderer: THREE.WebGLRenderer;
        let torusKnot = new THREE.Mesh();

        function init() {
            // Create scene object
            scene = new THREE.Scene();
            scene.background = new THREE.Color("rgb(245, 245, 220)")

            // Setup camera with facing upward
            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight);
            camera.position.z = 40;

            // Setup renderer
            const canvas = document.getElementById('welcomeCanvas') as HTMLCanvasElement;
            renderer = new THREE.WebGLRenderer({canvas});
            renderer.setSize(window.innerWidth, window.innerHeight);
            window.addEventListener("resize", (event) => {
                renderer.setSize(window.innerWidth, window.innerHeight);
            })
            
        
            // Add Shape
            const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
            const material = new THREE.MeshBasicMaterial( { color: 'rgb(0, 0, 0)', wireframe:true});
            torusKnot = new THREE.Mesh( geometry, material );
            scene.add( torusKnot );

            // Create:
            const myText = new Text()
            scene.add(myText)

            // Set properties to configure:
            myText.text = 'Hello world!';
            myText.fontSize = 10;
            myText.position.z = 20;
            myText.color = 0x9966FF;

            // Update the rendering:
            myText.sync()

            // Animate
            animate();
        }
        // Rendering loop
        function animate() {
            torusKnot.rotateX(0.01);
            torusKnot.rotateY(0.01);
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        init();
    }, []);
    
    return (
        <div className="welcome-container">
            <canvas id="welcomeCanvas"></canvas>
        </div>


    );
}