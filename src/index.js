import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Counter from './components/Counter.js'
import './style.css'
import App from './components/todos/App'

// const NameDecorator = (props) => (<div className="name">{props.name}</div>)
// const Hello = ({name, age}) => {
//     return (
//         <div>
//             <div className="header">Hello, <NameDecorator name={name} /></div>
//             <div className="header">You're {age} years old</div>
//         </div>
//     )
// }
// ReactDOM.render(<Hello name="nick" age="30"/>, document.getElementById('react-root'))
const render = (App) => (
    ReactDOM.render(
        // <AppContainer>
        //     <Counter label="Counterplusplus" startFrom={3} />
        // </AppContainer>,
        <AppContainer>
            <App />    
        </AppContainer>,
        document.getElementById('react-root')
    )
)

//render(Counter)
render(App)

if (module.hot) {
    //module.hot.accept('./components/Counter.js', () => {
    module.hot.accept('./components/todos/App', () => {
        //render(Counter)
        render(App)
    })
}