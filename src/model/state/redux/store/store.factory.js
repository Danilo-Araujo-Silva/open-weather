import {createStore, applyMiddleware} from 'redux'

import middlewares from './middlewares'
import rootReducer from './../reducers/root.reducer'
import initialState from './initial-state'

const storeFactory = (state = initialState) => {
	return applyMiddleware(
		middlewares.mainMiddleware,
		middlewares.thunkMiddleware
	)(createStore)(rootReducer, state)
}

export default storeFactory
