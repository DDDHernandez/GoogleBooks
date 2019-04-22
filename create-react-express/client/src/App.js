import React, { Component } from "react";
import Header from './components/header/Header';
import Books from './components/body/Books'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div>
          <Books />
        </div>
  
      </div>
    );
  }
}

export default App;
