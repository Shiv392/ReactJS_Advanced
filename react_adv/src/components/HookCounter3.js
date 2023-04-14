import React,{useState} from 'react'

function HookCounter3() {
    const [name,setName]=useState({
        firstname:'',lastname:''
    })
  return (
    <div className='container mt-3'>
      <form className='form'>
       <div className='mb-3'>
        <input type='text' value={name.firstname} onChange={e=> setName({...name,firstname:e.target.value})} className='form-control'  placeholder='Enter firstname'/>
       </div>
       {/* //copy every propoerty from name then overrite it */}
       <div className='mb-3'>
        <input type='text' value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})} className='form-control' placeholder='Enter lastname'/>
       </div>
       <div className='mt-2'>
        <h3>FirstName:{name.firstname}</h3>
        <h3>LastName:{name.lastname}</h3>
        <p>{JSON.stringify(name)}</p>
       </div>
      </form>
    </div>
  )
}

export default HookCounter3
