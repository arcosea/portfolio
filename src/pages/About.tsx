import "../styling/About.css";
import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import ImageSlider, { Slide } from "react-auto-image-slider";

export function About(){
    


    return (
        <div id="container">
            <h2 id="header"> About Me</h2>

            <div id="person">
                <p id = "info">
                    Hey Everyone! My Name is <strong>Erick Arcos</strong>, a student-athlete at <em>Pacific Lutheran University</em>. 
                    I am studying <strong>Applied Physics (BS)</strong> and <strong>Computer Science (BA)</strong> with a Minor in Mathematics. 
                    I have interests in robotics, Space exploration, Astronomy, aerospace engineering, embedded systems, Artificial Intelligence,
                    Machine learning, software development and so much more!
                </p>
                <img src="/profile.png" id="profile" alt="profile picture of Erick Arcos"></img>
            </div>

            <hr></hr>
            <section>
                <h3 id="sub-header"> Family & Background </h3>
                <p>
                    Family & Friends and the time I spend with them is something I value dearly. I am the eldest of a total of four boys. I am the first in my family to have graduated
                    High school and attended University! My parents and I were born in Mexico. However, unlike them, I was brought to the United States at a young age
                    and did not have the pressure to work from an early age to help provide essentials. I had the opportunity and support to be able to attend higher education. 
                </p>
            </section>
            <section>
                <h3 id="sub-header"> Sports & Hobbies </h3>
                <p>
                    Whether it was street soccer or club, I had always enjoyed playing Soccer. While I had played street soccer in the early stages of my life, I didn't play officially for a team
                    till 6th grade. Aside from Soccer, I also really enjoyed Running. I had run in Track for the first time in 8th grade where I ran a 5:24 mile. After a poor first and second year soccer experience 
                    in High School, I eventually decided to stop playing soccer & focus mainly on Track and Cross Country. I ended High School with a 4:45 mile and a 18:09 5Km personal Best.
                </p>
                <p>
                    I attended Pacific Lutheran University where I continued running Track and Cross Country. My Freshman year I only ran Track where I finished the season with
                    a 16:35 5Km back in 2019. While, my collegiate running career comes to an end this Spring of 2023, I have since then ran a 
                    15:43 5Km in Track and 26:17 8Km personal bests. I have also done an unofficial half marathon in 1:18:05.
                </p>
            </section>

            <section>
                <h3 id="sub-header"> Favorite Shows & Movies </h3>
                <p>
                    Here are a few slide shows
                </p>
                
            </section>
        
        
        
        </div>
    );
}