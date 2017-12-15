import _ from 'lodash';

import * as types from '../actions/action-types';

const defaultStory = {
  title: '',
  excerpt: '',
  slug: '',
  bgImg: '',
};

const pluckStoryProps = stories => {
  return _.map(stories, story => {
    return {
      title: story.title,
      excerpt: story.excerpt,
      slug: story.slug,
      bgImg: story.bgImg,
    };
  });
};

export default (state = [defaultStory], action) => {
  switch(action.type) {
    case types.GET_STORIES:
      return state = pluckStoryProps(action.stories);
    default:
      return state;
  }
}