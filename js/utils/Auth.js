import { auth } from 'firebase';

export function createUser(email, password) {
  return auth().createUserWithEmailAndPassword(email, password) /*, (error) => {
    if (error) {
      switch (error.code) {
        case 'EMAIL_TAKEN':
          alert('Your email has already been used for a Boom account.');
          break;
        case 'INVALID_EMAIL':
          alert('Your email seems to be invalid.');
          break;
        case 'INVALID_PASSWORD':
          alert('Your password seems to be invalid.');
          br
        default:
          alert('Something terribly wrong happened, we were unable to create your account.');
          break;
      }
    } else {
      alert('Your account was created, you can now Boom yourself!');
    }
  });
  */
}

export function authUser(email, password) {
  return auth().signInWithEmailAndPassword(email, password) /*, (error) => {
    if (error) {
      alert('Login Failed. Please try again');
    } else {
      // alert('Login Successful');
    }
  });
  */
}
