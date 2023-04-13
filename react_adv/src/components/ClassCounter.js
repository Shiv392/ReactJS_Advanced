import React, { Component } from 'react'

 class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    const {count}=this.state;
    return (
      <div className='container mt-3'>
        <button className='btn btn-primary btn-lg' onClick={this.incrementCount}>Count: {count} Time</button>
      </div>
    )
  }
}

export default ClassCounter
