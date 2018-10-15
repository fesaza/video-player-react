/* global localStorage */
import { upperFirst } from 'lodash/string';
import * as R from 'ramda';

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

export function addClip(clipItem) {
  const clipItems = getClips();
  localStorage.setItem('clipItems', JSON.stringify(R.append(clipItem, clipItems)));
}

export function date() { }
