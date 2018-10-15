// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
