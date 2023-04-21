import React, { useEffect, useReducer } from 'react'
import axios from 'axios';

const initalState={
loading:true,
error:'',
posts:{}
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'FATCH_SUCCESS':
            return {
                loading:false,
                posts: action.payload,
                error:''
            };
            case 'FATCH_FAILED':    
            return {
                loading:false,
                error:'something went wrong'
            }
            default :
            return state;
    }
}
function FetchData_useReducer() {
    const [state,dispatch]=useReducer(reducer,initalState);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
          dispatch({
            type:'FATCH_SUCCESS',
            payload:res.data
          })
        }).catch(err=>{
          dispatch({
            type:'FATCH_FAILED',
            
          })
        })
    },[])
  return (
    <div>
      {state.loading ? 'Loading': state.posts.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default FetchData_useReducer
