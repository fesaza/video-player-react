import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Button } from 'react-md';

const ClipListItem = ({
  clip, index, onClipSelected, deleteClip,
}) => (
  <ListItem
    key={clip.name}
    primaryText={clip.name}
    secondaryText={`start: ${clip.start} - end: ${clip.end}`}
    onClick={() => {
        onClipSelected(index);
      }}
  >
    <Button icon secondary tooltipLabel="Play">play_arrow</Button>
    {index > 0 &&
    <Button
      icon
      secondary
      tooltipLabel="Delete"
      onClick={(e) => {
        e.stopPropagation();
        deleteClip(index);
      }}
    >delete_outline
    </Button>}
  </ListItem>
);

ClipListItem.propTypes = {
  clip: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onClipSelected: PropTypes.func.isRequired,
  deleteClip: PropTypes.func.isRequired,
};

export default ClipListItem;
