import React from "react";
import { MdDeleteOutline, MdDoneOutline } from "react-icons/md";

const TaskItem = ({ item, index, todos, setTodos }) => {
  const deleteTodo = () => {
    let reducedTodo = [...todos];
    reducedTodo.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const completeTodo = () => {
    let now = new Date();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let completedOn = `${date}-${month}-${year} at ${hour}:${minute}:${second}`;

    let updatedTodo = [...todos];
    updatedTodo[index] = { ...updatedTodo[index], completedOn };

    setTodos(updatedTodo);
    localStorage.setItem("todoList", JSON.stringify(updatedTodo));
  };

  return (
    <div className="bg-slate-900 border border-slate-500 gap-y-3 my-3 p-5 flex flex-wrap justify-between items-center">
      <div>
        <h3 className="text-white text-lg sm:text-2xl font-semibold pb-1">{item.title}</h3>
        <p className="text-sm text-slate-300">{item.description}</p>
      </div>
      <div className="icons flex gap-3 text-white w-full md:w-auto">
        <MdDeleteOutline
          className="hover:text-red-400 hover:cursor-pointer"
          fontSize={35}
          onClick={deleteTodo}
        />
        <MdDoneOutline
          className="hover:text-green-400 hover:cursor-pointer"
          fontSize={35}
          onClick={completeTodo}
        />
      </div>
    </div>
  );
};

export default TaskItem;
