import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    useEffect(()=>{
        console.log('use effect calling');
        window.addEventListener('mousemove',logmouseposition)
        //works like componentwillupmount()
        return ()=>{
            console.log('component unmounting');
            window.removeEventListener('mousemove',logmouseposition)
        }
    },[])
    const logmouseposition=e=>{
        console.log('log mouse');
        setX(e.clientX);
        setY(e.clientY);
    }
   
  return (  
    <div>
      <h1>THIS IS HOOK MOUSE</h1>
    </div>
  )
}

export default HookMouse
