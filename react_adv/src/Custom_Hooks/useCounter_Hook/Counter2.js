import React, { useCallback, useContext, useState } from 'react'
import useCounter from './useCounter'

function Counter2() {
   const [count,increment,decrement,reset]=useCounter();
  return (
    <div>
      <h1>Counter custom hook : {count}</h1>
      <button className='btn btn-success m-2' onClick={increment}>Increment</button>
      <button className='btn btn-danger m-2' onClick={decrement}>Decrement</button>
      <button className='btn btn-secondary m-2' onClick={reset}>Reset</button>

    </div>
  )
}

export default Counter2
