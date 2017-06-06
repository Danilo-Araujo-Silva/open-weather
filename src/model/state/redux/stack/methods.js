import {get, set} from 'model/helper/immutablejs-map'
import app from 'model/storage/app'

const actionTypeApiStatuses = get(app, 'redux.actions.api.statuses')
const actionTypeApiSubActions = get(app, 'redux.actions.api.subActions')
const actionTypes = get(app, 'redux.actions.types')
const actionCreators = get(app, 'redux.actions.creators')
const actionBounds = get(app, 'redux.actions.bounds')
const reducers = get(app, 'redux.reducers')
const reduxStore = get(app, 'redux.store')

export function split(input) {
	return input.split('.')
}

export function pushActionTypeApiStatus(status) {
	set(actionTypeApiStatuses, status, status)
}

export function pushActionTypeApiSubAction(subAction) {
	set(actionTypeApiSubActions, subAction, subAction)
}

export function pushActionType(actionType) {
	set(actionTypes, actionType, actionType)
}

export function buildActionCreator(actionType) {
	return (payload) => ({
		type: actionType,
		payload
	})
}

export function pushActionCreator(actionType, actionCreator) {
	set(actionCreators, get(actionTypes, actionType), actionCreator)
}

export function buildActionBound(actionCreator) {
	return (payload) => {
		reduxStore.dispatch(actionCreator(payload))
	}
}

export function pushActionBound(actionType, actionBound) {
	set(actionBounds, get(actionTypes, actionType), actionBound)
}

export function buildReducer(actionType, preReducer) {
	return (currentState, {type = actionType, payload}) => {
		return preReducer(currentState, payload)
	}
}

export function pushReducer(actionType, reducer) {
	set(reducers, get(actionTypes, actionType), reducer)
}

export function pushStack(actionType, preReducer) {
	const actionCreator = buildActionCreator(actionType)
	const actionBound = buildActionBound(actionCreator)
	const reducer = buildReducer(actionType, preReducer)

	pushActionType(actionType)
	pushActionCreator(actionType, actionCreator)
	pushActionBound(actionType, actionBound)
	pushReducer(actionType, reducer)
}
