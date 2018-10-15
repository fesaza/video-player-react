import * as R from 'ramda';
import * as videoActions from '../actions/VideoActions';
import { getClips } from '../utils/Utils';

const video = (state = {
  clips: [],
}, action) => {
  switch (action.type) {
    case videoActions.LOAD_CLIP_LIST:
      return {
        clips: getClips(),
      };
    case videoActions.ADD_CLIP:
      return {
        ...state,
        clips: R.append(action.clip, state.clips),
      };
    default:
      return state;
  }
};

export default video;
