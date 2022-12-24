import React from 'react'
import './Counter.css'

type Props = {
    counter:number,
    setCounter:any
}

const incrementNumber = (counter:number,setCounter:any) => {
    //* Dentro del setcounter debe ir el NUEVO valor del estado (counter)
    setCounter(counter+1)
    // setCounter( (curr:any) => {
    //     if(curr % 2 == 0){
    //         return curr+3
    //     }else{
    //         return curr+1
    //     }
    // } )
}

const Counter = ({counter,setCounter}:Props) => {
  return (
    <div>
        <button onClick={() => incrementNumber(counter,setCounter)}>Click</button>
        <h2>Counter: {counter}</h2>
    </div>
  )
}

export default Counter