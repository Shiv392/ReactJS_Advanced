import React, { useReducer } from 'react'
const initialState=0;
const reducer=(state,action)=>{
  switch(action){
    case 'increment':
        return state+1;
    case 'decrement':
            return state-1;
    case 'reset':
                return initialState;
        default:
                     return state;
  }
}
function Counter_useReducer() {
   const [count,dispath]= useReducer(reducer,initialState)
  return (
    <div>
      <h1 className='text text-danger'>UseReducer Hook</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispath('reset')} className='btn btn-dark'>Reset</button>
      <button onClick={()=>dispath('increment')} className='btn btn-primary'>Increment</button>
      <button onClick={()=>dispath('decrement')} className='btn btn-danger'>Decrement</button>

    </div>
  )
}

export default Counter_useReducer
