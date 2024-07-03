import React from "react";
import Button from "./Button";

const Tabs = ({ activeTab, setActiveTab }) => {
  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-5 flex gap-1 items-start">
      <Button
        text="Tasks"
        className={`w-auto ${activeTab === "Tasks" ? "bg-green-500" : "bg-gray-500"}`}
        onClick={() => toggleTab("Tasks")}
      />
      <Button
        text="Completed"
        className={`w-auto ${activeTab === "Completed" ? "bg-green-500" : "bg-gray-500"}`}
        onClick={() => toggleTab("Completed")}
      />
    </div>
  );
};

export default Tabs;
