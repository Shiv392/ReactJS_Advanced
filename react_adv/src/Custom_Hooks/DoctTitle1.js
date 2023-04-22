import React, { useEffect, useState } from 'react'
import useDocTitle from './useDocTitle';

function DoctTitle1() {
    const [count,setCount]=useState(0);
    // useEffect(()=>{
      
    //   document.title=`You Clicked ${count} times DocTitle`;
    // },[count])
    //use custom hook useDocTitle
    useDocTitle(count);
  return (
    <div>
      <button onClick={()=>setCount(count+1)} className='btn btn-primary'>Add Count: {count}</button>
    </div>
  )
}

export default DoctTitle1
