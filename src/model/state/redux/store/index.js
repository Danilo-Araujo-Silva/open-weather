import {get} from 'model/helper/immutablejs-map'
import app from 'model/storage/app'

if (typeof app.getIn('redux.store'.split('.')) === 'undefined') {
	const storeFactory = require('./store.factory').default
	const initialState = require('./initial-state').default
	const subscribers = require('./subscribers').default

	const store = storeFactory(initialState)

	for (let value of Object.values(subscribers)) {
		store.subscribe(value(store))
	}

	app.setIn('redux.store'.split('.'), store)
}

export async function dispatch (actionType, payload) {
	return await get(get(app, 'redux.actions.bounds'), actionType)(payload)
}

export default app.getIn('redux.store'.split('.'))
