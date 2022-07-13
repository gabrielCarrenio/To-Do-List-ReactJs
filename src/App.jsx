import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(1);

  function onTask(taskInput) {
    if (taskInput) {
      const task = {
        // cargo la task
        description: taskInput,
        id: id,
      };
      setTasks((oldTask) => [...oldTask, task]);
      setId(() => id + 1);
    } else {
      alert("no task pitch!");
    }
  }
  return (
    <div className="App">
      <Form onTask={onTask} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
