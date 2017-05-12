import _ from 'lodash';

import * as types from '../actions/action-types';

const defaultStory = {
  title: '',
  subtitle: '',
  byline: '',
  excerpt: '',
  cover_partial: '',
  slug: '',
};

const pluckStoryProps = stories => {
  return _.map(stories, story => {
    return {
      title: story.project.title,
      subtitle: story.project.subtitle,
      byline: story.project.byline,
      excerpt: story.project.excerpt,
      cover_partial: story.project.cover_partial,
      slug: story.project.slug,
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