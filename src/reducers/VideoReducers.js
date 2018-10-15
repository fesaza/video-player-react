import * as R from 'ramda';
import * as videoActions from '../actions/VideoActions';
import { getClips } from '../utils/Utils';

const video = (state = {
  clips: [],
  selectedIndex: 0,
}, action) => {
  switch (action.type) {
    case videoActions.LOAD_CLIP_LIST:
      return {
        ...state,
        clips: getClips(),
      };
    case videoActions.ADD_CLIP:
      return {
        ...state,
        clips: R.append(action.clip, state.clips),
      };
    case videoActions.CLIP_SELECTED:
      return {
        ...state,
        selectedIndex: action.index,
      };
    default:
      return state;
  }
};

export default video;
