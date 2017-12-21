import React from 'react';
import ContentMenu from 'components/Content/ContentMenu';
import IntentMenu from 'components/Intent/IntentMenu';

export default [
  {
    id: 'dashboard',
    text: 'Dashboard',
  },
  {
    id: 'intent',
    text: 'Intent',
    ref: 'intent',
    component: <IntentMenu />,
  },
  {
    id: 'content',
    text: 'Content',
    ref: 'content',
    component: <ContentMenu />,
  },
];
