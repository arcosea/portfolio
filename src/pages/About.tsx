import "../styling/About.css";
import {Link} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import { GiMountainClimbing, GiRunningShoe, GiSoccerBall } from "react-icons/gi";
import { FaChess, FaHiking, FaRunning, FaVolleyballBall } from "react-icons/fa";
import { MdSportsTennis } from "react-icons/md";

export function About(){
    /**********         Running Slide Show              *************/
    // Running slideshow & method for storing images & keeping track of which to display
    // To small: "running/prenats.png", "running/vball.png", "running/10k.png"
    let imageURL = ["running/xc-plu-invite.png", "running/xc-spu.png", "running/team.png", "running/10k.png", "running/inv.png", "running/lc-invite.png", "running/lc.png"];
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
                        Family & Friends and the time I spend with them is something I value dearly. I have three younger brothers. I am the first in my family to have graduated High School and attended University! 
                    </p>
                </section>
            </div>
            
            {/** Sports & Activities */}
            <div id="activities">
                <section className="section">
                    <h3 className="sub-header"> Sports & Activities </h3>
                    <span className="sub-title"> 
                        <GiSoccerBall/> Soccer
                    </span>
                    <p>
                        Whether it was through street soccer or for a team, I grew up always enjoying the sport. However, midway through high-school, I eventually switched to running.
                    </p>
                    <span className="sub-title"> 
                        <FaRunning/> Track
                    </span>
                    <p>
                        I first ran track in 8th grade, stopped for two years & then continued again my last 2 years of High School & have continued since. Here are some of my memorable personal bests:
                        A 4:16 min 1500m at PLU and a 15:43 5k at PLU.
                    </p>
                    <span className="sub-title"> 
                        <GiRunningShoe/> Cross Country
                    </span>
                    <p>
                        I really enjoy the team dynamic that a XC team has offer. Also find running different courses more fun that pure laps on a track. Some of my best times from cross country include: A 26:17 min 8k and a 1:18:05 Half marathon leading 
                        into one of my XC seasons. 
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
                        I also enjoy playing: <FaVolleyballBall/> volleyball, <MdSportsTennis/> badminton, <FaHiking/> hiking, <GiMountainClimbing/> Rock Climbing and
                        strategy games such as  <FaChess/> Chess.
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