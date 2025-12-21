import { useState, useEffect } from "react";
import "./Timer.css";
import Navbar from "./Navbar.jsx";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [color, setColor] = useState("#1a167a");

  // تغيير اللون حسب الوقت
  useEffect(() => {
    if (seconds < 60) {
      setColor("#6a0dad"); 
    } else if (seconds < 120) {
      setColor("#f1c40f"); 
    } else {
      setColor("#e74c3c"); 
    }
  }, [seconds]);

  // تشغيل التايمر
  useEffect(() => {
    let interval;

    if (running && !isPaused) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running, isPaused]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // دالة Reset مع تسجيل الجلسة
  const handleReset = () => {
    if (seconds > 0) {
      let sessions = Number(localStorage.getItem("timerSessions") || 0);
      localStorage.setItem("timerSessions", sessions + 1);
    }

    setSeconds(0);
    setRunning(false);
    setIsPaused(false);
  };

  return (
    <>
      <Navbar />

      <div className="timer-page">
        <div className="timer-card">
          <h2>Study Timer</h2>

          <div className="timer-display" style={{ color: color }}>
            {formatTime()}
          </div>

          <div className="timer-buttons">
            {!running && (
              <button onClick={() => { setRunning(true); setIsPaused(false); }}>
                Start
              </button>
            )}

            {running && !isPaused && (
              <button onClick={() => setIsPaused(true)}>
                Pause
              </button>
            )}

            {running && isPaused && (
              <button onClick={() => setIsPaused(false)}>
                Resume
              </button>
            )}

            <button onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;