import React, { useEffect, useState } from 'react'

function IntervalFunction() {
    const [count,setCount]=useState(0);
    const tick=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        const interval= setInterval(tick,1000);
        return ()=>{
            clearInterval(interval);
        }
    },[count]);
  return (
    <div>
      <h1>tis is same above aporoch with function comp</h1>
      <h1 className='text text-success'>{count}</h1>
    </div>
  )
}

export default IntervalFunction
