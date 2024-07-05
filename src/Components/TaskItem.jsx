import React from "react";
import { MdDeleteOutline, MdDoneOutline } from "react-icons/md";

const TaskItem = ({ task, index, handleComplete, deltBtn, isCompleted }) => {
  return (
    <div className="bg-slate-900 border border-slate-500 gap-y-3 my-3 p-5 flex flex-wrap justify-between items-center">
      <div className="w-[70%]">
        <h3 className="text-white text-lg sm:text-2xl font-semibold pb-1">
          {task.title}
        </h3>
        <p className="text-sm text-slate-300">{task.description}</p>
        {isCompleted && (
          <p className="text-sm text-slate-300">Completed on: {task.completedOn}</p>
        )}
      </div>

      <div className="icons w-[20%] flex justify-end gap-3 text-white md:w-auto">
        <MdDeleteOutline
          className="hover:text-red-400 hover:cursor-pointer"
          fontSize={35}
          onClick={deltBtn}
        />
        {!isCompleted && (
          <MdDoneOutline
            className="hover:text-green-400 hover:cursor-pointer"
            fontSize={35}
            onClick={() => handleComplete(index)}
          />
        )}
      </div>
    </div>
  );
};

export default TaskItem;
