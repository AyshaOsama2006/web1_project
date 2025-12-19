import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home.jsx'; 
import Login from "./components/Login";
import Signup from "./pages/Signup";
import Timer from "./pages/Timer";
function App() {
  return (
    <div className="App">
        <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
       <Route path="/signup" element={<Signup />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
