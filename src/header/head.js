import React from 'react'
import "./head.css"

export default function Header() {
    return (
        <div>
        <h1 style={{color:"red", textAlign:"center"}}>React-To-Do-Scrum</h1>
    
            <ul className='head'>
                <li className='title scrumBoard'>Enter your To-Does</li>
                <li className='title'>Doing</li>
                <li className='title'>Done</li>
                
            </ul>

               
        </div>
    )
}
