import "../styling/Education.css";
import { useEffect, useState, useRef } from 'react';
import { GiMaterialsScience, GiBlackBook, GiBookAura} from "react-icons/gi";


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
                <h2 className="header-name hidden"> <GiMaterialsScience/> Education  <GiBlackBook/> </h2>
            </div>
            <div className="phys-edu">
                <h3 className="deg-name"> Applied Physics (BS) </h3>
                <div className="degree-info">
                        <span className="timeline"> <strong> Graduation</strong>: May 2023</span>
                        <span className="minor"> Minor in Mathematics</span>
                        <span className="gpa"> Cumulative GPA: 3.91 </span>
                </div>
            </div>
        
        
        
        </div>
    );
}