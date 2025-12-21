import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import Navbar from "./Navbar.jsx";

import logo from "../assets/studymateLogo/study.png";
import timer from "../assets/studymateLogo/timer.png";
import todo from "../assets/studymateLogo/Colorful Geometric To Do List A4 Document.png";
import files from "../assets/studymateLogo/file shape .png";

function Home() {
   const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState("");

  return (
    <>
      
      <Navbar />

      <div className="home">
        
        <img src={logo} alt="Study Mate Logo" className="logo" />
        <h1>Welcome to StudyMate!</h1>
        <p className="subtitle">
          Stay focused, organized, and boost your productivity!
        </p>

        
        <div className="cards">
          <div
            className="card"
            onClick={() => navigate("/timer")}
          >
            <img src={timer} alt="Timer" />
            <button>TIMER</button>
          </div>

          <div
            className="card"
            onClick={() => navigate("/todoList")}
            
          >
            <img src={todo} alt="To Do List" />
            <button>TO DO LIST</button>
          </div>

          <div
            className="card"
            onClick={() => setSelectedFeature("Upload Files")}
          >
            <img src={files} alt="Upload Files" />
            <button>UPLOAD FILES</button>
          </div>
        </div>

      
        {selectedFeature && (
          <div className="selected-feature">
            <p>
              You selected: <strong>{selectedFeature}</strong>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
