import { useEffect, useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Header from './components/Header'
import ShowTask from './components/ShowTask'

function App() {
  const [taskList,setTaskList]=useState(JSON.parse(localStorage.getItem("taskList"))||[]);
  const [task,setTask]=useState({});//Used to passing state info for editing from showTask to addTask

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <Header/>
      <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
      <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
    </>
  )
}

export default App
