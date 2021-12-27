import React from 'react'
import Task from './task'

function Tasks({tasks,deleteTask}) {
    return (
        <div>
        {tasks.map((task) =>(
            <Task
        task={task}
        key={task.id}
        deleteTask = {deleteTask}

        />
      

        )

        )}
     
            
        </div>
    )
}

export default Tasks
