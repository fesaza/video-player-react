import React from 'react';
import { List, ListItem, FontIcon, Card, CardTitle, CardText } from 'react-md';

const ClipList = () => (
  <Card className="md-block-centered">
    <CardTitle title="Clip list" subtitle="Select any to watch" />
    <CardText>
      <List style={{ minWidth: '220px' }}>
        <ListItem
          rightIcon={<FontIcon secondary>home</FontIcon>}
          primaryText="photo"
          secondaryText="Jan 9, 2014"
        />
        <ListItem
          rightIcon={<FontIcon secondary>home</FontIcon>}
          primaryText="Recipes"
          secondaryText="Jan 17, 2014"
        />
        <ListItem
          rightIcon={<FontIcon secondary>home</FontIcon>}
          primaryText="Work"
          secondaryText="Jan 28, 2014"
        />
      </List>
    </CardText>
  </Card>
);

export default ClipList;
