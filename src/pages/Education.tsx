// import "../styling/Education.css";
import { useEffect, useState, useRef } from 'react';
import { EducationCanvas } from "./EducationCanvas";
import "../styling/Education.css";
import { AiOutlineFundProjectionScreen, AiOutlineFunction } from 'react-icons/ai';
import { BsWater, BsGrid1X2 } from 'react-icons/bs';
import { FaReact, FaWaveSquare, FaJava } from 'react-icons/fa';
import { FcTreeStructure } from 'react-icons/fc';
import { GiFallDown, GiTimeSynchronization, GiMagnet, GiEmptyMetalBucketHandle, GiCheckboxTree, GiVintageRobot, GiHelicopter } from 'react-icons/gi';
import { MdEngineering } from 'react-icons/md';
import { SiMatrix, SiPostgresql, SiMaterialdesignicons, SiElectron } from 'react-icons/si';
import { TbWaveSawTool } from 'react-icons/tb';

export function Education(){
    return (
        <div className="education">
                <section className="section">
                    <h3 className="sub-header"> Education </h3>
                    <h4>
                        Cumulative GPA: 3.91
                    </h4>
                    <div className="course-container">
                        <ul className="courses-taken" id="phys-class">
                            <span>
                                <strong> Applied Physics (BS) </strong>
                            </span>
                            <li>
                                <GiHelicopter/>  Intro to Engineering
                            </li>
                            <li>
                                <GiFallDown/>  General Mechanics
                            </li>
                            <li>
                                <SiElectron/>  General Electromagnetism (EM)
                            </li>
                            <li>
                                <GiTimeSynchronization/> Modern Physics (Relativity)
                            </li>
                            <li>
                                <BsWater/> Waves & Fluids
                            </li>
                            <li>
                                <MdEngineering/> Engineering Statics
                            </li>
                            <li>
                                <GiMagnet/> EM theory & EM Optics
                            </li>
                            <li>
                                <GiEmptyMetalBucketHandle/> Material Science
                            </li>
                            <li>
                                &#8466; Differential Equations & Laplace Transforms
                            </li>
                            <li>
                                <TbWaveSawTool/> Fourier Analysis & BVP
                            </li>
                            <li>
                                <FaReact/> Quantum Mechanics
                            </li>
                        </ul>


                        <ul className="courses-taken" id="math-class">
                            <span>
                                <strong> Math Minor </strong>
                            </span>
                            <li>
                                <AiOutlineFundProjectionScreen/> Statistics
                            </li>
                            <li>
                                <FaWaveSquare/> Discrete Math
                            </li>
                            <li>
                                <AiOutlineFunction/>  Integration Calculus
                            </li>
                            <li>
                                &#8747; Multivariable Calculus
                            </li>
                            <li>
                                <SiMatrix/> Linear Algebra
                            </li>
                        </ul>

                        <ul className="courses-taken" id="cs-class">
                            <span>
                                <strong> Computer Science (BA)</strong>
                            </span>
                            <li>
                                <FaJava/>  Intro to Programming
                            </li>
                            <li>
                                <FcTreeStructure/> Data Structures
                            </li>
                            <li>
                                <GiCheckboxTree/> Algorithms Design/Analysis
                            </li>
                            <li>
                                <SiPostgresql/> Databases
                            </li>
                            <li>
                                <BsGrid1X2/> Web Design
                            </li>
                            <li>
                                <SiMaterialdesignicons/> Objects & Design
                            </li>
                            <li>
                                <GiVintageRobot/> Robotic Agents
                            </li>
                        </ul>
                    </div>

                    {/** Skills */}
                    <div className="skills-container">
                        <ul className="skills-gained" id="phys-class">
                            <span>
                                <strong> Skills Gained </strong>
                            </span>
                            <li>
                                3D CAD Modeling
                            </li>
                            <li>
                                Matlab
                            </li>
                            <li>
                                Experimental Design
                            </li>
                            <li>
                                Data Collection
                            </li>
                            <li>
                                Uncertainty Analysis
                            </li>
                            <li>
                                MathSage
                            </li>
                            <li>
                                Physical Interpretation from Math
                            </li>
                            <li>
                                Understanding of Physical World
                            </li>
                            <li>
                                Math Calculation
                            </li>
                        </ul>


                        <ul className="skills-gained" id="math-class">
                            <span>
                                <strong> Math Minor </strong>
                            </span>
                            <li>
                                <AiOutlineFundProjectionScreen/> Statistics
                            </li>
                            <li>
                                <FaWaveSquare/> Discrete Math
                            </li>
                            <li>
                                <AiOutlineFunction/>  Integration Calculus
                            </li>
                            <li>
                                &#8747; Multivariable Calculus
                            </li>
                            <li>
                                <SiMatrix/> Linear Algebra
                            </li>
                        </ul>

                        <ul className="skills-gained" id="cs-class">
                            <span>
                                <strong> Computer Science (BA)</strong>
                            </span>
                            <li>
                                <FaJava/>  Intro to Programming
                            </li>
                            <li>
                                <FcTreeStructure/> Data Structures
                            </li>
                            <li>
                                <GiCheckboxTree/> Algorithms Design/Analysis
                            </li>
                            <li>
                                <SiPostgresql/> Databases
                            </li>
                            <li>
                                <BsGrid1X2/> Web Design
                            </li>
                            <li>
                                <SiMaterialdesignicons/> Objects & Design
                            </li>
                            <li>
                                <GiVintageRobot/> Robotic Agents
                            </li>
                        </ul>
                    </div>
                </section>
            <EducationCanvas/>
        </div>
    );
}