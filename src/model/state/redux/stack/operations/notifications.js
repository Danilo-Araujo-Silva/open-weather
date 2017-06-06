import {List} from 'immutable'

import {get, set} from 'model/helper/immutablejs-map'
import {pushStack} from 'model/state/redux/stack/methods'

const insertNotificaton = (currentState, stateTargetKey, notification) => {
	let array = get(currentState, stateTargetKey)
	if (!array) {
		array = new List()
	}
	array = array.push(payload)

	let nextState = set(currentState, stateTargetKey, array)

	return nextState
}

const deleteNotification = (currentState, stateTargetKey, index) => {
	let array = get(currentState, stateTargetKey)
	if (!array) {
		return currentState
	}
	array = array.delete(index)

	let nextState = set(currentState, stateTargetKey, array)

	return nextState
}

pushStack('notification.information.insert', (currentState, payload) => {
	insertNotificaton(currentState, 'notification.information', payload)
})

pushStack('notification.information.delete', (currentState, payload) => {
	deleteNotificaton(currentState, 'notification.information', payload)
})

pushStack('notification.success.insert', (currentState, payload) => {
	insertNotificaton(currentState, 'notification.success', payload)
})

pushStack('notification.success.delete', (currentState, payload) => {
	deleteNotificaton(currentState, 'notification.success', payload)
})

pushStack('notification.warning.insert', (currentState, payload) => {
	insertNotificaton(currentState, 'notification.warning', payload)
})

pushStack('notification.warning.delete', (currentState, payload) => {
	deleteNotificaton(currentState, 'notification.warning', payload)
})

pushStack('notification.error.insert', (currentState, payload) => {
	insertNotificaton(currentState, 'notification.error', payload)
})

pushStack('notification.error.delete', (currentState, payload) => {
	deleteNotificaton(currentState, 'notification.error', payload)
})
