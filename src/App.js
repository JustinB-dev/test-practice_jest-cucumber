import React, { Component } from "react";
import "./App.css";
import Counter from "./Components/sum.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Let's count to 10!</h1>
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;
