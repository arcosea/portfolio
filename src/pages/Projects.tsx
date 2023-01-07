import * as THREE from 'three'
import React, { useEffect, useState, useRef } from 'react';
import "../styling/Projects.css";
import { SpaceCanvas } from './SpaceCanvas';
import { Gi3DStairs} from "react-icons/gi";
import { AiOutlineCaretRight } from "react-icons/ai";
import { TbLego} from "react-icons/tb";
import {RiStackFill} from "react-icons/ri";

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

    return (
      <div className='projects' >
        <SpaceCanvas/>
        <h1 id="proj-site-header"> Projects </h1>

        <div className="proj-container">
            <span className='proj-title'> <Gi3DStairs/> StairMaster</span>
            <p className='proj-desc'> A responsive website for <em id="naimor-inc"> NaiMor, Inc </em> that allows customers to style stairs for purchase based on design shape, material, color, size and other features. </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href="https://sigafonl.github.io/Stairmaster/"> <AiOutlineCaretRight/> View Website</a>   
            </span>
            <span className='hidden-note' data-msg="my tech stack afdasfafafasdfasfaawasfdfafsaf">
                <RiStackFill className='tech-stack-icon'/> Tech Stack
            </span>
            
        </div>


        <div className="proj-container">
            <span className='proj-title'> <TbLego/> LegoFinder</span>
            <p className='proj-desc'> A custom Object Detection web application that allows users to detect between 5 of the top 20 most common 
                    Lego pieces in any image taken with 70% accuracy or higher. </p>
            <span className='proj-note'>
                <a target="_blank" id="view-website" href="https://lego-finder-7ed0f.web.app/"> <AiOutlineCaretRight/> View Website</a>
            </span>
        </div>

        <div className="proj-container">
            <span className='proj-title'> title</span>
            <p className='proj-desc'> asadqqwd</p>
            <span className='proj-note'>site</span>
        </div>


      </div>
    ); 
}