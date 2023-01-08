
// Imports
import * as THREE from 'three'
import React, { useEffect, useState, useRef } from 'react';
import "../styling/Projects.css";
import { SpaceCanvas } from './SpaceCanvas';
import { Gi3DStairs} from "react-icons/gi";
import { AiOutlineCaretRight } from "react-icons/ai";
import { TbLego} from "react-icons/tb";
import {RiStackFill} from "react-icons/ri";
import {BsStars, BsController} from "react-icons/bs";
import {FaJedi, FaCarSide} from "react-icons/fa";
import {SiProbot} from "react-icons/si";
import {GiSpinningBlades, GiSoundWaves, GiCannonBall} from "react-icons/gi";

/**
 * Class that displays all projects
 */
export function Projects(){
        /*
        *  Constantly create animation
        */
        useEffect( () => {
        // Callback function to see if elements are visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("reveal");
                } else{
                    entry.target.classList.remove("reveal");
                }
            })
        });

        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("slide");
                } else{
                    entry.target.classList.remove("slide");
                }
            })
        });

        const observer3 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("unblur");
                } else{
                    entry.target.classList.remove("unblur");
                }
            })
        });

        // Display each element that was originally hidden
        const revealElements = document.querySelectorAll(".proj-s-container");
        revealElements.forEach( (elem) =>{
            observer.observe(elem);
        });

        // Slide each item with this class
        const slideElements = document.querySelectorAll(".stash");
        slideElements.forEach( (elem) =>{
            observer2.observe(elem);
        });

        // Unblur each item with this class
        const blurElements = document.querySelectorAll(".blur");
        blurElements.forEach( (elem) =>{
            observer3.observe(elem);
        });


    }, []);

    // Opening & closing text for each section
    let sweOpen = "< SoftwareProjects >";
    let sweClose = "< SoftwareProjects />";
    let eOpen = "< EngineeringProjects >";
    let eClose = "< EngineeringProjects />";
    let pOpen = "< PhysicsProjects >";
    let pClose = "< PhysicsProjects />";

    // links to pdfs
    let plcPDF = "../papers/PropellerLiftCoefficient.pdf"
    let miPDF = "../papers/MichelsonInterferometer.pdf";
    let ncPDF = "../papers/NuclearScattering.pdf"

    // HTML project
    return (
      <div className='projects' >
        <SpaceCanvas/>
        <h1 id="proj-site-header"> Projects </h1>

        <h2 className="proj-type-header" id="swe-type"> {sweOpen} </h2>
        {/** Stair master */}

        <div className="proj-s-container" id="odd-s">
            <span className='proj-title'> <Gi3DStairs/> StairMaster</span>
            <p className='proj-desc'> A responsive website for <em id="naimor-inc"> NaiMor, Inc </em> that allows customers to style stairs for purchase based on design shape, material, color, size and other features. </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href="https://sigafonl.github.io/Stairmaster/"> <AiOutlineCaretRight/> View Website</a>   
            </span>
            <span className='hidden-note' data-msg="Typscript, 3JS, Shopify, lil-gui, Troika-Text, Blender, OBJ 3D Models, HTML/CSS, Node.JS, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/** Star Wars  */}
        <div className="proj-s-container" id="even-s">
            <span className='proj-title' id="swProj"> <FaJedi id="swIcon"/> Star Wars Image Generator </span>
            <p className='proj-desc'>
                Collaborated with a group to create a Website that allows users search a Star Wars PostGres database from 5 unique categories & generates an image
                based on the top result.
            </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href="https://lego-finder-7ed0f.web.app/"> <AiOutlineCaretRight/> View Website</a>
            </span>
            <span className='hidden-note' data-msg="React, Typescript, Python, Docker, OpenAI, HTML/CSS, PostgresSQL, pgAdmin, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/** Lego Finder */}
        <div className="proj-s-container" id="odd-s">
            <span className='proj-title' id='legoProj'> <TbLego/> LegoFinder</span>
            <p className='proj-desc'> An Object Detection web application using a custom 1000+ image dataset that allows users to detect between 5 of the top 20 most common 
                    Lego pieces in any image taken with 70% accuracy or higher. </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href="https://lego-finder-7ed0f.web.app/"> <AiOutlineCaretRight/> View Website</a>
            </span>
            <span className='hidden-note' data-msg="React, Typescript, Python, Google Cloud Platform, Firebase, Detecto, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/** Star Wars */}
        <div className="proj-s-container" id="last-proj">
            <span className='proj-title' id="sbProj"> <BsStars id="sbIcon" /> Star Battle Puzzle</span>
            <p className='proj-desc'> Collaborated with a group to design & implement a UI for a sudoku-like puzzle that users can play. </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href=""> <AiOutlineCaretRight/> View Website</a>
            </span>
            <span className='hidden-note' data-msg="Java, Java Swing GUI, HTTP Server/Client, Agile Development, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/* End swe projects & start engineering projects */}
        <h2 className="proj-type-header" id="swe-type">  {sweClose} </h2>
        <div className="proj-gap"></div>
        <h2 className="proj-type-header" id="e-type">  {eOpen} </h2>

        {/* LaserDrive  */}
        <div className="proj-container stash" id="ld-proj">
            <span className='proj-title' id="ldProj"> <FaCarSide id="ldIcon" /> LaserDrive </span>
            <p className='proj-desc'> Collaborating with a group to build an Autonomous F1Tenth RC Car. </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href=""> <AiOutlineCaretRight/> View Website</a>
            </span>
            <span className='hidden-note' data-msg="Python, ROS, F1Tenth Car & Simulator, Asana, React, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/** SmartCar */}
        <div className="proj-container stash" id="sc-proj">
            <span className='proj-title' id="scProj"> <SiProbot id="scIcon"/> SmartCar </span>
            <p className='proj-desc'> Infrared remote (IR) controlled car with obstacle detection, avoidance and a follower modes
            aside from simple driving commands. Also attached OLED Screen that displays temperature, humidity and time. </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href=""> <AiOutlineCaretRight/> View Website</a>
            </span>
            <span className='hidden-note' data-msg="C/C++, Arduino Uno, Electronic modules (Ultrasonic Sensor, DC Motors, PIR motion sensor, IR controller) ">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/** Arduino Controller  */}
        <div className="proj-container stash" id="last-proj">
            <span className='proj-title' id="cProj"> <BsController id="cIcon"/> RF Controller </span>
            <p className='proj-desc'> Built a custom RF transmitter & receiver control DC motors, servo sensor and an LED using joysticks & potentiometer. 
                                        Also decoded an IR controller & repurposed it to change colors of an LED strip.
            </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href=""> <AiOutlineCaretRight/> View Website</a>
            </span>
            <span className='hidden-note' data-msg="C/C++, Arduino Nano, Electronic modules (BLDC Motors, nRF24L01) ">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/** End Engineering Section & Start Physics sections*/}
        <h2 className="proj-type-header" id="e-type">  {eClose} </h2>
        <div className="proj-gap"></div>
        <h2 className="proj-type-header" id="p-type">  {pOpen} </h2>

        {/** Lift Propulsion  */}
        <div className="proj-container blur" id="lc-proj">
            <span className='proj-title' id="lcProj"> <GiSpinningBlades id="lcIcon"/> Lift Propeller Coefficient </span>
            <p className='proj-desc'> An experimental study & analysis on the lift generated from rotating a 2-bladed propeller.
            </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" onClick={ () => window.open(plcPDF)}> <AiOutlineCaretRight/> View PDF</a>
            </span>
            <span className='hidden-note' data-msg="Michelson Interferometer, Excel, Solver, Laser, Camera">
                <RiStackFill className='tech-stack-icon'/> Tools
            </span>
        </div>

        {/** Michelson Interferometer */}
        <div className="proj-container blur" id="mi-proj">
            <span className='proj-title' id="miProj"> <GiSoundWaves id="miIcon"/> Michelson interferometer Experiment. </span>
            <p className='proj-desc'> Observed changes in destructive interference patterns created by
                    interferometer and determined the wavelength of an HeNe laser to be
                    within 3.8% of expected value. Also determined the index of refraction for
                    air.
            </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" onClick={ () => window.open(miPDF)}> <AiOutlineCaretRight/> View PDF</a>
            </span>
            <span className='hidden-note' data-msg="Michelson Interferometer, Excel, Solver, Laser, Camera">
                <RiStackFill className='tech-stack-icon'/> Tools
            </span>
        </div>

        {/** Nuclear Scattering */}
        <div className="proj-container blur" id="last-proj">
            <span className='proj-title' id="ncProj"> <GiCannonBall id="ncIcon"/> Nuclear Scattering Simulation. </span>
            <p className='proj-desc'> Performed an analogous experiment where ball bearings were fired at a cylindrical target &
                    scattering angles were observed. Determined its radius to be within 4.3% of
                    actual value. Gained experience with uncertainty analysis & writing a
                    scientific report.
            </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" onClick={ () => window.open(ncPDF)}> <AiOutlineCaretRight/> View PDF</a>
            </span>
            <span className='hidden-note' data-msg="Excel, Solver, Uncertainty Analysis">
                <RiStackFill className='tech-stack-icon'/> Tools
            </span>
        </div>
        <h2 className="proj-type-header" id="p-type">  {pClose} </h2>

        {/** End */}
      </div>
    ); 
}