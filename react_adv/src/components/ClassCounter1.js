import React, { Component } from 'react'

 class ClassCounter1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }
    componentDidMount(){
        document.title=`Clicked ${this.state.count} Times`;
        console.log('this is component did mount');
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            document.title=`Clicked ${this.state.count} Times`;
        console.log('this is component did update ');
        }
    }
    clickCounter=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
  render() {
    const {count,name}=this.state;
    return (
      <div>
        <h1 className='text text-center text-dark'>useEffect Hook with class component</h1>
        <input className='form-control' placeholder='enter name' value={name} onChange={e=>this.setState({name:e.target.value})} />
        <button onClick={this.clickCounter} className='btn btn-primary btn-large'>Clicked :{count} times </button>
      </div>
    )
  }
}

export default ClassCounter1
