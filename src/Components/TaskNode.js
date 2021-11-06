import React, { useState } from 'react'
import { Task } from './Task'

function TaskNode({node}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    // TODO new Tasks
    return (
        <>
            <div className="taskNode">
                <input
                    type={"text"}
                    placeholder={"Title"}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder={"Description"}
                    value={description}
                    onChange={(e => setDescription(e.target.value))}
                />
                <Task>

                </Task>
            </div>
        </>

    )
}

export default TaskNode
