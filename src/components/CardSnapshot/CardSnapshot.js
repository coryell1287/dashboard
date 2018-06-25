import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const dummyText = 8000;

const CardSnapshot = props => (
  <Card style={{ width: '350px' }}>
    <CardContent>
      <Typography>
        <h1>{props.title}</h1>
        <h3>Two days agao</h3>
        <h1>{dummyText}</h1>
      </Typography>
    </CardContent>
  </Card>
);

export default CardSnapshot;
