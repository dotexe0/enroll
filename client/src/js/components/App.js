import React, { Component } from 'react';
import CryptoMap from './CryptoMap';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends Component {

  render() {
    injectTapEventPlugin();

    return (
        <div className="App">
          <h2>Welcome to asdasd</h2>
          {this.props.children}
        </div>

    );
  }
}

export default App;
