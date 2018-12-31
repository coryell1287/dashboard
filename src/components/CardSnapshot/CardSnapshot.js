import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const dummyText = 8000;

export const CardSnapshot = props => (
  <Card style={{ width: '350px' }}>
    <CardContent>
      <Typography color="secondary" component="h5" variant="h5" gutterBottom>{props.title}</Typography>
      <Typography color="secondary" component="h2" variant="subtitle1" gutterBottom>Three Days ago</Typography>
      <Typography color="secondary" component="h5" variant="h5" gutterBottom>{dummyText}</Typography>
    </CardContent>
  </Card>
);

export default CardSnapshot;
