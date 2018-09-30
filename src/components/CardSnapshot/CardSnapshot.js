import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const dummyText = 8000;

const CardSnapshot = props => (
  <Card style={{ width: '350px' }}>
    <CardContent>
      <Typography variant="title" gutterBottom>{props.title}</Typography>
      <Typography variant="subheading" gutterBottom>Three Days ago</Typography>
      <Typography variant="title" gutterBottom>{dummyText}</Typography>
    </CardContent>
  </Card>
);

export default CardSnapshot;
