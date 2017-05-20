import * as types from '../actions/action-types';

const defaultNavCopy = {
	introduction: [],
	credits: [],
}

export default (state = defaultNavCopy, action) => {
  switch(action.type) {
    case types.GET_NAV_COPY:
      return Object.assign({}, state, action.navCopy);
    default:
      return state;
  }
}