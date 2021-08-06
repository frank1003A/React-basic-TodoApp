import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {todos:[{
            id:1,
            title:"Web development with react",
            completed: true
        },
    {
        id:2,
        title:"Develop webapp and add content",
        completed: true
    },
    {
        id:3,
        title:"Deploy to live server",
        completed: true
    }
]}

    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.todos.map(todo => (
                     <TodoItem key={todo.id} todo={todo}/>
                     ))}
                </ul>
                
            </div>
        )
    }
}
