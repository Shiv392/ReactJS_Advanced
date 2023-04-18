import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FetchData() {
    const [posts,setPost]=useState({});
    const [id,setId]=useState(1);
    const [btnid,setbtnid]=useState(1);
    useEffect(()=>{
         axios.get(`https://jsonplaceholder.typicode.com/todos/${btnid}`)
         .then(res=>{
            console.log(res);
           setPost(res.data)
         }
         ).catch(err=>{
            console.log('could not get all data',err);
         })
    },[btnid])
    const clickHandler=()=>{
        setbtnid(id);
    }
  return (
    <div>
      <h1>Fetching data from axios in function component</h1>
      <input className='form-control' value={id} onChange={(e)=>setId(e.target.value)}/>
      <button  onClick={clickHandler} className='btn btn-success'>Send</button>
      {/* <ul>
        { posts.map(post=>(
            <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      <h1>{JSON.stringify(posts)}</h1>
    </div>
  )
}

export default FetchData
