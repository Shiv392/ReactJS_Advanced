import React, { useEffect, useRef } from 'react'

function FocustInput() {
    const inputRef= useRef(null);
    useEffect(()=>{
   inputRef.current.focus();
    },[])
  return (
    <div>
      <h1>this is useRef</h1>
      <input  type="text" ref={inputRef}  />
    </div>
  )
}

export default FocustInput
