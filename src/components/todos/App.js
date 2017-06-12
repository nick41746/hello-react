import React, {Component} from  'react'
import NewToDo from './NewToDo'
import ToDoList from './ToDoList'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toDoList: []
        }
        this.AddToDoList = this.AddToDoList.bind(this)
    }

    AddToDoList(text) {
        this.setState({
            toDoList: [
                ...this.state.toDoList,
                text
            ]
        })
    }

    render() {
        //console.log(this.state.toDoList)
        return (
            <div>
                <NewToDo AddToDoList={this.AddToDoList} />
                <ToDoList ToDoList={this.state.toDoList}/>
            </div>
        )
    }
}