import React, { useReducer } from 'react'
const initalState={
    firstCount:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {firstCount : state.firstCount+1};
            case 'decrement':
                return {firstCount : state.firstCount-1};
                case 'reset':
                    return initalState;
                    default :
                    return state;
    }
}
function CounterTwo_useReducer() {
 const [count,dispatch] =   useReducer(reducer,initalState)
  return (
    <div>
      <h1>useReducer with complex objects and state</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type:'reset'})} className='btn btn-dark'>Reset</button>
      <button onClick={()=>dispatch({type:'increment'})} className='btn btn-primary'>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})} className='btn btn-danger'>Decrement</button>

    </div>
  )
}

export default CounterTwo_useReducer
