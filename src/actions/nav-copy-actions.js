import * as types from './action-types';

import navCopy from '../data/nav-copy.json';

const getNavCopy = () => {
	return {
    type: types.GET_NAV_COPY,
    navCopy,
  };
};

export default {
	getNavCopy,
}