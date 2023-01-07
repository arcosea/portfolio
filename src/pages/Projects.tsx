import * as THREE from 'three'
import React, { useEffect, useState, useRef } from 'react';
import "../styling/Projects.css";
import { SpaceCanvas } from './SpaceCanvas';
import { Gi3DStairs} from "react-icons/gi";
import { AiOutlineCaretRight } from "react-icons/ai";
import { TbLego} from "react-icons/tb";
import {RiStackFill} from "react-icons/ri";
import {BsStars} from "react-icons/bs";
import {FaJedi} from "react-icons/fa";

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

        // Display each element that was originally hidden
        const hiddenElements = document.querySelectorAll(".proj-container");
        hiddenElements.forEach( (elem) =>{
            observer.observe(elem);
        })
    }, []);

    let sweOpen = "< SoftwareProjects >";
    let sweClose = "< SoftwareProjects />";

    let epOpen = "< EngineeringPhysicsProjects >";
    let epClose = "< EngineeringPhysicsProjects />";
    return (
      <div className='projects' >
        <SpaceCanvas/>
        <h1 id="proj-site-header"> Projects </h1>

        <h2 className="proj-type-header" id="swe-type"> {sweOpen} </h2>
        {/** Stair master */}
        <div className="proj-container" id="odd-proj">
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
        <div className="proj-container" id="even-proj">
            <span className='proj-title'> <FaJedi/> Star Wars Image Generator </span>
            <p className='proj-desc'>
                Collaborated with a group to create a Website that allows users search a Star Wars database from 5 unique categories & generates an image
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
        <div className="proj-container" id="odd-proj">
            <span className='proj-title'> <TbLego/> LegoFinder</span>
            <p className='proj-desc'> A Object Detection web application using a custom 1000+ image dataset that allows users to detect between 5 of the top 20 most common 
                    Lego pieces in any image taken with 70% accuracy or higher. </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href="https://lego-finder-7ed0f.web.app/"> <AiOutlineCaretRight/> View Website</a>
            </span>
            <span className='hidden-note' data-msg="React, Typescript, Python, Google Cloud Platform, Firebase, Detecto, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/** Star Wars */}
        <div className="proj-container" id="last-proj">
            <span className='proj-title'> <BsStars/> Star Battle Puzzle</span>
            <p className='proj-desc'> Collaborated with a group to design & implement a UI for a sudoku-like puzzle that users can play. </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href="https://lego-finder-7ed0f.web.app/"> <AiOutlineCaretRight/> View Website</a>
            </span>
            <span className='hidden-note' data-msg="Java, Java Swing GUI, HTTP Server/Client, Agile Development, Github">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
        </div>

        {/* End swe projects & start eng/phys projects */}
        <h2 className="proj-type-header" id="swe-type">  {sweClose} </h2>
        <div className="proj-gap"></div>
        <h2 className="proj-type-header" id="ep-type">  {epOpen} </h2>

        {/* LaserDrive  */}


        {/** SmartCar */}


        {/** Arduino Controller  */}

        <h2 className="proj-type-header" id="ep-type">  {epClose} </h2>


      </div>
    ); 
}