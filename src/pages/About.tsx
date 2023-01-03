import "../styling/About.css";
import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';

export function About(){
    /**********         Running Slide Show              *************/
    // Running slideshow & method for storing images & keeping track of which to display
    // To small: "running/prenats.png", "running/vball.png", "running/10k.png"
    let imageURL = ["running/xc-plu-invite.png", "running/xc-spu.png", "running/team.png", "running/10k.png", "running/prelute.png", "running/lc-invite.png"];
    let [imageIndex, setImageIndex] = useState(0);
    let [imageLink, setImageLink] = useState("running/xc-plu-invite.png");
    let slideInterval: any;
    let intervalTime = 5000; // In ms
    let autoScroll = true;

    // Go to previous Running slide 
    const previousRunSlide = (e: any) => {
        if (imageIndex === 0){
            setImageIndex(imageURL.length - 1);
            setImageLink(imageURL[imageIndex]);
        } else{
            setImageIndex(imageIndex - 1);
            setImageLink(imageURL[imageIndex]);
        }
    }

    // Go to next Running Slide
    const nextRunSlide = (e: any) => {
        if (imageIndex === imageURL.length - 1){
            setImageIndex(0);
            setImageLink(imageURL[imageIndex]);
        } else{
            setImageIndex(imageIndex + 1);
            setImageLink(imageURL[imageIndex]);
        }
    }

    // Automatically goes to next Running slide after some time
   function autoRun() {
        slideInterval = setInterval(nextRunSlide, intervalTime);
   }

   // Automatically moves to next Running slide
   useEffect( () => {
        if(autoScroll){
            autoRun();
        }
        // Clean up function to clear up bug
        return () => clearInterval(slideInterval);
   }, [imageIndex]);

     /**********            Favorite Shows Slide Show      *************/
   // Favorite shows slideshow & method for storing images & keeping track of which to displa
   let showURL = ["shows/int.png", "shows/aot2.png", "shows/got.png", "shows/bb.png", "shows/ww.png"];
   let showTitle = ["Interstellar", "Attack on Titan", "Game of Thrones", "Breaking Bad", "Westworld"];
   let [currentTitle, setCurrentTitle] = useState("Interstellar");
   let [showIndex, setShowIndex] = useState(0);
   let [showLink, setShowLink] = useState("shows/int.png");
   let slideInterval_show: any;
   let scrollAuto = true;


    // Go to previous Show slide 
    const previousShowSlide = (e: any) => {
        if (showIndex === 0){
            setShowIndex(showURL.length - 1);
            setShowLink(showURL[showIndex]);
            setCurrentTitle(showTitle[showIndex]);
        } else{
            setShowIndex(showIndex - 1);
            setShowLink(showURL[showIndex]);
            setCurrentTitle(showTitle[showIndex]);
        }
    }

    // Go to next Show Slide
    const nextShowSlide = (e: any) => {
        if (showIndex === showURL.length - 1){
            setShowIndex(0);
            setShowLink(showURL[showIndex]);
            setCurrentTitle(showTitle[showIndex]);
        } else{
            setShowIndex(showIndex + 1);
            setShowLink(showURL[showIndex]);
            setCurrentTitle(showTitle[showIndex]);
        }
    }

    // Automatically goes to next Show slide after some time
    function autoShow() {
        slideInterval_show = setInterval(nextShowSlide, intervalTime);
    }

    // Automatically moves to next Show slide
    useEffect( () => {
        if(scrollAuto){
            autoShow();
        }
        // Clean up function to clear up bug
        return () => clearInterval(slideInterval_show);
    }, [showIndex]);

    return (
        <div id="container">
            <h2 id="header"> About Me</h2>
            
            {/** BIO  */}
            <div id="person">
                <p id = "intro">
                    Hey Everyone! My Name is <strong>Erick Arcos</strong>, a student-athlete at <em>Pacific Lutheran University</em>. 
                    I am studying <strong>Applied Physics (BS)</strong> and <strong>Computer Science (BA)</strong> with a Minor in Mathematics. 
                    I will be graduating in <strong> May of 2023. </strong> Some of my career interests include: Robotics, Space exploration, Astronomy, 
                    Aerospace Engineering, Embedded Systems, Artificial Intelligence, Machine learning, Software Development and so much more! 
                    All of these are subjects fascinating and I am someone that can adapt well to new learning environments.
                </p>
                <img src="/profile.png" id="profile" alt="profile picture of Erick Arcos"></img>
            </div>

            {/** Family Background */}
            <div>
                <section className="section">
                    <h3 className="sub-header"> Family & Background </h3>
                    <p>
                        Family & Friends and the time I spend with them is something I value dearly. I am the eldest of a total of four boys. My parents and I were born in Mexico but my brothers were born in the 
                        United States. I am the first in my family to have graduated High School and attended University! 
                    </p>
                </section>
            </div>
            
            {/** Sports & Activities */}
            <div id="activities">
                <section className="section">
                    <h3 className="sub-header"> Sports & Activities </h3>
                    <span className="sub-title"> 
                        Soccer
                    </span>
                    <p>
                        Whether it was street soccer or club, I had always enjoyed playing Soccer. While I had played street soccer in the early stages of my life, I didn't play officially for a team
                        till 6th grade. After a poor first and second year soccer experience in High School, I eventually decided to stop playing soccer & focus mainly on Track and Cross Country.
                    </p>
                    <span className="sub-title"> 
                        Track
                    </span>
                    <p>
                        Aside from Soccer, I also really enjoyed Running. I ran track for first time in 8th grade where I ran a 5:24 mile. I continued doing track in High School starting my junior year, 
                        I ended High School with a 4:45 1600 meter . I continued running Track at Pacific Lutheran University where I ran 16:35 in the 5 Km (over 90 seconds faster than in High School) my freshman year.
                        I have since then ran a 15:43 5Km and 4:16 1500meters.
                    </p>
                    <span className="sub-title"> 
                        Cross Country
                    </span>
                    <p>
                        After doing Track in High School, I was persuaded to do Cross Country and loved it a lot more than Track. I finished High school with a not so well time of 18:09 5 Km.
                        I attended Pacific Lutheran University where I continued running Track and Cross Country. Although I did not compete for Cross Country my freshman year, and lost a year due 
                        the 2020 pandemic, I have run a best of 26:17 8km. I have also done an unofficial half marathon in 1:18:05.
                    </p>
                    <div className="slideshow" >
                        <button className="slider" id="previous-run" onClick={previousRunSlide}> 	&larr; </button>
                        <img className="slide" id="run-slides" alt="default" src={imageLink}/>
                        <button className="slider" id="next-run" onClick={nextRunSlide}> &rarr; </button>
                    </div>

                    <span className="sub-title">
                        Other Activities
                    </span>
                    <p>
                        Aside from running and soccer, other activies I really enjoy include volleyball, badminton and hiking. I have also recently gotten into Rock Climbing & will
                        try to incorporate it more in the future. I also like playing strategy type of games such as Chess.
                    </p>
                </section>
            </div>
            

            {/** Fav shows/movies */}
            <div>
                <section className="section">
                    <h3 className="sub-header"> Favorite Shows & Movies </h3>

                    
                        <span className="sub-title" id="show-title"> {currentTitle}</span>
                        <div className="slideshow" >
                            <button className="slider" id="previous" onClick={previousShowSlide}> 	&larr; </button>
                            <img className="slide" alt="default" src={showLink}/>
                            <button className="slider" id="next" onClick={nextShowSlide}> &rarr; </button>
                        </div>   
                </section>
            </div>
            
        
        </div>
    );
}