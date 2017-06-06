/**
 * Export the current application theme.
 */
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import * as themes from './themes';

const theme = getMuiTheme(themes.materialUILightTheme);

export default theme;
