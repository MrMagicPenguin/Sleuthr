import React from 'react'

import {Handle} from 'react-flow-renderer'

const TaskNode = () => {
  return (
    <>
    <Handle type={'target'} position={"left"}/>
    <div>
      TaskNode
    </div>
      <input type={"text"}/>
    </>

  )
}

export default TaskNode
