/**
 * Root component of the application.
 */
import React from 'react';
import {Provider} from 'react-redux'

import 'model/configuration/dependencies'
import 'model/initializer'
import 'model/state/redux'
import MainComponent from 'model/component/main/main.component'
import MaterialUIThemeProvider from 'model/component/theme/material-ui/theme-provider.component'
import Router from 'model/component/router/router.component'
import reduxStore from 'model/state/redux/store'

export default class Root extends MainComponent {
	render() {
		return (
			<Provider store={reduxStore}>
				<MaterialUIThemeProvider>
					<Router />
				</MaterialUIThemeProvider>
			</Provider>
		)
	}
}
