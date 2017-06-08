import {Map} from 'immutable'

import {get, set} from 'model/helper/immutable/map'
import app from 'model/storage/app'

let actionCreators = get(app, 'redux.actions.creators')

if (typeof actionCreators === 'undefined') {
	actionCreators = new Map().asMutable()

	set(app, 'redux.actions.creators', actionCreators)
}

export default actionCreators
