import {Assets, Typography, Spacings} from 'react-native-ui-lib'; // eslint-disable-line

Assets.loadAssetsGroup('icons.demo', {
  refresh: require('./assets/icons/refresh.png'),
  search: require('./assets/icons/search.png')
});

Typography.loadTypographies({
  h1: {...Typography.text40},
  h2: {...Typography.text50},
  h3: {...Typography.text60}
});

Spacings.loadSpacings({
  page: Spacings.s5
});
