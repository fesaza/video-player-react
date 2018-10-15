export const ADD_CLIP = 'ADD_CLIP';
export const EDIT_CLIP = 'EDIT_CLIP';
export const CLIP_SELECTED = 'CLIP_SELECTED';
export const LOAD_CLIP_LIST = 'LOAD_CLIP_LIST';

export const loadClips = () => ({
  type: LOAD_CLIP_LIST,
});

export const addClip = (name, start, end) => (
  {
    type: ADD_CLIP,
    clip: {
      name,
      start,
      end,
    },
  }
);
