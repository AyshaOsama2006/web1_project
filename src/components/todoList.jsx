import "../components/todoList.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTodos } from "../api/todoapi.js";
import Navbar from "./navbar.jsx";

function TodoList() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todo-data"));

    if (saved) {
      setTasks(saved.tasks || []);
      setNotes(saved.notes || "");
    } else {
      fetchTodos()
        .then((data) => {
          const formatted = data.map((item) => ({
            text: item.title,
            done: item.completed,
          }));
          setTasks(formatted);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "todo-data",
      JSON.stringify({ tasks, notes })
    );
  }, [tasks, notes]);

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { text, done: false }]);
    setText("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];

    const wasDone = updated[index].done; 

    updated[index].done = !updated[index].done;

    if (!wasDone && updated[index].done) {
      let count = Number(localStorage.getItem("completedTasks") || 0);
      localStorage.setItem("completedTasks", count + 1);
    }

    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <>
      <Navbar />

      <div className="todo-page">
        <button className="back-btn" onClick={() => navigate("/home")}>
          ← Back
        </button>

        <div className="todo-card">
          <h2>To Do List</h2>

          <div className="add-task">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add task..."
            />
            <button onClick={addTask}>+</button>
          </div>

          <ul>
            {tasks.map((task, i) => (
              <li key={i}>
                <span
                  className={task.done ? "checked" : ""}
                  onClick={() => toggleTask(i)}
                >
                  {task.text}
                </span>

                <div className="task-actions">
                  <input
                    type="checkbox"
                    checked={task.done}
                    readOnly
                    onClick={() => toggleTask(i)}
                  />

                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(i)}
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="notes">
            <p>Notes :</p>
            <textarea
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

export default TodoList;