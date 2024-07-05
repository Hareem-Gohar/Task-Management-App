import React, { useState } from "react";
import { MdDeleteOutline, MdDoneOutline } from "react-icons/md";

const TaskItem = ({ allTasks , completedTodos , setCompleteTodos , index , task, setAllTasks , handleComplete }) => {
  const deltBtn = () =>{
    let reducedTodo = [...allTasks];
    reducedTodo.splice(index,1);
    localStorage.setItem("todoList", 
      JSON.stringify(reducedTodo)
    )
    setAllTasks(reducedTodo);
  }
  
 
  return (
    <>
      <div
        className="bg-slate-900 border border-slate-500 gap-y-3 my-3 p-5 flex flex-wrap justify-between items-center"
      >
        <div>
          <h3 className="text-white text-lg sm:text-2xl font-semibold pb-1">
            {task.title}
          </h3>
          <p className="text-sm text-slate-300">{task.description}</p>
        </div>
        <div className="icons flex gap-3 text-white w-full md:w-auto">
          <MdDeleteOutline
            className="hover:text-red-400 hover:cursor-pointer"
            fontSize={35}
            onClick={()=>deltBtn(index)}
          />
          <MdDoneOutline
            className="hover:text-green-400 hover:cursor-pointer"
            fontSize={35}
            onClick={()=>handleComplete(index)}
          />
        </div>
      </div>
    </>
  );
};

export default TaskItem;


