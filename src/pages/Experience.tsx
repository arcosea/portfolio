import "../styling/Experience.css";
import { useEffect, useState, useRef } from 'react';
import {Link} from "react-router-dom"
import {Route, Routes, NavLink} from "react-router-dom";
import { AiOutlineLaptop} from "react-icons/ai";
import { Gi3DStairs, GiTeacher, GiStopSign} from "react-icons/gi";
import { FcTreeStructure } from "react-icons/fc";
import { MdConstruction, MdHealthAndSafety} from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import {MdWork} from "react-icons/md";


export function Experience(){
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

    // Gif Visuals 
    const NNGif = "/design/nn.gif";
    const mathGif = "/design/math.gif";
    return (
        <div className="container">
            <div className="section-header">
                <h2 className="header-name hidden"> <MdWork id="suitIcon"/> Work Experience <GrUserWorker id="workIcon"/> </h2>
            </div>
            <section className="section" id="work-section-timeline">
                {/* SWE Job */}
                <div className="inner-container">
                    <div className="comp-container-left hidden" id="swe-job">
                        <h3 className="component-name"> <AiOutlineLaptop id="ltIcon"/> Software Engineering Intern</h3>
                        <img src="logos/naimor.png" alt="company logo" id="naimor-img"></img>
                        <span className="left-arrow"></span>
                        <h4 className="company-left" id="naimor"> NaiMor, Inc </h4>
                        <span className="timeline"> August. 2022 - Present</span>
                        <p className="description">
                            Contracted to create a UI to embed into <strong id="shopify"> Shopify </strong > that allows clients to customize Stairs based on different <strong id="parameters"> 
                            styles, materials, shape, color, preferred dimensions and other features. </strong> 
                        </p>
                        <p className="description">
                        The website assembles and renders
                            the product using <em id="threejs"> Javascripts 3D Library (3JS) </em> & associates a <strong> price </strong> for the current assembly. 
                            This project is done in collaborate with another intern under the guidance of a mentor.
                        </p>
                        <p className="note-link">
                            <strong><em id="link"> Website Link: </em></strong>  
                            <a target="_blank" id="naimor_link" href="https://sigafonl.github.io/Stairmaster/"> <Gi3DStairs /> Stairmaster</a>
                        </p>  
                    </div>
                    <div className="visual">
                    </div>
                </div>

                {/* Tutor Job */}
                <div className="inner-container">
                    <div className="visual">
                    </div>
                    <div className="comp-container-right hidden" id="tutor-job">
                        <h3 className="component-name"> <GiTeacher id="teachIcon"/> Math Tutor</h3>
                        <img  src="logos/plu2.png" alt="company logo"></img>
                        <span className="right-arrow"></span>
                        <h4 className="company-right" id="plu-name"> Pacific Lutheran University </h4>
                        <span className="timeline"> August 2022 - Present</span>
                        <p className="description">
                            Responsible for providing <strong id="ac-sys"> academic assistance </strong> to other students through drop-in hours or scheduled one to one appointments.
                        </p> 
                    </div>
                </div>

                {/* TA Job */}
                <div className="inner-container">
                    <div className="comp-container-left hidden" id="ta-job">
                        <h3 className="component-name"> <FcTreeStructure /> Data Structures Teacher Assistant</h3>
                        <img  src="logos/plu.png" alt="company logo"></img>
                        <span className="left-arrow"></span>
                        <h4 className="company-left" id="plu-name"> Pacific Lutheran University </h4>
                        <span className="timeline"> February 2022 - May 2022</span>
                        <p className="description">
                            I was responsible for checking students pre-lab responses & answering any <em id="lab"> technical or conceptual lab related questions </em>students may have had.
                            Also graded <strong id="num-lab"> 6 different labs </strong> for roughly <strong id="num-lab"> 40 students </strong> each & provided <strong id="cfeed"> constructive feedback</strong>
                        </p>
                       
                    </div>
                    <div className="visual hidden">
                        <img id='nn-vis'src={NNGif}></img>
                    </div>
                </div>

                {/* Apprentice Job */}
                <div className="inner-container">
                    <div className="comp-container-right hidden" id="app-job">
                        <h3 className="component-name"> <MdConstruction id="toolsIcon" /> Apprentice</h3>
                        <img id="logo" src="logos/utiligi.png" alt="company logo"></img>
                        <span className="right-arrow"></span>
                        <h4 className="company-right" id="utiligi"> Utiligi Telecommunications </h4>
                        <span className="timeline"> June - September 2020, 2021, 2022</span>
                        <p className="description">
                            I was responsible for assisting my coworkers in various types of jobs. Some of the types of jobs I participated in include:
                            <strong id="work-type"> Underground OSP Cabling, Horizontal Directional Drilling (HDD), Hydro Excavating, Trenching and Concrete/Asphalt Restoration, HDD Bore Profiling and Planning
                            , Duct Verification (Rod & Proof), Optic Fiber Installation and Traffic Control</strong>. 
                        </p> 
            
                        <p className="note">
                            <strong id="certs">Certifications: </strong>Washington Flagging Permit <GiStopSign id="stopIcon" /> , CPR <MdHealthAndSafety id="safetyIcon" />
                        </p>
                    </div>
                </div>
            </section>

            {/************ Section for Education *************/}
            <div className="section-header">
                <h2 className="header-name hidden"> Education </h2>
            </div>
            <section className="section" id="ed-section">
                {/***  Physics BS  ******/}
                <div className="comp-container" id="phys-ed">
                    <h3 className="component-name" id="degree-name"> Bachelors of Science in Applied Physics</h3>
                    <h4 className="component-name" id="plu"> Pacific Lutheran University</h4>
                    <div className="degree-info">
                        <span className="timeline"> <strong> Graduation</strong>: May 2023</span>
                        <span className="minor"> Minor in Mathematics</span>
                        <span className="gpa"> <strong> Cumulative GPA: </strong> 3.91 </span>
                    </div>
                    {/* Physics Classes */}
                    <div className="course-container"> 
                        <span className="courses-for"> <strong> Engineering-Physics Classes Taken </strong></span>
                        <p className="courses">
                            Intro to Engineering,
                            General Physics I: Mechanics,  General Physics II: Electromagnetism,
                            Elementary Modern Physics: Relativity,  Waves & Fluids,
                            Engineering Statics,  Electromagnetic Theory,
                            Electromagnetic Waves & Physical Optics,   Engineering Materials Science,
                            Electrical Circuits,  Differential Equations & Laplace Transforms,
                            Fourier Analysis & Boundary Value, Quantum Mechanics, Capstone Project.
                        </p>
                    </div>
        
                    {/* Math Classes */}
                    <div className="course-container"> 
                        <span className="courses-for"> <strong> Mathematics Classes </strong></span>
                        <p className="courses">
                            Intro to Statistics, Discrete Math, Calculus II: Integrals,  Multivariable Calculus,
                            Linear Algebra. 
                        </p>
                    </div>

                    {/* Skills Gained */}
                    <div className="course-container"> 
                        <span className="courses-for"> <strong> Skills Gained </strong></span>
                        <p className="courses">
                            fill
                        </p>
                    </div>
                </div>

                {/****** Computer Science BA *****/}
                <div className="comp-container" id="phys-ed">
                    <h3 className="component-name" id="degree-name"> Bachelors of Arts in Computer Science</h3>
                    <h4 className="component-name"> Pacific Lutheran University</h4>
                    <div className="degree-info">
                        <span className="timeline"> August. 2018 - Present, <strong> Graduation</strong>: May 2023</span>
                        <span className="gpa"> Cumulative GPA: 3.91 </span>       
                    </div>

                    {/* CS Classes */}
                    <div className="course-container"> 
                        <span className="courses-for"> <strong> Computer Science Classes Taken </strong></span>
                        <p className="courses">
                            Intro to Computer Science, Data Structures, Databases & Web Programming, 
                            Design & Analysis of Algorithms, Objects & Design Patterns, Robotic Agents,
                            Capstone Project.
                        </p>
                    </div>
                    {/* Skills Gained */}
                    <div className="course-container"> 
                        <span className="courses-for"> <strong> Skills Gained </strong></span>
                        <p className="courses">
                            fill
                        </p>
                    </div>
                </div>
        
            </section>



        </div>



    )
}