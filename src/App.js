import React from 'react';
import Header from './Component/Header';
import Tasks from './Component/Tasks';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import Styles from './App.css';
import TaskAddDisplay from './Component/TaskAddDisplay';
import TaskAdd from './Component/TaskAdd';
import Divider from '@material-ui/core/Divider'
import { Searchbar } from './Component/Searchbar';
import Task from './Component/Task';
import { PostAddSharp, Search } from '@material-ui/icons';
import Button from './Component/Button'


function App(){
    const [searchvalue, setSearchvalue] = useState("");
    const [ShowAddTask, setShowAddTask] = useState(false); //show or hide task form 
    const [tasks, settasks] = useState(
        [{
            Id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            Id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            Id: 3,
            text: 'Food Shopping',
            day: 'Feb 6th at 4:30pm',
            reminder: true,
        }]
    ) 
    //Delete task
    const deleteTask = (Id) =>{
        settasks(tasks.filter((task) => task.Id !== Id))
    }

    //Add task
    const addTask = (task) => {
        const Id = Math.floor(Math.random() * 10000) + 1;
        //const nId = tasks.length + 1;
        const newtask = {Id, ...task}
        settasks([...tasks, newtask])
        /*
        console.log(
        settasks(tasks.push({Id:4,text:"Watch footbal",day:"02-03-20", reminder: false}))
        )
        */
    }

    //Toggle reminder
    const toggleReminder = (Id) => {
        settasks(tasks.map((task) => task.Id === Id ? {...task, reminder: !task.reminder}: task));
    }
    //search bar
    const filtertasks = tasks.filter((task) =>  {
            return searchvalue.includes(task.title)
        })
        {filtertasks.map((task) => {return <Task key={task}>{tasks}</Task>})}
       

    const searchhandler = (e) => {
        setSearchvalue(e.target.value)
    }    

    const filtertask = tasks.filter((task) => {
        return task.text.toLocaleLowerCase()
        .includes(searchvalue);
    })

    const sId = Math.floor(Math.random() * 10000) + 1;
    

     /*
    const filtertask = (post,query) => {
        if(!query){
            return tasks;
        }
        return tasks.filter((task) => {
            const taskName = task.text.toLocaleLowerCase();
            return taskName.includes(query);
        });
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}
           onToggle={toggleReminder}/>) : "No task to show"}
    }
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}
           onToggle={toggleReminder}/>) : "No task to show"}

           {searchvalue.length > 0 ? (filtertask.map((task) => {
                 return <Tasks key={task.Id} tasks={tasks} onDelete={deleteTask}
                 onToggle={toggleReminder}/> })) : "No result for Search"} 
    */

    return (
        <div className='maincontainer'>
            <div className="container">
            <Searchbar value={searchvalue} onchange={searchhandler}/>
            <br/>
            <Header title= {"Task Tracker"} onAdd={() => setShowAddTask(!ShowAddTask)}/>
           <br/> 
           {tasks.length < 0 ? "No task to show":filtertask.map((task) => {
               return <Task key={task.Id} task={task} onDelete={deleteTask}
               onToggle={toggleReminder}/>
           })}
           <br/>
           <Button text="Add" onclick={() => setShowAddTask(true)}/>
            </div>
            {ShowAddTask && <TaskAdd onAdd={addTask}/>}
        </div>
    )
}
/*
class App2 extends React.Component {
    render(){
        return <h1>Hello from withing a class</h1>
    }
}
*/
export default App