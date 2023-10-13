import React, {useState, useEffect} from 'react'

import style from './Results.module.css'
let timer;
export default function Result() {
const [counterState, setCounter] = useState(0);

useEffect(() => {
clearInterval(timer);
timer = setInterval( ()=>{
    if(counterState === 70){
    clearInterval(timer)
    return
    }
    setCounter(prev => prev + 1)
    // counter++
}, 10)
return () =>clearInterval(timer)

}, [counterState]);

  return (
    <div className={`${style.r_container}`}>
        <p className={`${style.r_result}`}>Your Result</p>
        <div className={`${style.r_num_container}`}>
            <h1>{counterState}</h1>
            <p> of 100</p>
        </div>
        <h2 className={`${style.heading}`}> Great</h2>
        <p className={`${style.description}`}>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  )
}
