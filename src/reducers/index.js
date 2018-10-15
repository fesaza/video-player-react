import { combineReducers } from 'redux';
import video from './VideoReducers';

const rootReducer = combineReducers({
  video,
});

export default rootReducer;
