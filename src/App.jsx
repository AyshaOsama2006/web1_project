import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import Home from "./components/home.jsx";
import TodoList from "./components/todoList.jsx";
import Timer from "./components/timer.jsx";
import Profile from "./components/profile.jsx";
import StatisticsScreen from "./components/statisticsscreen.jsx";
import Upload from "./components/upload.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />

      <Route path="/todolist" element={<TodoList />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/upload" element={<Upload />} />
      <Route path="/statisticsscreen" element={<StatisticsScreen />} />
    </Routes>
  );
}

export default App;
