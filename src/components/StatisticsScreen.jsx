import { useEffect, useState } from "react";
import { Card } from "@mui/material";
import Navbar from "./Navbar.jsx";
import "./StatisticsScreen.css";

export default function StatisticsScreen() {
  const [studyHours, setStudyHours] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setStudyHours(localStorage.getItem("studyHours") || 0);
    setCompletedTasks(localStorage.getItem("completedTasks") || 0);
    setNotes(localStorage.getItem("statsNotes") || "");
  }, []);

  useEffect(() => {
    localStorage.setItem("statsNotes", notes);
  }, [notes]);

  return (
    <>
      <Navbar />

      <div className="statsPage">
        <div className="statsCard">
          <h1 className="statsTitle">STATISTICS</h1>

          <div className="statsGrid">
            <Card className="statBox" elevation={0}>
              <div className="statLabel">Total Study Hours</div>
              <div className="statValue">{studyHours}</div>
            </Card>

            <Card className="statBox" elevation={0}>
              <div className="statLabel">Completed Tasks</div>
              <div className="statValue">{completedTasks}</div>
            </Card>
          </div>

          <div className="statsNote">
            <div className="noteLabel">Notes:</div>

            <textarea
              className="noteInput"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write your notes here..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
