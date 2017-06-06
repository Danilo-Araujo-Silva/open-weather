import {get, set} from 'model/helper/immutablejs-map'
import {pushStack} from 'model/state/redux/stack/methods'

pushStack('tasks.running.increment', (currentState, payload) => {
	let nextState = currentState.asMutable()

	let currentTasks = get(currentState, 'tasks.running') || 0
	currentTasks++

	set(nextState, 'tasks.running', currentTasks)

	return nextState.asImmutable()
})

pushStack('tasks.running.decrement', (currentState, payload) => {
	let nextState = currentState.asMutable()

	let currentTasks = get(currentState, 'tasks.running') || 0
	if (currentTasks > 0) {
		currentTasks--
	}

	set(nextState, 'tasks.running', currentTasks)

	return nextState.asImmutable()
})
