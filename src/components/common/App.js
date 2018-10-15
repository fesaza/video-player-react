import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import PropTypes from 'prop-types';
import NavItemLink from './NavItemLink';
import { navItems } from '../../utils/MenuItems';
import ClipAdmin from '../video-player/ClipAdmin';

const styles = {
  content: { minHeight: 'auto' },
};

const AppPage = ({ toolbarTitle, location }) => (
  <NavigationDrawer
    toolbarTitle={toolbarTitle}
    mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
    tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
    desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
    navItems={navItems.map(menuItem => <NavItemLink {...menuItem} key={menuItem.to} />)}
    contentId="main-demo-content"
    contentStyle={styles.content}
    contentClassName="md-grid"
  >
    <Switch key={location.pathname}>
      <Route path="/" component={ClipAdmin} />
    </Switch>
  </NavigationDrawer>
);

AppPage.propTypes = {
  location: PropTypes.object.isRequired,
  toolbarTitle: PropTypes.string.isRequired,
};

export default AppPage;
