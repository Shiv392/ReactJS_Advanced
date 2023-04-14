import React,{useState} from 'react'

function HookCounter4() {
    const [items,setItem]=useState([]);
    const AddItem=()=>{
        setItem([...items,{
            id:items.length,
            value: ~~(Math.random()*10)+1
        }])
    }
  return (
    <div><button className='btn btn-dark btn-md' onClick={AddItem}>Add Item</button>
      <h3 className="text text-center text-danger">List are:</h3>

      <ul>
        {items.map(item=>
            <li key={item.id}>{item.value}</li>
        )}
      </ul>
    </div>
  )
}

export default HookCounter4
