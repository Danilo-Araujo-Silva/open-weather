/**
 * Landing page container component.
 */
import {connect} from 'react-redux'

import app from 'model/storage/app'
import {default as reduxStore, dispatch} from 'model/state/redux/store'
import {get} from 'model/helper/immutablejs-map'
import {getCitiesStartedWith} from 'model/service/geobytes'
import LandingUI from './landing.ui.component'

const bounds = get(app, 'redux.actions.bounds')

const mapStateToProps = (state, props) => ({
	cities: get(reduxStore.getState(), 'api.geobytes.cities.getStartedWith.data')
})

const mapDispatchToProps = (disptach) => ({
	onCityChange(query) {
		getCitiesStartedWith(query)
	},
	onCityChoosen(city) {
		console.log(city)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingUI)
