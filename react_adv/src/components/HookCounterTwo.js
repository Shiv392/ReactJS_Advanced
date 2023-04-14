import React, {useState} from 'react'

function HookCounterTwo() {
    let initialCount=0;
    const [count,setCount]=useState(initialCount);
    const IncrementFive=()=>{
      for(let i=0;i<5;i++){
        setCount(prevCount=> prevCount+1)
      }
    }
  return (
    <div>
      <h1 className='text text-center text-danger'> Count: <h3 className='text text-center text-dark'>{count}</h3></h1>
      <button onClick={()=>setCount(initialCount)} className='btn btn-lg btn-dark m-3'>Reset</button>
      <button onClick={()=>setCount(count-1)} className='btn btn-lg btn-danger m-3'>Decrement</button>
      <button onClick={()=>setCount(count+1)} className='btn btn-lg btn-warning m-3'>Increment</button>
    <button onClick={IncrementFive} className='btn btn-lg btn-success m-3'>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo
