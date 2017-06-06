import {List} from 'immutable'

import {get, set} from 'model/helper/immutablejs-map'
import {pushStack} from 'model/state/redux/stack/methods'

pushStack('api.geobytes.cities.getStartedWith.start', (currentState, payload) => {
	let nextState = set(currentState, 'api.geobytes.cities.getStartedWith.loading', true)

	return nextState
})

pushStack('api.geobytes.cities.getStartedWith.finish', (currentState, payload) => {
	let nextState = set(currentState, 'api.geobytes.cities.getStartedWith.loading', false)
	nextState = (nextState, 'api.geobytes.cities.getStartedWith.data', new List(payload))

	return nextState
})

pushStack('api.geobytes.cities.getStartedWith.finishWithError', (currentState, payload) => {
	let nextState = set(currentState, 'api.geobytes.cities.getStartedWith.loading', false)
	nextState = (nextState, 'api.geobytes.cities.getStartedWith.error', payload)

	return nextState
})
