import React, { Component } from 'react';
import CryptoMap from './CryptoMap';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';

class App extends Component {

  render() {
    injectTapEventPlugin();

    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar />
            <h2>Welcome to asdasd</h2>
          {this.props.children}
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
