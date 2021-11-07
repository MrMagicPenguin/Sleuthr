import React from 'react'
import {Handle} from 'react-flow-renderer'

export function Task({task, index}){

  // ? Style Handles using something like
  // ? style={{top:25 * index}}
  // ? where 25 is the size of the div vertically by the number of tasks.
  return (

    <>
    <div>
      <Handle type={"source"} position={"left"}/>
      <Handle type={"target"} position={"right"}/>
      <input value={task.name}/>
      <button>Done</button>
      <button>Delete</button>
    </div>
    </>
  )
}