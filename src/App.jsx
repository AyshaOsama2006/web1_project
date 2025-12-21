import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todoList" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
