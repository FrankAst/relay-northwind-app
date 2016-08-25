import React, { Component, PropTypes } from 'react';
import { Router, applyRouterMiddleware } from 'react-router';
import useRelay from 'react-router-relay';
import routes from './routes';

// ////////////////////////////////////////////////////////////
// This component is required for react-hot-loader@3.0.0-beta.1
// ////////////////////////////////////////////////////////////

export default class ClientRoot extends Component { // eslint-disable-line
  static propTypes = {
    relayStore: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const { relayStore, history } = this.props;

    return (
      <Router
        routes={routes}
        history={history}
        render={applyRouterMiddleware(useRelay)}
        environment={relayStore}
      />
		);
  }
}