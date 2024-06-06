import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp() {
    return (
        <div>
            <h1>My react app </h1>
        </div>
    )
}
const anotherElement = (
      <a href="https://www.google.com" target='_blank'>Click to visit Google</a>
)
const anotheruser = "chaoi aur code "

const reactElement = React.createElement(
   'a',
    { href: 'https://www.google.com', target: '_blank' },
    'Click me to visit Google',
    anotheruser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement

)