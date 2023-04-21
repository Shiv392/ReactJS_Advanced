import React, { useMemo, useState } from 'react'

function Counter() {
    const [countOne,setCountOne]=useState(0);
    const [countTwo,setCountTwo]=useState(0);
    const incrementOne=()=>{
        setCountOne(countOne+1);
    }
    const incrementTwo=()=>{
        setCountTwo(countTwo+1);
    }
  
    const isEven=useMemo(()=>{
     let i=0;
     while(i<200000000){
        i++;
     }
     return countOne%2===0;
    },[countOne])
    
  return (
    <div>
      <div>
        <button onClick={incrementOne} className='btn btn-dark m-3'>Count one - {countOne}</button><br/>
        <p className='text text-dark text-center'>{ isEven ? 'Even':"oddd"}</p>
        <button onClick={incrementTwo} className='btn btn-danger'>Count two - {countTwo}</button>

      </div>
    </div>
  )
}

export default Counter
