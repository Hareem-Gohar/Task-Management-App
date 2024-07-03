import React, { useState } from 'react'
import Button from './Button'

const TaskInput = ({ newTitle, setNewTitle, newDescription, setNewDescription , allTasks , setAllTasks }) => {

  const addTodoItem = () => {
    //console.log(newDescription, newTitle)
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    }
    let updatedTodoArr =[...allTasks, newTodoItem];
    setAllTasks(updatedTodoArr);
    setNewTitle('');
    setNewDescription('');
  }
  return (
    <div className='flex flex-wrap justify-between gap-y-5 w-full border-b-2 border-b-slate-600 pb-5'>
      <div className="flex flex-col gap-3 w-full sm:w-[47%] md:w-2/5">
        <label htmlFor="text" className='text-2xl text-white'>Title</label>
        <input type="text" className="form-control px-3 py-2 w-full rounded-sm focus:outline-3 focus:outline-slate-500" placeholder="What's the tilte of your task" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      </div>
      <div className="flex flex-col gap-3 w-full sm:w-[47%] md:w-2/5">
        <label htmlFor="text" className='text-2xl text-white'>Description</label>
        <input type="text" className="form-control px-3 py-2 w-full rounded-sm focus:outline-3 focus:outline-slate-500" placeholder="What's the Description of your Task" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
      </div>
      <div className="flex items-end w-full md:w-auto">
        <Button text="Add" className="w-full" onClick={addTodoItem} />
      </div>
    </div>
  )
}

export default TaskInput