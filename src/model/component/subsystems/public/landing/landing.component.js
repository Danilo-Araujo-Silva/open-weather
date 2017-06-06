/**
 * Landing page container component.
 */
import {connect} from 'react-redux'

import {get} from 'model/helper/immutablejs-map'
import {getCitiesStartedWith} from 'model/service/geobytes'
import {getCurrentWeatherByCityName} from 'model/service/open-weather'
import LandingUI from './landing.ui.component'

const mapStateToProps = (state, props) => ({
	city: get(state, 'api.open-weather.weather.current.byCityName.data'),
	cities: get(state, 'api.geobytes.cities.getStartedWith.data'),
})

const mapDispatchToProps = (disptach) => ({
	onCityChange(query) {
		getCitiesStartedWith(query)
	},
	onCityChoosen(city) {
		getCurrentWeatherByCityName(city)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingUI)
