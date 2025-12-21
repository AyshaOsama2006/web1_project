import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import "./StatisticsScreen.css";

// Fake API (simulates fetching stats)
async function fetchStats() {
  // simulate network delay
  await new Promise((r) => setTimeout(r, 400));

  // you can later replace this with real fetch(...)
  return {
    studyHours: 12,
    completedTasks: 8,
  };
}

export default function StatisticsScreen() {
  const [studyHours, setStudyHours] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadStats() {
      try {
        setLoading(true);
        const data = await fetchStats();
        if (!mounted) return;

        setStudyHours(data.studyHours);
        setCompletedTasks(data.completedTasks);
      } catch (err) {
        console.error("Failed to load statistics:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadStats();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="statsPage">
      <div className="statsCard">
        <h1 className="statsTitle">STATISTICS</h1>

        <div className="statsGrid">
          <Card className="statBox" elevation={0}>
            <div className="statLabel">Total Study Hours</div>
            <div className="statValue">{loading ? "..." : studyHours}</div>
          </Card>

          <Card className="statBox" elevation={0}>
            <div className="statLabel">Completed Tasks</div>
            <div className="statValue">{loading ? "..." : completedTasks}</div>
          </Card>
        </div>

        <div className="statsNote">
          <div className="noteLabel">Notes:</div>
          <div className="noteLines">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
