import React from 'react';
import PropTypes from 'prop-types';
import { List, Card, CardTitle, CardText, Button } from 'react-md';
import ClipListItem from './ClipListItem';
import { EditCapabilitiesContext } from '../../utils/Utils';

const styleButton = { margin: 'auto 5px auto auto' };

const ClipList = ({
  clips, addClip, onClipSelected, deleteClip,
}) => (
  <EditCapabilitiesContext.Consumer>{
    hideEditCapabilities =>
      (
        <Card className="md-block-centered">
          <CardTitle title="Clip list" subtitle="Select any to watch" >
            {!hideEditCapabilities &&
            <Button
              tooltipLabel="Add clip"
              style={styleButton}
              floating
              secondary
              mini
              onClick={addClip}
            >
                add_circle_outline
            </Button>}
          </CardTitle>
          <CardText>
            <List style={{ minWidth: '220px' }}>
              {
                clips.map((clip, index) => (
                  <ClipListItem
                    key={clip.name}
                    clip={clip}
                    index={index}
                    onClipSelected={onClipSelected}
                    deleteClip={deleteClip}
                    hideEditCapabilities={hideEditCapabilities}
                  />
                ))
              }
            </List>
          </CardText>
        </Card>
      )
    }
  </EditCapabilitiesContext.Consumer>
);

ClipList.propTypes = {
  clips: PropTypes.array.isRequired,
  addClip: PropTypes.func.isRequired,
  onClipSelected: PropTypes.func.isRequired,
  deleteClip: PropTypes.func.isRequired,
};

export default ClipList;
