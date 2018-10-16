const TO_PREFIX = '';

const navItems = [{
  label: 'Clip list (Admin)',
  to: `${TO_PREFIX}/`,
  exact: true,
  icon: 'compare',
}, {
  label: 'Play list',
  to: `${TO_PREFIX}/playlist`,
  icon: 'playlist_play',
}];

export { navItems };
