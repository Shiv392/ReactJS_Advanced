import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display,setDisplay]=useState(true)
  return (
    <div>
      <h1 className='text text-danger text-center'>Click HERE </h1>
      <button onClick={()=>setDisplay(!display)} className='btn btn-dark btn-md'>Toggle Hook Mouse</button>
      { display && <HookMouse></HookMouse>}
    </div>
  )
}

export default MouseContainer
