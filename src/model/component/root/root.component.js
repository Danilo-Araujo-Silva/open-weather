/**
 * Root component of the application.
 */
import React from 'react';

import 'model/configuration/dependencies';
import MaterialUIThemeProvider from 'model/component/theme/material_ui/theme_provider.component';
import Router from 'model/component/router/router.component';

import 'model/initializer'
import 'model/state/redux'

const Root = () => (
  <MaterialUIThemeProvider>
    <Router />
  </MaterialUIThemeProvider>
);

export default Root;
