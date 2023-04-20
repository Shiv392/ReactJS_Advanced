import React, { useEffect, useState } from 'react';
import axios  from 'axios';

function FetchData_useState() {
    const [loading,setLoading]= useState(true);
    const [posts,setPost]= useState({});
    const [errro,setError]=useState('');
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res=>{
        setLoading(false);
        setPost(res.data);
        setError('')
      }).catch(err=>{
        setLoading(false);
        setPost({});
        setError('something went wrong');
      })
    },[])
  return (
    <div>
      {loading ? 'Loading': posts.title}
      {errro ? errro : null}
    </div>
  )
}

export default FetchData_useState
