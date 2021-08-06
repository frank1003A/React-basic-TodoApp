import React from 'react'
import ClearIcon from '@material-ui/icons/Clear'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`event ${task.reminder ?'reminder': ''}`} onDoubleClick={()=> onToggle(task.Id)}>
            <h3>{task.text} <ClearIcon color='error' onClick={() => onDelete(task.Id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
