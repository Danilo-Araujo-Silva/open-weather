/**
 * Root component of the application.
 */
import React from 'react';

import 'model/configuration/dependencies'
import 'model/initializer'
import 'model/state/redux'
import MaterialUIThemeProvider from 'model/component/theme/material_ui/theme_provider.component';
import Router from 'model/component/router/router.component';

const Root = () => (
  <MaterialUIThemeProvider>
    <Router />
  </MaterialUIThemeProvider>
);

export default Root;
