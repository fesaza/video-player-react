import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Card, CardTitle, CardText, Button } from 'react-md';

const styleButton = { margin: 'auto 5px auto auto' };

const ClipList = ({
  clips, addClip, onClipSelected, deleteClip,
}) => (
  <Card className="md-block-centered">
    <CardTitle title="Clip list" subtitle="Select any to watch" >
      <Button
        tooltipLabel="Add clip"
        style={styleButton}
        floating
        secondary
        mini
        onClick={addClip}
      >
          add_circle_outline
      </Button>
    </CardTitle>
    <CardText>
      <List style={{ minWidth: '220px' }}>
        {
          clips.map((clip, index) => (
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
          ))
        }
      </List>
    </CardText>
  </Card>
);

ClipList.propTypes = {
  clips: PropTypes.array.isRequired,
  addClip: PropTypes.func.isRequired,
  onClipSelected: PropTypes.func.isRequired,
  deleteClip: PropTypes.func.isRequired,
};

export default ClipList;
