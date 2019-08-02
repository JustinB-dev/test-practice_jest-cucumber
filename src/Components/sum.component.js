import React, { Component } from "react";

class Counter extends Component {

  state= {
      count: 0
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1});

    if(this.state.count >= 10){
      window.alert('Counter has reached the limit and will be reset to 0.');
      this.setState({count: 0});
    }
  }
  
  render(){
      return (
          <div>
        <h1 className='test'>{this.state.count}</h1>
        <button className='btn-primary' size='lg' onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
}
}
  
export default Counter;
