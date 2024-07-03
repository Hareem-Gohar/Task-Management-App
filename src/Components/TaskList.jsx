import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ allTasks, setAllTasks }) => {


  return (
    <div>
      {allTasks.map((task, index) => (
        <TaskItem
          key={index}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          task={task}
          index={index}/>
      ))
      }
    </div>
  );
};

export default TaskList;
