import { combineReducers } from 'redux';

// Reducers
import stories from './story-reducer';

// Combine Reducers
const reducers = combineReducers({
    stories,
});

export default reducers;