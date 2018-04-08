import React from 'react';
import ContentMenu from 'components/Content/ContentMenu';
import IntentMenu from 'components/Intent/IntentMenu';

export default [
  {
    id: 'dashboard',
    heading: 'Dashboard',
  },
  {
    id: 'intent',
    heading: 'Intent',
    ref: 'intent',
    component: <IntentMenu />,
  },
  {
    id: 'content',
    heading: 'Content',
    ref: 'content',
    component: <ContentMenu />,
  },
];
