import {Map} from 'immutable'

import {set} from 'model/helper/immutablejs-map'

let initialState = new Map()
initialState = set(initialState, 'api.geobytes.cities.getStartedWith.data', [])

export default initialState
