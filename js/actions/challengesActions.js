export const SAVE_CHALLENGE = 'SAVE_CHALLENGE';
export const CREATE_CHALLENGE = 'CREATE_CHALLENGE';

export function onSave(challenge) {
  return (dispatch) => {
    dispatch({ type: SAVE_CHALLENGE, challenge });
  };
}

export function onCreate(challenge) {
  return (dispatch) => {
    dispatch({ type: CREATE_CHALLENGE, challenge });
  };
}
