import {
  LOGGED_IN,
  LOGGED_OUT,
} from '../actions/userActions';

const initialState = {
  isLoggedIn: false,
  uid: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN: {
      const { uid } = action.userData;
      return {
        isLoggedIn: true,
        uid,
      };
    }
    case LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
}
