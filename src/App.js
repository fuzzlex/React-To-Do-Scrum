import './App.css';
import Header from './header/head';
import Form from './Form/form';
import { useState } from 'react/cjs/react.development';
import Tasks from './Tasks/tasks';

function App() {
  const[tasks, setTasks] = useState([])  
  const addvalue = (newtext) =>{
    const id = Math.round(Math.random() * 100)
    const allText = {id , ...newtext}
    setTasks([...tasks, allText])
  
  }

  return (
    <div className='all'>

    <Header/>
    <Form
    addvalue={addvalue}
    />

    <Tasks
      tasks = {tasks}
    
    />


    </div>
  );
}

export default App;
