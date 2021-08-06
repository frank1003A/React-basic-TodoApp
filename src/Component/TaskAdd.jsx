import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from './Button' 
import TaskAddDisplay from './TaskAddDisplay'
import Switch from '@material-ui/core/Switch'
import { FormControlLabel, FormGroup } from '@material-ui/core'
import Header from './Header'

const TaskAdd = ({onAdd}) => {
    /*
    const onclick = () => {
        alert('Are you sure you want to add this information');
    }

    const [change, setchange] = useState("")
    
    const handlechange =(e) => {
        setchange(e.target.value)
    }

    const clearHandler = () => {
        setchange("")
    }*/
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('please add a task');
            return;
        }

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setText('')
        setReminder(false)
    }

    return (
        <div className="container">
            <Header title="Add Task"/>
        <div className="add-form" >
            <div className="form-contrl">
            <TextField 
            id="standard-basic1" 
            label="What do you want to do?" 
            variant="standard"
            value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <br/>
            <br/>
            <div className="form-contrl">
            <TextField 
            id="standard-basic2" 
            label="What date?" 
            variant="standard"
            value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <br/>
            <br/>
            <div className="form-contrl">
            <label>Reminder        </label>
            <Switch value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            <br/>
            </div>
            <br/>
            <br/>
            <div className="form-contrl">
            <Button
            color='green' 
            text='Save'
            onclick={onSubmit}></Button>
            </div>
        </div>
        </div>
    )
}

export default TaskAdd