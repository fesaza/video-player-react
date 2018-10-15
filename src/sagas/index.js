// @flow
import { takeLatest } from 'redux-saga/effects';
import { SAVE_CLIP } from '../actions/VideoActions';

/**
 * Save clip to local storage
 */
function saveClip() {
  
}

export default function* root() {
  yield takeLatest(SAVE_CLIP, saveClip);
}
