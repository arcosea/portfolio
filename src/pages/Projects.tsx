import * as THREE from 'three'
import React, { useEffect, useState, useRef } from 'react';
import "../styling/Projects.css";
import { SpaceCanvas } from './SpaceCanvas';

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
      const hiddenElements = document.querySelectorAll(".hide");
      hiddenElements.forEach( (elem) =>{
          observer.observe(elem);
      })
  }, []);

    return (
      <div className='projects' >
        <SpaceCanvas/>
        <h1 id="proj-site-header"> Projects </h1>

        <div className="proj-container hide">
            <span className='proj-title'> StairMaster</span>
            <p className='proj-desc'> asadqqwd</p>
            <span className='proj-note'>site</span>
        </div>
        <div className="proj-container hide">
            <span className='proj-title'> title</span>
            <p className='proj-desc'> asadqqwd</p>
            <span className='proj-note'>site</span>
        </div>
      </div>



    ); 
}