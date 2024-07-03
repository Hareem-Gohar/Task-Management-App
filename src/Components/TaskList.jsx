import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ todos, setTodos, activeTab }) => {
  const filteredTodos = todos.filter((todo) => {
    if (activeTab === "Tasks") {
      return !todo.completedOn; // Show tasks that are not completed
    } else if (activeTab === "Completed") {
      return todo.completedOn; // Show tasks that are completed
    }
    return true; // Default to showing all tasks
  });

  return (
    <div>
      {filteredTodos.map((item, i) => (
        <TaskItem
          key={i}
          index={i}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TaskList;
