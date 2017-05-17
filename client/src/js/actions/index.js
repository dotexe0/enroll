
import axios from 'axios';
import { browserHistory } from 'react-router';
import {toastr} from 'react-redux-toastr';

export const SIGNUP = 'SIGNUP';
export const signup = (email, password) => async dispatch => {
  try {
    await axios({
      method: 'post',
      url: '/api/signup',
      data: {
        email: email,
        password: password
      }
    })
    .then(res => {
      console.log('res: ', res.data.user);
      const { _id } = res.data.user;
      const { events, email } = res.data.user.local;
      dispatch({ type: SIGNUP, payload: { events, email, _id }});
      toastr.success('Success', `${email} account created!`);
      browserHistory.push('/maps');
    })
  } catch (e) {
    console.log('error signing up...', e)
  }
}

export const LOGIN = 'LOGIN';
export const login = (email, password) => async dispatch => {
  try {
    await axios.post('/api/login', { email, password })
    .then(res => {
      console.log('res: ', res.data.user);
      const { _id } = res.data.user;
      const { events, email } = res.data.user.local;
      dispatch({ type: LOGIN, payload: { events, email, _id }});
      toastr.success(`${email} logged in!`, ':-)');
      browserHistory.push('/maps');
    })
  } catch (e) {
    toastr.warning(`Error logging in.`, 'Make sure username and password match!');
    // console.log('error loging in...', e);
        browserHistory.push('/login');
  }
}

export const LOGOUT = 'LOGOUT';
export const logout = () => async dispatch => {
  try {
    await axios.get('/api/logout');
    dispatch({ type: LOGOUT });
    toastr.warning(`Successfully logged out!`, 'Until next time...');

  } catch (e) {
    throw Error(e);
  }
}
