import React from 'react'
import Task from './Task'
import TaskAdd from './TaskAdd'

const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <>
        {tasks.map((task) => (
        <Task key={task.Id}  task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
        </>
    )
}

export default Tasks
