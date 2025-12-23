import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/home.jsx";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import Todolist from "./components/todolist.jsx";
import Timer from "./components/timer.jsx";
import Profile from "./components/profile.jsx";
import Statisticsscreen from "./components/statisticsscreen.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />

      <Route path="/todolist" element={<Todolist />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/upload" element={<Upload />} />
      <Route path="/statisticsscreen" element={<Statisticsscreen />} />
    </Routes>
  );
}

export default App;
