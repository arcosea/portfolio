// import "../styling/Education.css";
import { useEffect, useState, useRef } from 'react';
import { GiMaterialsScience, GiBlackBook, GiBookAura} from "react-icons/gi";
import { EducationCanvas } from "./EducationCanvas";


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
        <div className="education">
            <EducationCanvas/>
        </div>
    );
}