import { combineReducers } from 'redux';

// Reducers
import stories from './story-reducer';
import photos from './photo-reducer';
import navCopy from './nav-copy-reducer';

// Combine Reducers
const reducers = combineReducers({
    stories,
    photos,
    navCopy,
});

export default reducers;