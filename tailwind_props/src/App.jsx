import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/components1'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username:"shivam",
    age:21
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >tailwind test</h1>
    <Card username="shivambhai" btntext="click here"/>
    <Card username="chai wala" btntext ="visit me"/>
    </>
  )
}

export default App
