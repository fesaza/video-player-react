import _ from 'lodash';
import fp from 'lodash/fp';
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
    default:
      return state;
  }
};

export default video;
