import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] =useState(5);
//  let counter =5

 const addvalue =() =>{
  console.log("clicked", counter);
  // counter = counter + 1 
  setCounter(prevCounter=> prevCounter +1)
  setCounter(prevCounter=> prevCounter +1)
  setCounter(prevCounter=> prevCounter +1)
  setCounter(prevCounter=> prevCounter +1)
  setCounter(prevCounter=> prevCounter +1)
 }
 const removeValue =() =>{
  setCounter(counter - 1)
  console.log("clicked", counter);
 }

  return (
    <>
    
     <h1>Mr.shivam with react</h1>
     <h2>Counter Value:{counter}</h2>
     <button 
     onClick={addvalue}
     >Add value</button>
     <br />
     <button
     onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
