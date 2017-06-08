import {Map} from 'immutable'

import {set} from 'model/helper/immutable/map'
import {pushStack} from 'model/state/redux/stack/methods'
import {dispatch} from 'model/state/redux/store'

pushStack('api.geobytes.cities.getStartedWith.initialize', (currentState, payload) => {
	let nextState = set(currentState, 'api.geobytes.cities.getStartedWith.loading', false)
	nextState = set(currentState, 'api.geobytes.cities.getStartedWith.data', [])

	return nextState
})

pushStack('api.geobytes.cities.getStartedWith.start', (currentState, payload) => {
	let nextState = set(currentState, 'api.geobytes.cities.getStartedWith.loading', true)

	return nextState
})

pushStack('api.geobytes.cities.getStartedWith.finish', (currentState, payload) => {
	let nextState = set(currentState, 'api.geobytes.cities.getStartedWith.loading', false)
	nextState = set(nextState, 'api.geobytes.cities.getStartedWith.data', payload)

	return nextState
})

pushStack('api.geobytes.cities.getStartedWith.finishWithError', (currentState, payload) => {
	let nextState = set(currentState, 'api.geobytes.cities.getStartedWith.loading', false)

	dispatch(
		'notification.error.insert',
		new Map({
			title: "Error when trying to get cities",
			description: "Was not possible to get the cities to complete this task.",
			exception: payload
		})
	)

	return nextState
})
