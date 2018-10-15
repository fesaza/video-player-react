/* global localStorage */
import { upperFirst } from 'lodash/string';

export function toTitle(str) {
  return str.split(/-|[A-Z]+/).reduce((s, split) => {
    const capititalized = split.match(/svg$/) ? 'SVG' : upperFirst(split);
    return `${s ? `${s} ` : ''}${capititalized}`;
  }, '');
}

export function getClips() {
  if (localStorage.getItem('clipItems')) {
    return JSON.parse(localStorage.getItem('clipItems'));
  }

  return [
    {
      name: 'Full video',
      start: '0',
      end: '52',
    },
  ];
}

export function persistClips(clips) {
  localStorage.setItem('clipItems', JSON.stringify(clips));
}

/**
 * clips selector
 * @param {*} state
 */
export const getClipsSelector = state => state.video.clips;

export function date() { }
