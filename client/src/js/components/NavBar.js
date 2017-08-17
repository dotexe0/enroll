import React, { Component } from 'react';
import { Router, Route, IndexRoute, Switch } from 'react-router';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar main">
      <h2>Navbar</h2>
      <Route path="/maps" />
      </div>
    );
  }
}

export default NavBar;
