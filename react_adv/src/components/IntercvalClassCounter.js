import React, { Component } from 'react'

 class IntercvalClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
     tick=()=>{
         this.setState({
            count:this.state.count+1
         })
    }
    
  render() {
    return (
      <div>
        <h1>Counte app automatically using Class </h1>
        <h1 className='text text-primary'>{this.state.count}</h1>
      </div>
    )
  }
}

export default IntercvalClassCounter
