import thunk from 'redux-thunk'

import mainMiddleware from './main.middleware'

const middlewares = {
		mainMiddleware,
		thunkMiddleware: thunk
}

export default middlewares
