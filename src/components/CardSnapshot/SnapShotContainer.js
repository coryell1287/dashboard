import React from 'react';
import cardSnapShotStyles from 'components/CardSnapshot/cardSnapShotStyles';

const SnapShotContainer = (props) => (
  <article id="snapShotContainer" className={cardSnapShotStyles.snapShotContainer}>
    {props.children}
  </article>
);

export default SnapShotContainer;
