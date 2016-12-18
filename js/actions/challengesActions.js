// import Firebase from 'firebase';
//
// export const challengesRef = new Firebase('https://appboom.firebaseio.com/challenges');

export const CREATE_CHALLENGE = 'CREATE_CHALLENGE';
export const CREATED_CHALLENGE = 'CREATED_CHALLENGE';
export const CREATE_CHALLENGE_FAILED = 'CREATE_CHALLENGE_FAILED';

export function createChallenge(challenge) {
  return (dispatch) => {
    dispatch({ type: CREATE_CHALLENGE, challenge });
    // return challengesRef.push().set(challenge)
    //   .then(() => {
    //     dispatch({ type: CREATED_CHALLENGE, challenge });
    //   })
    //   .catch((ex) => {
    //     dispatch({ type: CREATE_CHALLENGE_FAILED, ex });
    //   });
  };
}
