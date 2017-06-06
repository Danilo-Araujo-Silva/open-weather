import {Record} from 'immutable'

import {set} from 'model/helper/immutablejs-map'
import {pushStack} from 'model/state/redux/stack/methods'
import {dispatch} from 'model/state/redux/store'

pushStack('api.open-weather.weather.current.byCityId.start', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.current.byCityId.loading', true)

	return nextState
})

pushStack('api.open-weather.weather.current.byCityId.finish', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.current.byCityId.loading', false)
	nextState = (nextState, 'api.open-weather.weather.current.byCityId.data', new Record(payload))

	return nextState
})

pushStack('api.open-weather.weather.current.byCityId.finishWithError', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.current.byCityId.loading', false)

	dispatch(
		'notification.error.insert',
		new Record({
			title: "Error when trying the current weather",
			description: "Was not possible to get the current weather for the city.",
			exception: payload
		})
	)

	return nextState
})

pushStack('api.open-weather.weather.current.byCityName.start', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.current.byCityName.loading', true)

	return nextState
})

pushStack('api.open-weather.weather.current.byCityName.finish', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.current.byCityName.loading', false)
	nextState = (nextState, 'api.open-weather.weather.current.byCityName.data', new Record(payload))

	return nextState
})

pushStack('api.open-weather.weather.current.byCityName.finishWithError', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.current.byCityName.loading', false)

	dispatch(
		'notification.error.insert',
		new Record({
			title: "Error when trying the current weather",
			description: "Was not possible to get the current weather for the city.",
			exception: payload
		})
	)

	return nextState
})

pushStack('api.open-weather.weather.5days.byCityId.start', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.5days.byCityId.loading', true)

	return nextState
})

pushStack('api.open-weather.weather.5days.byCityId.finish', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.5days.byCityId.loading', false)
	nextState = (nextState, 'api.open-weather.weather.5days.byCityId.data', new Record(payload))

	return nextState
})

pushStack('api.open-weather.weather.5days.byCityId.finishWithError', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.5days.byCityId.loading', false)

	dispatch(
		'notification.error.insert',
		new Record({
			title: "Error when trying the 5 days weather",
			description: "Was not possible to get the 5 days weather for the city.",
			exception: payload
		})
	)

	return nextState
})

pushStack('api.open-weather.weather.5days.byCityName.start', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.5days.byCityName.loading', true)

	return nextState
})

pushStack('api.open-weather.weather.5days.byCityName.finish', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.5days.byCityName.loading', false)
	nextState = (nextState, 'api.open-weather.weather.5days.byCityName.data', new Record(payload))

	return nextState
})

pushStack('api.open-weather.weather.5days.byCityName.finishWithError', (currentState, payload) => {
	let nextState = set(currentState, 'api.open-weather.weather.5days.byCityName.loading', false)

	dispatch(
		'notification.error.insert',
		new Record({
			title: "Error when trying the 5 days weather",
			description: "Was not possible to get the 5 days weather for the city.",
			exception: payload
		})
	)

	return nextState
})
