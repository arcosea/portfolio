import "../styling/Home.css";
import {Link} from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import * as THREE from "three";
import {Text} from 'troika-three-text';
import { WelcomeCanvas } from "./WelcomeCanvas";

export function Home(){
    return (
        <div className="home">
            <WelcomeCanvas/>
            <h1 > Welcome to my Page!</h1>
            



        </div>
    );
}