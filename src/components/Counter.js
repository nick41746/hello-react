import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: props.startFrom,
            xxx: 5,
            yyy: 6,
        }
        this.incCounter = this.incCounter.bind(this);
        this.decCounter = this.decCounter.bind(this);
    }

    incCounter() {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    decCounter() {
        this.setState({
            counter: this.state.counter - 1,
        })
    }

    render() {
        return (
            <div>
                {this.props.label}: {this.state.counter}
                <input onClick={this.incCounter} type="button" value="+" />
                <input onClick={this.decCounter} type="button" value="-" />
            </div>
        )
    }
}