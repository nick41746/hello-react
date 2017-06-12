import React, {Component} from 'react'

export default class NewToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.HandleText = this.HandleText.bind(this)
        this.HandleKeyDown = this.HandleKeyDown.bind(this)
       // this.SendToDo = this.SendToDo.bind(this)
    }
    
    HandleText(event) {
        this.setState({
            text: event.target.value
        })
    }

    HandleKeyDown(event) {
        if(event.keyCode === 13) {
            event.preventDefault()
            this.props.AddToDoList(this.state.text)
        }
    }

    SendToDo() {
        this.props.AddToDoList(this.state.text)
    }

    render() {
        //console.log(this.state.text)
        return (
            <div>
                <input type="text" onChange={this.HandleText} onKeyDown={this.HandleKeyDown} />
                <button onClick={this.SendToDo.bind(this)}>Add</button>
            </div>
        )
    }
}