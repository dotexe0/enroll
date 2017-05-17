import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import { Provider } from 'react-redux';
// import ReduxToastr from 'react-redux-toastr'
// import 'normalize.css';

import store from './js/store';

import App from './js/components/App';
import CryptoMap from './js/components/CryptoMap';
// import NavBar from './js/components/NavBar';
import SignupForm from './js/components/SignupForm';
import LoginForm from './js/components/LoginForm';
// import './css/index.css';

  //  <ReduxToastr
  //     timeOut={4000}
  //     newestOnTop={false}
  //     preventDuplicates={true}
  //     position="top-right"
  //     transitionIn="fadeIn"
  //     transitionOut="fadeOut"
  //     progressBar/>

const history = createBrowserHistory();
const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/maps" component={CryptoMap} />
        <Route path="/login" component={LoginForm} />
        <Route path="signup" component={SignupForm} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
