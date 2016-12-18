import { combineReducers } from 'redux';
import user from './userReducer';
import newChallenge from './newChallengeReducer';

const rootReducer = combineReducers({
  user,
  newChallenge,
});

export default rootReducer;
