import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemButton from './components/item'
class App extends Component {
  constructor(props){
    super(props)
    this.onHandleClick1 = this.onHandleClick1.bind(this)
  }
  state = {
     result: "null"
  }
  onHandleClick1() {
     console.log("Click 1")
     this.setState({result:"Click1"})
  }
  onHandleClick2() {
      console.log("Click 2")
     this.setState({result:"Click2"})

  }
  onHandleClick3 = () => {
      console.log("Click 3")
     this.setState({result:"Click3"})

  } 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>result Jaaa : {this.state.result}</h1>
          
          <button onClick={this.onHandleClick1}>test</button>
          <button onClick={this.onHandleClick2 = this.onHandleClick2.bind(this)}>test2</button>
          <button onClick={this.onHandleClick3}>test3</button>
          <ItemButton text="test4" values="4"/>
        </header>
      </div>
    );
  }
}

export default App;
