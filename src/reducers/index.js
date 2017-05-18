import { combineReducers } from 'redux';

// Reducers
import stories from './story-reducer';
import photos from './photo-reducer';

// Combine Reducers
const reducers = combineReducers({
    stories,
    photos,
});

export default reducers;