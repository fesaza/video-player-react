import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, FontIcon, Card, CardTitle, CardText, Button } from 'react-md';

const styleButton = { margin: 'auto 5px auto auto' };

const ClipList = ({ clips, addClip }) => (
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
          clips.map(clip => (
            <ListItem
              key={clip.name}
              rightIcon={<FontIcon secondary>play_arrow</FontIcon>}
              primaryText={clip.name}
              secondaryText={`start: ${clip.start} - end: ${clip.end}`}
            />
          ))
        }
      </List>
    </CardText>
  </Card>
);

ClipList.propTypes = {
  clips: PropTypes.array.isRequired,
  addClip: PropTypes.func.isRequired,
};

export default ClipList;
