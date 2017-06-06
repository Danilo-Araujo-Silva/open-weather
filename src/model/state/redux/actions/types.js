import {Map} from 'immutable'

import {get, set} from 'model/helper/immutablejs-map'
import app from 'model/storage/app'

let actionTypes = get(app, 'redux.actions.types')

if (typeof actionTypes === 'undefined') {
	actionTypes = new Map().asMutable()

	set(app, 'redux.actions.types', actionTypes)
}

export default actionTypes
