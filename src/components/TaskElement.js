import React from "react";
import { useState } from "react";

const TaskElement = ({ task, taskIndex, tasks, setTasks }) => {

  const [toggle, setToggle] = useState(true);
 

  const updateTitle = (e) => {
    if (e.key === "Enter") {
      let newTasks = tasks;
      newTasks[taskIndex].title = e.target.value;
      setTasks([...newTasks]);
      setToggle(!toggle);
    }

  };

 const deleteMessage = () => {
    let newTasks = tasks.filter((element, index) => index !== taskIndex);
    setTasks(newTasks);
  };


  const updateChecked = (e) => {
    let newTasks = tasks;
    const newTask = {
      title: task.title,
      completed: !task.completed,
    };
    newTasks[taskIndex] = newTask;
    setTasks([...newTasks]);
  };

  return (
    <>
      {toggle === true ? (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={task.completed}
            onChange={updateChecked}
          />
          <label onDoubleClick={() => setToggle(!toggle)}>{task.title}</label>
          <button className="destroy" onClick={deleteMessage}>&#10005;</button>
        </div>
      ) : (
        <>
          <input
            className="edit"
            type="text"
            defaultValue={task.title}
            onBlur={(e) => {
              updateTitle(e)
              setToggle(!toggle)
            }}
            onKeyPress={updateTitle}
          />
        </>
      )}
    </>
  );
};

export default TaskElement;
