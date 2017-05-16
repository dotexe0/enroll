import { SIGNUP, LOGIN, LOGOUT } from '../actions';

const initialState = {
  loading: false,
  user: {
    isAuthenticated: false
  }
}

export default (state=initialState, action) => {
  switch(action.type) {
    case SIGNUP:
    console.log('signup: ', action.payload);
    return {
      ...state,
      user: {
        ...action.payload,
        isAuthenticated: true
      }
    }

    case LOGIN:
    console.log('login: ', action.payload);

    return {
      ...state,
      user: {
        _id: action.payload._id,
        email: action.payload.email,
        isAuthenticated: true
      }
    }
    case LOGOUT:
        console.log('logout: ', action.payload);
        return initialState;

   default:
      return state;
  }
}
