import React from 'react'

class TodoItem extends React.Component{
    render(){
        return <li>{this.props.todo.title}</li>
    }
}
/*
const TodoItem = (props) => {
    return <li>{props.todo.title}</li>
}
*/

export default TodoItem
