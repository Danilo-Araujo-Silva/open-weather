const mainMiddleware = store => next => action => {
	return next(action)
}

export default mainMiddleware
