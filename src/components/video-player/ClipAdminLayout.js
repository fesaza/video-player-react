import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'react-md';
import ClipList from './ClipList';
import VideoPlayer from './VideoPlayer';

const ClipAdminLayout = ({
  clips, showDetails, onClipSelected, onDeleteClip, clipSelected, selectedIndex, hideEditCapabilities,
}) => (
  <Grid >
    <Cell size={3}>
      <ClipList
        clips={clips}
        addClip={showDetails(true)}
        onClipSelected={onClipSelected}
        deleteClip={onDeleteClip}
        hideEditCapabilities={hideEditCapabilities}
      />
    </Cell>
    <Cell size={9}>
      <VideoPlayer
        clip={clipSelected}
        editClip={showDetails(false)}
        selectedIndex={selectedIndex}
        hideEditCapabilities={hideEditCapabilities}
      />
    </Cell>
  </Grid>
);

ClipAdminLayout.propTypes = {
  clips: PropTypes.array.isRequired,
  clipSelected: PropTypes.object.isRequired,
  onClipSelected: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onDeleteClip: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired,
  hideEditCapabilities: PropTypes.bool.isRequired,
};

export default ClipAdminLayout;
