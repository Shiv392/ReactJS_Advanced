import React, { useCallback, useState } from 'react'
import useCounter from './useCounter'

function Counter1() {
    const [count,increment,decrement,reset]=useCounter(10,5);
  return (
    <div>
      <h1>Counter custom hook : {count}</h1>
      <button className='btn btn-success m-2' onClick={increment}>Increment</button>
      <button className='btn btn-danger m-2' onClick={decrement}>Decrement</button>
      <button className='btn btn-secondary m-2' onClick={reset}>Reset</button>

    </div>
  )
}

export default Counter1
