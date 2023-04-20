import React, { useState } from 'react'

function Counter_useState() {
    const init=0;
    const [count,setCount]=useState(init);
   const  IncrementFive=()=>{
   for(let i=0;i<5;i++){
    setCount(prevCount=>prevCount+1)
   }
    }

  return (
    <div>
      <h1>this is counter using useState hook</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(init)} className='btn btn-dark'>Reset</button>
      <button onClick={()=>setCount(count+1)} className='btn btn-primary'>Increment</button>
      <button onClick={()=>setCount(count-1)} className='btn btn-danger'>Decrement</button>
  <button onClick={IncrementFive} className='btn btn-success'>Increment 5</button>    
    </div>
  )
}

export default Counter_useState
