import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ activeTab, allTasks, setAllTasks }) => {
  const [completedTodos, setCompleteTodos] = useState([]);

  const handleComplete = (index) => {
    let now = new Date();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let time = `${hours}:${minutes}:${seconds}`;
    let dateFormat = `${date}-${month}-${year}`;
    let currentTime = `${dateFormat} at ${time}`;

    let filteredItem = {
      ...allTasks[index],
      completedOn: currentTime
    };

    let updatedCompTodos = [...completedTodos, filteredItem];
    setCompleteTodos(updatedCompTodos);
    localStorage.setItem("CompTodos", JSON.stringify(updatedCompTodos));

    let updatedTasks = allTasks.filter((_, idx) => idx !== index);
    setAllTasks(updatedTasks);
    localStorage.setItem("todoList", JSON.stringify(updatedTasks));
  };

  const deltBtn = (index, isCompleted) => {
    if (isCompleted) {
      let updatedCompTodos = completedTodos.filter((_, idx) => idx !== index);
      setCompleteTodos(updatedCompTodos);
      localStorage.setItem("CompTodos", JSON.stringify(updatedCompTodos));
    } else {
      let reducedTodo = [...allTasks];
      reducedTodo.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(reducedTodo));
      setAllTasks(reducedTodo);
    }
  };

  useEffect(() => {
    // Load tasks from localStorage
    const storedTasks = JSON.parse(localStorage.getItem("todoList")) || [];
    const storedCompTodos = JSON.parse(localStorage.getItem("CompTodos")) || [];
    setAllTasks(storedTasks);
    setCompleteTodos(storedCompTodos);
  }, []);

  return (
    <>
      <div>
        {activeTab === "Tasks" && allTasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            handleComplete={handleComplete}
            deltBtn={() => deltBtn(index, false)}
          />
        ))}
      </div>
      <div>
        {activeTab === "Completed" && completedTodos.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            isCompleted
            deltBtn={() => deltBtn(index, true)}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
