import * as THREE from 'three'
import React, { useEffect, useState, useRef } from 'react';
import "../styling/Projects.css";
import { SpaceCanvas } from './SpaceCanvas';

export function Projects(){
  
    return (
      <div className='projects' >
        <SpaceCanvas/>
        <h2 id="proj-header"> Projects</h2>
      </div>



    ); 
}