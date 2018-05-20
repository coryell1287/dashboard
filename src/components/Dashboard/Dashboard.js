import React from 'react';

import { CardSnapshot, SnapShotContainer } from 'components/CardSnapshot';


const Dashboard = () => (
  <SnapShotContainer>
    <CardSnapshot title="User Sessions"/>
    <CardSnapshot title="Total Intents"/>
    <CardSnapshot title="Successful Test"/>
    <CardSnapshot title="Returned Users"/>
  </SnapShotContainer>
);

export default Dashboard;
