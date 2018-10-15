// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { toTitle } from './utils/Utils';
import AppPage from './components/common/App';
import './App.css';

class App extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  constructor(props) {
    super();
    this.state = { toolbarTitle: this.getCurrentTitle(props) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ toolbarTitle: this.getCurrentTitle(nextProps) });
  }

  getCurrentTitle = ({ location: { pathname } }) => {
    const lastSection = pathname.substring(pathname.lastIndexOf('/') + 1);
    if (!lastSection) {
      return 'Video clip list';
    }

    return toTitle(lastSection);
  };

  render = () => {
    const { toolbarTitle } = this.state;
    const { location } = this.props;
    return (
      <AppPage toolbarTitle={toolbarTitle} location={location} />
    );
  }
}

export default withRouter(App);
