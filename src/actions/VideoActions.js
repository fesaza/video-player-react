export const ADD_CLIP = 'ADD_CLIP';
export const EDIT_CLIP = 'EDIT_CLIP';
export const CLIP_SELECTED = 'CLIP_SELECTED';
export const LOAD_CLIP_LIST = 'LOAD_CLIP_LIST';

export const loadClips = () => ({
  type: LOAD_CLIP_LIST,
});

export const addClip = clip => (
  {
    type: ADD_CLIP,
    clip,
  }
);

export const editClip = (clip, index) => ({
  type: EDIT_CLIP,
  clip,
  index,
});

export const selectClip = index => ({
  type: CLIP_SELECTED,
  index,
});
