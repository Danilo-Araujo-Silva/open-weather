import {Map} from 'immutable'

import {get, set} from 'model/helper/immutable/map'
import app from 'model/storage/app'

let actionBounds = get(app, 'redux.actions.bounds')

if (typeof actionBounds === 'undefined') {
	actionBounds = new Map().asMutable()

	set(app, 'redux.actions.bounds', actionBounds)
}

export default actionBounds
