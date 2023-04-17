import React, { useEffect, useState } from 'react'

function HookCounter_useeffect() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('')
    useEffect(()=>{ //same as componentDidUpdate()
        //takes function as pera that occurs effect
        document.title=`You Clicked ${count} Times`;
        console.log('this is useEffect');
    },[count])
  return (
    <div>
        <h1 className='text text-center text-dark'>useEffect </h1>
        <input  className='form-control' placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={()=>setCount(count+1)} className='btn btn-success btn-md'>Clicked : {count} Times</button>
    </div>
  )
}

export default HookCounter_useeffect
