import React, { useEffect, useState } from "react";
import TaskInput from "./TaskInput";
import Tabs from "./Tabs";
import TaskList from "./TaskList";

const TaskBox = () => {
  const [activeTab, setActiveTab] = useState("Tasks");
  const [allTasks, setAllTasks] = useState([]);
  const [newTitle , setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  return (
    <div className="bg-gray-700 rounded-sm max-w-5xl w-full h-auto p-8">
      <TaskInput
      newTitle={newTitle}
      setNewTitle={setNewTitle}
      newDescription={newDescription}
      setNewDescription={setNewDescription}
      allTasks={allTasks}
      setAllTasks={setAllTasks}
       />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <TaskList 
      activeTab={activeTab} 
      setAllTasks={setAllTasks}
      allTasks={allTasks}/>
    </div>
  );
};

export default TaskBox;
