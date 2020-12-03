import logo from './logo.svg';
import './Counter.css';
import React from 'react';
import Header from './Header'

class Counter extends React.Component{
  state={
    count:0
  }
  increment=()=>{
    this.setState({
     count: this.state.count+1
    })
  }
    decrement=()=>{
      this.setState({
       count: this.state.count-1
      })
    }
  render(){
  return (
    <div>
     <Header/> 

        <img src={logo} className="App-logo" alt="logo" />
        <p>
         count: {this.state.count}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a><br></br>
     < button className="btn-increment" onClick={this.increment}>increment</button>
     < button className="btn-decrement" onClick={this.decrement}>decrement</button>
  
    </div>
  );
}
}   

export default Counter;
