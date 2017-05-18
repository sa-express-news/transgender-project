import * as types from './action-types';

import photos from '../data/photo-list.json';

const getPhotos = () => {
	return {
    type: types.GET_PHOTOS,
    photos,
  };
};

export default {
	getPhotos,
}