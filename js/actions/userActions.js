import { navigate } from '../utils/Nav';
import { AsyncStorage } from 'react-native';

export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

export function onSignIn(email, password, userData, navigator) {
  return (dispatch) => {
    AsyncStorage.setItem('userData', JSON.stringify(userData));
    navigate(navigator, 'home');
    dispatch({ type: LOGGED_IN, userData });
  };
}

export function onSignUp(email, password, userData, navigator) {
  return (dispatch) => {
    AsyncStorage.setItem('userData', JSON.stringify(userData));
    navigate(navigator, 'home');
    dispatch({ type: LOGGED_IN, userData });
  };
}
