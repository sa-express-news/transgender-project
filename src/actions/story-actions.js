import * as types from './action-types';

import stories from '../data/story-list.json';

const getStories = () => {
	return {
    type: types.GET_STORIES,
    stories,
  };
};

export default {
	getStories,
}