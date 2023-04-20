import React, { useReducer } from 'react'

const initalState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
            case 'decrement':
                return state-1;
                case 'reset':
                    return initalState;
                    default :
                     return state;
    }
}
function Multiple_useReducer() {
    const [count,dispatch]=useReducer(reducer,initalState);
    const [count2,dispatch2]=useReducer(reducer,initalState);
  return (
    <div>
     <h1 className='text text-center text-success'>{count}</h1>
     <button className='btn btn-primary' onClick={()=>dispatch('increment')}>Increment</button>
     <button className='btn btn-danger' onClick={()=>dispatch('decrement')}>Decrement</button>
     <button className='btn btn-secondary' onClick={()=>dispatch('reset')}>Reset</button>
    <div>
        <h1>Use multiple useReducer</h1>
        <h1>{count2}</h1>
        <button className='btn btn-primary' onClick={()=>dispatch2('increment')}>Increment</button>
     <button className='btn btn-danger' onClick={()=>dispatch2('decrement')}>Decrement</button>
     <button className='btn btn-secondary' onClick={()=>dispatch2('reset')}>Reset</button>
    </div>
    </div>
  )
}

export default Multiple_useReducer
