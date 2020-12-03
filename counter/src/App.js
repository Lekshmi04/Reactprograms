import Header from './Header'
import Counter from './Counter';
import './App.css';
import React from 'react';


class App extends React.Component{
  state={
    title:"Counter"
  }
 
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>{this.state.title}</h1>
        
        
         <Counter /> 
         <Counter />
          <Counter />
      </header>
    </div>
  );
}
}   

export default App;
