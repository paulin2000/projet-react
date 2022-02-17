import React, { useState } from "react";
import TaskElement from "./TaskElement";

const Main = ({tasks, setTasks, filter, hide, filterTasks}) => {
  
  const filteredTasks = filterTasks(tasks, filter);

  return (
    <main className={hide === true ? "main" : "hide"}>
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        {tasks &&
          filteredTasks.map((element, index) => {
            return (
              <li
                className={element.completed ? "todo completed" : "todo"}
                key={index}
              >
                <TaskElement
                  task={element}
                  taskIndex={index}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              </li>
            );
          })}
      </ul>
    </main>
  );
};

export default Main;
