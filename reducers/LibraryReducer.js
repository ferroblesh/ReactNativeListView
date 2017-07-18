import {
  FETCH_RESULTS,
  SET_RESULTS
} from '../actions/types';

const INITIAL_STATE = {
  results: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_RESULTS:
      return action.libraries;
    case SET_RESULTS:
      console.log('At reducer:' + action.libraries);
      return action.libraries;
    default:
      return state;
  }
}
