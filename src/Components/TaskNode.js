import React  from 'react'
import { Task } from './Task'

function TaskNode({data}) {
    return (
        <>
        <input placeholder={data.label}/>
          <div className="taskNode">
              {data.tasks.map((task, index) =>{
                  return <Task task={task} index={index}/>
              })}
          </div>
        </>

    )
}

export default TaskNode
