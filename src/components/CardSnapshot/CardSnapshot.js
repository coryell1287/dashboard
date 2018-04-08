import React from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';

const dummyText = 8000;

const CardSnapshot = props => (
  <Card style={{ width: '350px' }}>
    <CardTitle
      title={props.title}
      subtitle="Two days ago"
    />
    <CardText><h1>{dummyText}</h1></CardText>
  </Card>
);

export default CardSnapshot;
