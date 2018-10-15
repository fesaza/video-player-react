// @flow
import { takeLatest } from 'redux-saga/effects';
import { ADD_CLIP, EDIT_CLIP } from '../actions/VideoActions';

/**
 * Save clip to local storage
 */
function saveLocalStorage() {
  
}

export default function* root() {
  yield takeLatest(ADD_CLIP, saveLocalStorage);
  yield takeLatest(EDIT_CLIP, saveLocalStorage);
}
