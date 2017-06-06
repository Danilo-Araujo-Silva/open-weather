/**
 * Root component of the application.
 */
import React from 'react';
import {Provider} from 'react-redux'

import 'model/configuration/dependencies'
import 'model/initializer'
import 'model/state/redux'
import MaterialUIThemeProvider from 'model/component/theme/material_ui/theme_provider.component'
import Router from 'model/component/router/router.component'
import reduxStore from 'model/state/redux/store'

const Root = () => (
  <Provider store={reduxStore}>
    <MaterialUIThemeProvider>
      <Router />
    </MaterialUIThemeProvider>
  </Provider>
);

export default Root;
