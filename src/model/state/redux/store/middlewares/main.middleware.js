const mainMiddleware = store => next => action => {
//	console.groupCollapsed('')
//	console.log('state', store.getState())
//	console.log('action', action)
	
	const result = next(action)
	
//	console.log('result', result)
	
	console.groupEnd()
	
	return result
}

export default mainMiddleware
