import React from 'react'
import {Handle} from 'react-flow-renderer'

export function Task({task}){

  return (
    <>
      <div className={"task"}>
        <Handle type={'target'} position={"left"}/>
        <Handle type={"source"} position={"right"}/>
    <input
      placeholder={"task"}
      value={task}
    />
      <button>Done</button>
    </div>
    </>
  )
}