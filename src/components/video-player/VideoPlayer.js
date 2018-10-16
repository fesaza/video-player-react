/* global document */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardTitle, Button } from 'react-md';
import { EditCapabilitiesContext } from '../../utils/Utils';

const initialVideo = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';
const styleButton = { margin: 'auto 10px auto auto' };

const playVideo = () => {
  const vp = document.getElementById('videoPlayer');
  // vp.onended = endedCallBack;
  vp.load();
  // vp.play();
};

class VideoPlayer extends PureComponent {
  static propTypes = {
    clip: PropTypes.object.isRequired,
    editClip: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number.isRequired,
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.clip !== this.props.clip) {
      playVideo();
    }
  }

  render() {
    const {
      clip, editClip, selectedIndex,
    } = this.props;
    return (
      <EditCapabilitiesContext.Consumer>{
      hideEditCapabilities =>
        (
          <Card className="md-block-centered">
            <CardTitle title={clip.name} subtitle={`start: ${clip.start} - end ${clip.end} (seconds)`} >
              {selectedIndex > 0 && !hideEditCapabilities &&
                <Button
                  tooltipLabel="Edit clip"
                  style={styleButton}
                  floating
                  secondary
                  mini
                  onClick={editClip}
                >
                      edit
                </Button>
              }
            </CardTitle>
            <CardText style={{ padding: '0px' }}>
              <video id="videoPlayer" controls style={{ width: '100%' }} autoPlay>
                <source src={`${initialVideo}#t=${clip.start},${clip.end}`} />
              </video>
            </CardText>
          </Card>
            )
          }
      </EditCapabilitiesContext.Consumer>
    );
  }
}

export default VideoPlayer;
