import InputForm from "./components/InputForm";
import { useEffect, useState } from "react";
import Main from "./components/Main";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [hide, setHide] = useState(false);

  const filterTasks = (tasks, option) => {
    switch (option) {
      case "completed":
        return tasks.filter((element) => element.completed);
      case "active":
        return tasks.filter((element) => !element.completed);
      default:
        return tasks;
    }
  };

  const clearCompleted = () => {
    const updateTasks = filterTasks(tasks, "active");
    setTasks([...updateTasks]);
  };

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(tasks);
    }
  }, []);

  useEffect(() => {
    if (tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <>
      <section className="todoapp">
        <InputForm
          tasks={tasks}
          setTasks={setTasks}
          hide={hide}
          setHide={setHide}
        />
        <Main
          tasks={tasks}
          setTasks={setTasks}
          filter={filter}
          hide={hide}
          filterTasks={filterTasks}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>
              {tasks.filter((element) => element.completed === false).length}
            </strong>{" "}
            task{tasks.length > 1 ? "s" : ""} left
          </span>
          <ul className="filters">
            <li onClick={() => setFilter("All")}>
              <a className={filter === "All" ? "selected" : ""}>All</a>
            </li>
            <li onClick={() => setFilter("active")}>
              <a className={filter === "active" ? "selected" : ""}>Active</a>
            </li>
            <li onClick={() => setFilter("completed")}>
              <a className={filter === "completed" ? "selected" : ""}>
                Completed
              </a>
            </li>
          </ul>
          <button
            className={
              filterTasks(tasks, "completed").length > 0
                ? "clear-completed"
                : "hide"
            }
            onClick={clearCompleted}
          >
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Written by <a href="http://evanyou.me">Evan You</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
