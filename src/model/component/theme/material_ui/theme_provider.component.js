/**
 * Material UI theme provider component.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from 'model/configuration/theme/material_ui/theme';

const MaterialUIThemeProvider = (props) => (
  <MuiThemeProvider muiTheme={theme}>
    {props.children}
  </MuiThemeProvider>
);

export default MaterialUIThemeProvider;
