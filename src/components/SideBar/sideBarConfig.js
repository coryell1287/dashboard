import React from 'react';
import ContentMenu from 'components/Content/ContentMenu';
import IntentMenu from 'components/Intent/IntentMenu';

export default [
  {
    id: 'dashboard',
    heading: 'Dashboard',
    icon: <i className="fa fa-line-chart"></i>,
  },
  {
    id: 'intent',
    heading: 'Intent',
    ref: 'intent',
    component: <IntentMenu/>,
    icon: <i className="material-icons">hearing</i>,
  },
  {
    id: 'content',
    heading: 'Content',
    ref: 'content',
    component: <ContentMenu/>,
    icon: <i className="fa fa-comment"></i>,
  },
];
