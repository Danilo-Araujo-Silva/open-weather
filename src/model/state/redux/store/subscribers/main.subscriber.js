import {isCollection} from 'immutable'

const mainSubscriber = (store) => () => {
	if (
		store
		&& store.getState()
		&& isCollection(store.getState())
	) {
		console.log(store.getState().toJS())
	}
}

export default mainSubscriber
