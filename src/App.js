import React, { Component } from "react";
import "./App.css";
import Counter from "./Components/sum.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to my tutorial!</h1>
          <Counter />
          <p>Created By: Justin Brown</p>
        </header>
      </div>
    );
  }
}

export default App;
