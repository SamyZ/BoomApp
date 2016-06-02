import Firebase from 'firebase';
import {
  AsyncStorage,
} from 'react-native';

const firebaseRef = new Firebase('https://appboom.firebaseio.com');

export function createUser(email, password) {
  return firebaseRef.createUser({ email, password }, (error, userData) => {
    if (error) {
      switch (error.code) {
        case 'EMAIL_TAKEN':
          alert('Your email has already been used for a Boom account.');
          break;
        case 'INVALID_EMAIL':
          alert('Your email seems to be invalid.');
          break;
        default:
          alert('Something terribly wrong happened, we were unable to create your account.');
          break;
      }
    } else {
      alert('Your account was created, you can now Boom yourself!');
    }
  });
}

export function authUser(email, password) {
  return firebaseRef.authWithPassword({ email, password }, (error, userData) => {
    if (error) {
      alert('Login Failed. Please try again');
    } else {
      alert('Login Successful');
      AsyncStorage.setItem('userData', JSON.stringify(userData));
    }
  });
}
