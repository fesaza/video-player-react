import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, FontIcon, Card, CardTitle, CardText } from 'react-md';

const ClipList = ({ clips }) => (
  <Card className="md-block-centered">
    <CardTitle title="Clip list" subtitle="Select any to watch" />
    <CardText>
      <List style={{ minWidth: '220px' }}>
        {
          clips.map(clip => (
            <ListItem
              rightIcon={<FontIcon secondary>home</FontIcon>}
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
};

export default ClipList;
