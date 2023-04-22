import React,{useEffect} from 'react'


//making custom hooks
function useDocTitle(count) {
    useEffect(()=>{
      
        document.title=`You Clicked ${count} times DocTitle`;
      },[count])
  return (
    <div>
      
    </div>
  )
}

export default useDocTitle
