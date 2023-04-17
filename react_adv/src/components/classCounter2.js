import React, { Component } from 'react'

 class ClassCounter2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        x:0,
        y:0  
      }
    }
    logmouseposition=e=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.logmouseposition)
    }
    componentWillUnmount(){
        window.removeEventListener('mousemove',this.logmouseposition)
    }
  render() {
    return (
      <div>
        <h1 className='text text-primary text-center'>X- {this.state.x} Y-{this.state.y}</h1>
      </div>
    )
  }
}

export default ClassCounter2
