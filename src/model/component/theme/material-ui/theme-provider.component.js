/**
 * Material UI theme provider component.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainComponent from 'model/component/main/main.component'
import theme from 'model/configuration/theme/material-ui/theme';

export default class Router extends MainComponent {

	render() {
		return (
			<MuiThemeProvider muiTheme={theme}>
				{this.props.children}
			</MuiThemeProvider>
		)
	}
}
