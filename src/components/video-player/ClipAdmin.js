
import React from 'react';
import { Grid, Cell } from 'react-md';
import ClipList from './ClipList';
import VideoPlayer from './VideoPlayer';

const ClipAdmin = () =>
  (
    <Grid >
      <Cell size={3}>
        <ClipList />
      </Cell>
      <Cell size={9}>
        <VideoPlayer />
      </Cell>
    </Grid>
  );

export default ClipAdmin;
