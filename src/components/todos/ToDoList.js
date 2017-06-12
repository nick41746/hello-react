import React from 'react'

const ToDoList = (props) => (
    <div>
        {props.ToDoList.map((text, index) => <li key={index}>{text}</li>)}
    </div>
)

export default ToDoList