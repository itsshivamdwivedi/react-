import { useState } from 'react'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import { InputBox } from './components'
import './App.css'

function App() {
 const [amount,setAmount] = useState(0)
 const [from,setFrom] = useState("usd")
 const [to,setTo] = useState("inr")
 const [convertedAmount,setconvertedAmount] = useState(0)

const currencyInfo = useCurrencyInfo(from)
const options =Object.keys(currencyInfo)

// It is used to swap the variables. basically we are swapping the inr to usd and usd to inr in our converter 

const swap = () => {
  setFrom(to)
  setTo(from)
  setconvertedAmount(amount)
  setAmount(convertedAmount)
}

// setconvertedAmount this state will display the final result 

const convert = () => {
  setconvertedAmount(amount*currencyInfo[to])
}

  return (
    <>
      <h1 className='text-3xl bg-orange-500 '>Currency Converter</h1>
    </>
  )
}

export default App
