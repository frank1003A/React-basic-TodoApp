import React from 'react'
import TodoList from './TodoList'
import Header from './Header'

/*
const person = {
    firstame: "Fred",
    lastname:"bredt",
    Actor: true,
    date: new Date()
}

const {firstame: name, date} = person;
*/
class TodoContainer extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <TodoList todos={this.props.todos}/>
            </div>
        )
    }
}

export default TodoContainer