import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {
    const [timer,setTimer]=useState(0);
    let interval=useRef();
    useEffect(()=>{
         interval.current= setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000);

        return ()=>{
            clearInterval(interval.current);
        }
    },[])
  return (
    <div>
      <h1 className='text text-success'>Hook Timer: {timer}</h1>
      <button onClick={()=>clearInterval(interval.current)} className='btn btn-danger'>Stop Hook Timer</button>
    </div>
  )
}

export default HookTimer
