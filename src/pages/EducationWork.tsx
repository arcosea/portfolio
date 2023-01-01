import "../styling/EducationWork.css";



export function EducationWork(){


    return (
        <div id="container">
            <h2 className="section-header"> Work Experience </h2>
            <section className="section" id="work-section-timeline">
                {/* SWE Job */}
                <div className="comp-container-left" id="swe-job">
                    <h3 className="component-name"> Software Engineering Intern</h3>
                    <img src="logos/naimor.png" alt="company logo" id="naimor-img"></img>
                    <span className="left-arrow"></span>
                    <h4 className="company"> NaiMor, Inc </h4>
                    <span className="timeline"> August. 2022 - Present</span>
                    <p className="description">
                        Currently contracted by a <em> metal fabrication company </em> to create user interface that displays one of the products that the company sells and embed it into their Shopify store
                        so that clients can purchase this product. The user interface allows clients to customize the product based on
                        different <strong> styles, materials, shape, color, preferred dimensions and other features </strong>. Using this information, the website then assembles and renders
                        the product using <em> Javascripts 3D Library (3JS) </em>. The user interface also displays the pricing of the current assembly of the product
                        and updates dynamically whenever a change is made. This project is done in collaborate with another intern under the guidance of a mentor.
                    </p>
                    <p className="note">
                        Will provide <strong><em>link</em></strong> to website once its complete.
                    </p>
                    
                </div>

                {/* Tutor Job */}
                <div className="comp-container-right" id="tutor-job">
                    <h3 className="component-name"> Math Tutor</h3>
                    <img src="logos/plu2.png" alt="company logo"></img>
                    <span className="right-arrow"></span>
                    <h4 className="company"> Pacific Lutheran University </h4>
                    <span className="timeline"> August 2022 - Present</span>
                    <p className="description">
                        I am responsible for providing academic assistance to other students through drop-in hours or scheduled one to one appointments for a total
                        of about 6-7 hours per week. Some of the classes I tutor for include: <strong>Alegbra, Pre-calculus, Calculus I, II and III, as well as Linear Algebra
                        and Differential Equations </strong>.
                    </p> 
                </div>

                {/* TA Job */}
                <div className="comp-container-left" id="ta-job">
                    <h3 className="component-name"> Data Structures Teacher Assistant</h3>
                    <img src="logos/plu.png" alt="company logo"></img>
                    <span className="left-arrow"></span>
                    <h4 className="company"> Pacific Lutheran University </h4>
                    <span className="timeline"> February 2022 - May 2022</span>
                    <p className="description">
                        I was responsible for checking students pre-lab responses & answering any technical or conceptual lab related questions students may have had.
                        Aside from assisting students with their labs every week, I was also responsible for grading labs. I ultimately graded 6 different labs for 
                        roughly 40 students each & provided constructive feedback.
                    </p> 

                </div>

                {/* Apprentice Job */}
                <div className="comp-container-right" id="app-job">
                    <h3 className="component-name"> Apprentice</h3>
                    <img src="logos/utiligi.png" alt="company logo"></img>
                    <span className="right-arrow"></span>
                    <h4 className="company"> Utiligi Telecommunications </h4>
                    <span className="timeline"> June - September 2020, 2021, 2022</span>
                    <p className="description">
                        I was responsible for assisting my coworkers in various types of jobs. Some of the types of jobs I participated in include:
                        <strong> Underground OSP Cabling, Horizontal Directional Drilling (HDD), Hydro Excavating, Trenching and Concrete/Asphalt Restoration, HDD Bore Profiling and Planning
                        , Duct Verification (Rod & Proof), Optic Fiber Installation and Traffic Control</strong>. 
                    </p> 
                    <p className="description">
                        Some of the skills gained through this experience include: reading plans, setting up traffic controls, flagging techniques, use and understanding of heavy equipment and tools, the use
                        of a Hydraulic Excavator, documentation of work, methods of communication and safety protocol.
                    </p> 
                    <p className="note">
                        <strong>Certifications Gained: </strong>Washington Flagging Permit, CPR 
                    </p>
                </div>
            </section>

            {/************ Section for Education *************/}
            <h2 className="section-header"> Education </h2>
            <section className="section" id="ed-section">
                {/***  Physics BS  ******/}
                <div className="comp-container" id="phys-ed">
                    <h3 className="component-name" id="degree-name"> Bachelors of Science in Applied Physics</h3>
                    <h4 className="component-name"> Pacific Lutheran University</h4>
                    <div className="degree-info">
                        <span className="timeline"> September. 2018 - Present, <strong> Graduation</strong>: May 2023</span>
                        <span className="minor"> Minor in Mathematics</span>
                        <span className="gpa"> Cumulative GPA: 3.91 </span>
                        
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