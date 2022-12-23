import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes, NavLink} from "react-router-dom";
import {About} from "./pages/About";
import {Home} from "./pages/Home";
import {Projects} from "./pages/Projects";
import { EducationWork } from './pages/EducationWork';
import Navbar from './NavBar';

function App() {
  return (
    
  <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/" element={< Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/education" element={<EducationWork />} />
      </Routes>
    </div>
    <div className="footer">
      <p> footer</p>
    </div>
    </>
  );

}

export default App;
