import React from 'react'
import Header from './Components/Header'
import "./App.css"
import TaskBox from './Components/TaskBox'
const App = () => {
  return (
    <>
      <div className="bg-slate-800  ">
        <div className="max-w-7xl w-full mx-auto flex flex-col min-h-svh h-full justify-center items-center px-5 py-2">
          <Header title="My To-Dos" />
          <TaskBox />
        </div>
      </div>

    </>
  )
}

export default App