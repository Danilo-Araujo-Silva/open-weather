import {Map} from 'immutable'

import {set} from 'model/helper/immutablejs-map'

let initialState = new Map()

initialState = set(initialState, 'api.open-weather.weather.current.byCityName.data', {
	"wind": {
		"speed": null,
		"deg": null
	},
	"name": null,
	"sys": {
		"type": null,
		"id": null,
		"message": null,
		"country": null,
		"sunrise": null,
		"sunset": null
	},
	"dt": null,
	"base": null,
	"visibility": null,
	"weather": [
		{
			"id": null,
			"main": null,
			"description": null,
			"icon": null
		}
	],
	"coord": {
		"lon": null,
		"lat": null
	},
	"cod": null,
	"main": {
		"temp": null,
		"pressure": null,
		"humidity": null,
		"temp_min": null,
		"temp_max": null
	},
	"id": null,
	"clouds": {
		"all": null
	}
})

initialState = set(initialState, 'api.geobytes.cities.getStartedWith.data', [])

export default initialState
