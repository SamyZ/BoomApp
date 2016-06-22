export const CREATE_CHALLENGE = 'CREATE_CHALLENGE';

export function createChallenge(challenge) {
  return (dispatch) => {
    dispatch({ type: CREATE_CHALLENGE, challenge });
  };
}
