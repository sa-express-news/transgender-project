import _ from 'lodash';

import * as types from '../actions/action-types';

const defaultStory = {
  id: '',
  title: '',
  subtitle: '',
  byline: '',
  excerpt: '',
  cover: '',
  slug: '',
  bgImg: '',
};

const buildBgImg = story => {
  return `https://expressnewssandbox.atavist.com/data/files/organization/${story.organization_id}/image/raw/${story.project.title_page}`;
}

const pluckStoryProps = stories => {
  return _.map(stories, story => {
    return {
      id: story.project.id,
      title: story.project.title,
      subtitle: story.project.subtitle,
      byline: story.project.byline,
      excerpt: story.project.excerpt,
      cover: story.project.cover_partial,
      slug: story.project.slug,
      bgImg: buildBgImg(story),
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