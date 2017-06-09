import {Map} from 'immutable'

import {get, set} from 'model/helper/immutable/map'
import app from 'model/storage/app'

let reducers = get(app, 'redux.reducers')

if (typeof reducers === 'undefined') {
	reducers = new Map().asMutable()

	require('./root.reducer')

	set(app, 'redux.reducers', reducers)
}

export default reducers
