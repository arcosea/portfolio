import "../styling/Education.css";
import { useEffect, useState, useRef } from 'react';
import { GiMaterialsScience, GiBlackBook, GiBookAura} from "react-icons/gi";
import { SpaceCanvas } from "./SpaceCanvas";
import { ShapeCanvas } from "./ShapeCanvas";


export function Education(){

     /*
    *  Constantly create animation
    */
     useEffect( () => {
        // Callback function to see if elements are visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                } else{
                    entry.target.classList.remove("show");
                }
            })
        });

        // Display each element that was originally hidden
        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach( (elem) =>{
            observer.observe(elem);
        })
    }, []);

    return (
        <div className="edu-container">
            <div className="section-header">
                <h2 className="header-name hidden"> <GiMaterialsScience className="spinIcon" id="particleIcon"/> Education  <GiBlackBook className="spinIcon" id="bookIcon"/> </h2>
            </div>
            <ShapeCanvas/>
            <section className="ed-section">
                {/***  Physics BS  ******/}
                <div className="comp-container" id="phys-ed">
                    <h3 className="component-name" id="degree-name"> Bachelors of Science in Applied Physics</h3>
                    <h4 className="component-name" id="plu-name"> Pacific Lutheran University</h4>
                    <div className="degree-info">
                        <span className="timeline"> <strong> Graduation</strong>: May 2023</span>
                        <span className="minor"> Minor in Mathematics</span>
                        <span className="gpa"> <strong> Cumulative GPA: </strong> 3.91 </span>
                    </div>
                </div>
            </section>
            <div>


            </div>



        
        
        
        </div>
    );
}