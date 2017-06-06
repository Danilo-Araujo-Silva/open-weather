import {get, set} from 'model/helper/immutablejs-map'
import app from 'model/storage/app'
import reducers from './index'

let rootReducer = get(reducers, 'root')

if (typeof rootReducer === 'undefined') {
	const actionTypes = get(app, 'redux.actions.types')

	rootReducer = (currentState, {type, payload}) => {
		const reducer = get(
			reducers,
			get(actionTypes, type)
		)

		if (!reducer) {
			return currentState
		}

		return reducer(currentState, {type, payload})
	}

	set(reducers, 'root', rootReducer)
}

export default rootReducer
