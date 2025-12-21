import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Home from "./components/Home.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todoList" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
