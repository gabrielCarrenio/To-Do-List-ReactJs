import { useState } from "react";

export default function Form({ onTask }) {
  const [task, setTask] = useState("");

  const changeTask = (e) => {
    setTask(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onTask(task);
        }}
      >
        <input
          onChange={changeTask}
          value={task}
          type="text"
          placeholder="add your new list"
        />
        <button>Add</button>
      </form>
    </>
  );
}
