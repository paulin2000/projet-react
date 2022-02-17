import React from "react";

const InputForm = ({setTasks, hide, setHide}) => {
  const onKeyPressHandler = (e) => {


    if (e.key === "Enter") {

      const newTaskTitle = e.target.value;
      const newTask = {
        title: newTaskTitle,
        completed: false,
      };
      setTasks((oldArray) => [newTask, ...oldArray ]);
      e.target.value = "";
    }
  };

  return (
    <header className="header">
      
      <h1>todos</h1>
      <span id={hide? "hide-selected":"hide"} onClick={()=>setHide(!hide)}>❯</span>
      <input
        className="new-todo"
        type="text"
        placeholder="What needs to be done?"
        onKeyPress={onKeyPressHandler}
      />
    </header>
  );
};

export default InputForm;
