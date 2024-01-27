import React from 'react'
import {useState} from 'react'
import './index.css'
const EvenOddApp = () => {
  const [randomNumber, setRandomNumber] = useState(0)
  const [typeOfNumber, setTypeOfNumber] = useState('Even')
  const generateRandowNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    setRandomNumber(newRandomNumber)
    const isEven = newRandomNumber % 2 === 0
    setTypeOfNumber(isEven ? 'Even' : 'Odd')
  }
  return (
    <>
      <div className="page">
        <h1>Count {randomNumber}</h1>
        <p>Count is {typeOfNumber}</p>
        <div>
          <button className="button" onClick={generateRandowNumber}>
            Increment
          </button>
        </div>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    </>
  )
}
export default EvenOddApp
