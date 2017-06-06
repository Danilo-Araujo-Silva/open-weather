/**
 * Landing page UI component.
 */
import React from 'react'

import MainComponent from 'model/component/main.component'
import AutoComplete from 'material-ui/AutoComplete';

import './landing.component.css'

/**
 *
 */
export default class LandingUI extends MainComponent {

	/**
	 *
	 */
	render() {
		return <div>
			<h1>Open Weather</h1>
			<AutoComplete
				dataSource={this.props.cities}
				onUpdateInput={this.props.onCityChange}
				onNewRequest={this.props.onCityChoosen}
				filter={AutoComplete.caseInsensitiveFilter}
				fullWidth={true}
				hintText="Digite o nome de uma cidade"
				floatingLabelText="Cidade"
			/>
		</div>
	}
}
