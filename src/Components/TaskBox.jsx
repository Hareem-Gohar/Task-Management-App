import React, { useEffect, useState } from "react";
import TaskInput from "./TaskInput";
import Tabs from "./Tabs";
import TaskList from "./TaskList";

const TaskBox = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState("Tasks");

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updatedTodosArr = [...todos, newTodoItem];

    setTodos(updatedTodosArr);
    localStorage.setItem("todoList", JSON.stringify(updatedTodosArr));
    setNewTitle("");
    setNewDescription("");
  };

  useEffect(() => {
    let savedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (savedTodoList) {
      setTodos(savedTodoList);
    }
  }, []);

  return (
    <div className="bg-gray-700 rounded-sm max-w-5xl w-full h-auto p-8">
      <TaskInput
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        handleAddTodo={handleAddTodo}
      />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <TaskList todos={todos} setTodos={setTodos} activeTab={activeTab} />
    </div>
  );
};

export default TaskBox;
