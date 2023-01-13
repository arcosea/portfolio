import "../styling/Home.css";
import {Link} from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import * as THREE from "three";
import {Text} from 'troika-three-text';
import { WelcomeCanvas } from "./WelcomeCanvas";

export function Home(){
    return (
        <div className="home">
            <h1 id="home-header"> Welcome!</h1>
            <WelcomeCanvas/>
        </div>
    );
}