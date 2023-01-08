import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes, NavLink} from "react-router-dom";
import {About} from "./pages/About";
import {Home} from "./pages/Home";
import {Projects} from "./pages/Projects";
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { StarWarsProject } from './pages/StarWarsProject';
import Navbar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    
  <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/" element={< Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" >
          <Route index element={<Projects />} />
          <Route path=":starwars" element={< StarWarsProject/>} />
        </Route>
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />

      </Routes>
    </div>
    <Footer/>
  </>
  );

}

export default App;
