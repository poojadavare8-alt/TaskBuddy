import React, { useEffect, useState } from "react";
import Taskform from "./Componenets/Taskform";
import Tasklist from "./Componenets/Tasklist";
import ProgressTracker from "./Componenets/ProgressTracker";

export default function App() {

  // Load tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Search state
  const [search, setSearch] = useState("");

  // Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Update Task
  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear All
  const clearTasks = () => {
    setTasks([]);
  };

  // Search
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Task Buddy</h1>
      <h4>
        <i>The Friendly Task Manager</i>
      </h4>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search Tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <Taskform addTask={addTask} />

      <Tasklist
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />

      <ProgressTracker tasks={tasks} />

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  );
}

