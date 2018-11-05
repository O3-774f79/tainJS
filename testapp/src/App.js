import React, { Component } from 'react';
import './App.css';

class App extends Component {
state ={
  Iheader: "Hello"
}
  HandleClick=()=>{
      this.setState({Iheader:"Hi"})
     console.log("CliCk!!!!!!!!!!")
  }
  render() {
    return (
      <div className="App">
          <h1>{this.state.Iheader}</h1>
          <button onClick={this.HandleClick}>test</button> 
      </div>
    );
  }
}

export default App;
