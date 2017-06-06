import {Map} from 'immutable'

import {set} from 'model/helper/immutablejs-map'
import {pushStack} from 'model/state/redux/stack/methods'
import {dispatch} from 'model/state/redux/store'

pushStack('api.open-weather.weather.current.byCityName.start', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.current.byCityName.loading', true)

	return nextState
})

pushStack('api.open-weather.weather.current.byCityName.finish', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.current.byCityName.loading', false)
	// let currentData = get(nextState, 'api.open-weather.weather.current.byCityName.data')
	// currentData = currentData.merge(new Map(payload))
	// nextState = set(nextState, 'api.open-weather.weather.current.byCityName.data', currentData)
	nextState = set(nextState, 'api.open-weather.weather.current.byCityName.data', payload)

	return nextState
})

pushStack('api.open-weather.weather.current.byCityName.finishWithError', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.current.byCityName.loading', false)

	dispatch(
		'notification.error.insert',
		new Map({
			title: "Error when trying the current weather",
			description: "Was not possible to get the current weather for the city.",
			exception: payload
		})
	)

	return nextState
})
