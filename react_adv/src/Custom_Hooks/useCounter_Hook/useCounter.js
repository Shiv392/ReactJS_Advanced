import React,{useState} from 'react'

function useCounter(init,value) {
    //making counter hook
   const [count,setCount]=useState(init);
    const increment=()=>{
        setCount(prevCount=>prevCount+value);
    }
    const decrement=()=>{
        setCount(prevCount=>prevCount-value);
    }
    const reset=()=>{
        setCount(init);
    }
    return [count,increment,decrement,reset];
}

export default useCounter
