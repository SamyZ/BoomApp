import {
  CREATE_CHALLENGE,
} from '../actions/challengesActions';

const initialState = {
  id: null,
  name: null,
};

export default function newChallenge(state = initialState, action) {
  switch (action.type) {
    // case SAVE_CHALLENGE: {
    //   return Object.assign({}, state, {
    //     challenge: Object.assign({}, state.challenge, action.challenge),
    //   });
    // }
    case CREATE_CHALLENGE:
      return {
        id: 1,
      };
    default:
      return state;
  }
}
