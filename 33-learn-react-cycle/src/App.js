import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meaningOfLife: 47
    }
  }

  handleClick = () => {
    // this is asyncronous setState
    this.setState((prevState, prevProps) => {
      return {meaningOfLife: prevState.meaningOfLife + 1}
    }, 
      // callback - this makes console log below sync
      () => console.log(this.state.meaningOfLife)
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOfLife}
          </p>
          <button
            onClick={this.handleClick}
          >
            Update State
          </button>
        </header>
      </div>
    );
  }
}

export default App;
