import React, { Component } from 'react';
import CryptoMap from './CryptoMap';
class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome to asdasd</h2>
        {this.props.children}
      </div>
    );
  }
}

export default App;
