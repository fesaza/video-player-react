// @flow
import { takeLatest, select } from 'redux-saga/effects';
import { ADD_CLIP, EDIT_CLIP, DELETE_CLIP } from '../actions/VideoActions';
import { persistClips, getClipsSelector } from '../utils/Utils';

/**
 * Save clip to local storage
 */
function* saveLocalStorage() {
  const clips = yield select(getClipsSelector);
  persistClips(clips);
}

export default function* root() {
  yield takeLatest(ADD_CLIP, saveLocalStorage);
  yield takeLatest(EDIT_CLIP, saveLocalStorage);
  yield takeLatest(DELETE_CLIP, saveLocalStorage);
}
