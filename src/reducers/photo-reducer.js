import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch(action.type) {
    case types.GET_PHOTOS:
      return state.concat(action.photos);
    default:
      return state;
  }
}