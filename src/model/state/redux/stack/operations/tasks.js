import {get, set} from 'model/helper/immutable/map'
import {pushStack} from 'model/state/redux/stack/methods'

pushStack('tasks.running.increment', (currentState, payload) => {
	let currentTasks = get(currentState, 'tasks.running') || 0
	currentTasks++

	let nextState = set(currentState, 'tasks.running', currentTasks)

	return nextState
})

pushStack('tasks.running.decrement', (currentState, payload) => {
	let currentTasks = get(currentState, 'tasks.running') || 0
	if (currentTasks > 0) {
		currentTasks--
	}

	let nextState = set(currentState, 'tasks.running', currentTasks)

	return nextState
})
