import React, { useContext } from 'react';
import CompF from './CompF';
import { UserContext,ChannelContext } from '../App';

function CompE() {
  const user=  useContext(UserContext);
  const channel= useContext(ChannelContext);
  return (
    <div>
        <h1>this is compE</h1>
        <h1 className='text text-danger'>{user}-{channel}</h1>
      <CompF/>
    </div>
  )
}

export default CompE
