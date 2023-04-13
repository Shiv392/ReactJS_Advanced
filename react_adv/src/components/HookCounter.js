import React, {useState}from 'react'

function HookCounter() {
    const [count,setCount]=useState(0)
  return (
    <div className='container mt-3'>
      <button className='btn btn-dark btn-lg' onClick={()=> setCount(count+1)}>Count :{count} </button>
    </div>
  )
}

export default HookCounter
