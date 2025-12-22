import { useState, useEffect } from "react";
import "./Profile.css";
import Navbar from "./Navbar.jsx";

function Profile() {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(storedUser.name || "");
  const [email, setEmail] = useState(storedUser.email || "");
  const [university, setUniversity] = useState(storedUser.university || "");
  const [country, setCountry] = useState(storedUser.country || "");
  const [major, setMajor] = useState(storedUser.major || "");

  const [completedTasks, setCompletedTasks] = useState(0);
  const [timerSessions, setTimerSessions] = useState(0);

  useEffect(() => {
    const tasks = localStorage.getItem("completedTasks");
    const sessions = localStorage.getItem("timerSessions");

    if (tasks) setCompletedTasks(Number(tasks));
    if (sessions) setTimerSessions(Number(sessions));
  }, []);

  function handleSave() {
    const updatedUser = {
      name,
      email,
      university,
      country,
      major,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditing(false);
    window.location.reload();
  }

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="profile-card">
          <h2>Your Profile</h2>

          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="profile-img"
          />

          {}
          <p><strong>Name:</strong> {name || "Not set"}</p>
          <p><strong>Email:</strong> {email || "Not set"}</p>
          <p><strong>University:</strong> {university || "Not set"}</p>
          <p><strong>Country:</strong> {country || "Not set"}</p>
          <p><strong>Major:</strong> {major || "Not set"}</p>

          {}
          <div className="stats-box">
            <p>✔ Completed Tasks: {completedTasks}</p>
            <p>⏱️ Timer Sessions: {timerSessions}</p>
          </div>

          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>

          {isEditing && (
            <div className="edit-form">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />

              <input
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                placeholder="Enter university"
              />

              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter country"
              />

              <input
                type="text"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                placeholder="Enter major"
              />

              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;