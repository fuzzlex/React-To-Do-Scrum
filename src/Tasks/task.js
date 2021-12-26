import React from 'react'
import { useState } from 'react'

function Task({ task}) {
    const[classes1, setClasses] = useState("")
    const[classes2, setClasses2] = useState("")
    const changeState = () =>{
      setClasses("new1")
    }
    const changeState2 = () =>{
        setClasses2("new2")
      }
    const dates = new Date();
    const Timer = (time) =>{
    return (time < 10 ) ? `0${time}` : time     
    }

    return (
        <div>
        <div className = {`task ${classes1} ${classes2}`} >
        { !classes1 && !classes2 && <h4 onClick={changeState}>Doing</h4> }
        <h1>{task.text.toUpperCase()}</h1>
        { !classes2 && <h4 onClick={changeState2}>Done</h4>} 
        </div>
        <div className = {`task ${classes1} ${classes2} time`}>
        {classes1 && <span>Start Time:{`${Timer(dates.getHours())}:${Timer(dates.getMinutes())}` }</span>} 
        {classes2 && <span>Finish Time:{`${Timer(dates.getHours())}:${Timer(dates.getMinutes())}` }</span>} 


        </div>
        </div>
    )
}

export default Task
