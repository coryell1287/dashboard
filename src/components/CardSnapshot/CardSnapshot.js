import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'styles/theme/lib/card';
import { Button } from 'styles/theme/lib/button';

const dummyText = 8000;

const CardSnapshot = (props) => (
  <Card style={{ width: '350px' }}>
    <CardTitle
      title={props.title}
      subtitle="Two days ago"
    />
    <CardText><h1>{dummyText}</h1></CardText>
  </Card>
);

export default CardSnapshot;
