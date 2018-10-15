import React from 'react';
import { Card, CardText, CardTitle, Button } from 'react-md';

const initialVideo = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';
const styleButton = { margin: 'auto 10px auto auto' };

const VideoPlayer = () => (
  <Card className="md-block-centered">
    <CardTitle title="video name" subtitle="start: 0:20 - end 0:30" >
      <Button
        tooltipLabel="Edit clip"
        style={styleButton}
        floating
        secondary
        mini
      >
            edit
      </Button>
    </CardTitle>
    <CardText style={{ padding: '0px' }}>
      <video controls style={{ width: '100%' }}>
        <source src={`${initialVideo}#t=20`} />
      </video>
    </CardText>
  </Card>
);

export default VideoPlayer;
