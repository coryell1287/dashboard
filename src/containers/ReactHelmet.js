import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet/es/Helmet';

export default class ReactHelmet extends PureComponent {

  render() {
    return (
      <Helmet>
        <title>Project</title>
        <html lang="en"/>
        <meta name="description" content="Add the project description here"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      </Helmet>
    );
  }
}
