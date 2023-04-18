import React from 'react'
import {UserContext,ChannelContext} from '../App.js'
function CompF() {
  return (
    <div>
      <h1 className='text text-center text-danger '> this is comp f</h1>
      <UserContext.Consumer>
        {
            user=>{
                return (
                    <ChannelContext.Consumer>
                        {
                            channel=>{
            return <h1>UserContext:{user}||ChannelContext:{channel}</h1>                    
                            }
                        }
                    </ChannelContext.Consumer>
                )
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default CompF
