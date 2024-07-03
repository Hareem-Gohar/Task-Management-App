import React from "react";
import { MdDeleteOutline , MdDoneOutline } from "react-icons/md";

const TabItem = () => {
  return (
    <div className="bg-slate-900 border border-slate-500 my-3 p-5 flex justify-between items-center">
      <div>
        <h3 className="text-white text-2xl font-semibold pb-1">Task</h3>
        <p className="text-sm text-slate-300">Description at Time</p>
      </div>
      <div className="icons flex gap-3 text-white">
      <MdDeleteOutline className="hover:text-red-400 hover:cursor-pointer" fontSize={35} />
      <MdDoneOutline className="hover:text-green-400 hover:cursor-pointer" fontSize={35} />
      </div>
    </div>
  );
};

export default TabItem;
