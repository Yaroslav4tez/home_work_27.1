import React, { useState } from "react";
import "/src/home/home.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    setTasks([...tasks, { text: value, done: false }]);
    setValue("");
  };

  const toggleDone = (idx) => {
    const copy = [...tasks];
    copy[idx].done = !copy[idx].done;
    setTasks(copy);
  };

  const removeTask = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  return (
    <div className="container">
      <h1>ToDoList</h1>

      <form className="form js--form" onSubmit={submit}>
        <input
          type="text"
          name="value"
          required
          className="form__input js--form__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="form__btn">Додати</button>
      </form>

      <ul className="js--todos-wrapper">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`todo-item ${task.done ? "todo-item--checked" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(index)}
            />
            <span className="todo-item__description">{task.text}</span>
            <button
              className="todo-item__delete"
              onClick={() => removeTask(index)}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
