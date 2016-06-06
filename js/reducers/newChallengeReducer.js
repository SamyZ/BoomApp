import {
  SAVE_CHALLENGE,
  CREATE_CHALLENGE,
} from '../actions/challengesActions';

const initialState = {
  id: null,
  name: null,
};

export default function newChallenge(state = initialState, action) {
  switch (action.type) {
    case SAVE_CHALLENGE: {
      return {
        id: 0,
      };
    }
    case CREATE_CHALLENGE:
      return {
        id: 1,
      };
    default:
      return state;
  }
}
