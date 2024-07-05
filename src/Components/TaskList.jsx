import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({activeTab , allTasks, setAllTasks , index }) => {
  const [completedTodos , setCompleteTodos] = useState([]);
  const handleComplete = () =>{
    let now = new Date();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    let DateFormat = `${date}-${month}-${year}`;
    let currentTime = `${DateFormat} at ${time} `;

    console.log(currentTime);
    let filteredItem = {
      ...allTasks[index],
      completedOn:currentTime
    }
    let updatedCompTodos = [...completedTodos];
    updatedCompTodos.push(filteredItem);
    setCompleteTodos(updatedCompTodos);
  }
  return (
    <>
    <div>
      {activeTab==="Tasks" && allTasks.map((task, index) => (
        <TaskItem
          key={index}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          task={task}
          index={index}
          handleComplete={handleComplete}/>
      ))
      }
    </div>
    <div>
      {activeTab==="Completed" && completedTodos.map((task, index) => (
        <TaskItem
          key={index}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          task={task}
          index={index}
          completedTodos={completedTodos}
          setCompleteTodos={setCompleteTodos}
          handleComplete={handleComplete}/>
      ))
      }
    </div>
    </>
  );
};

export default TaskList;


