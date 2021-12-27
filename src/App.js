import './App.css';
import Header from './header/head';
import Form from './Form/form';
import { useState } from 'react';
import Tasks from './Tasks/tasks';

function App() {
  const[tasks, setTasks] = useState([])  
  const addvalue = (newtext) =>{
    const id = Math.round(Math.random() * 100)
    const allText = {id , ...newtext}
    setTasks([...tasks, allText])
  
  }
  const deleteTask = (deletedId) =>{
    setTasks(tasks.filter((task) =>
        task.id !== deletedId
    ))
}

  return (
    <div className='all'>

    <Header/>
    <Form
    addvalue={addvalue}
    />

    <Tasks
      tasks = {tasks}
      deleteTask = {deleteTask}
    
    />


    </div>
  );
}

export default App;
