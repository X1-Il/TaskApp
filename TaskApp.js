import React, { useState } from "react";

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleNewTaskChange(event) {
    setNewTask(event.target.value);
  }

  function handleTaskSubmit(event) {
    event.preventDefault();
    if (newTask !== "") {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function handleTaskDelete(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleTaskComplete(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleTaskSubmit}>
        <label>
          New Task:
          <input type="text" value={newTask} onChange={handleNewTaskChange} />
        </label>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskComplete(task.id)}
              />
              {task.title}
            </label>
            <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskApp;
