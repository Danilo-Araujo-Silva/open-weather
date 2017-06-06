export function get(map, key) {
	if (!map || !key) {
		return
	}

	return map.getIn(key.split('.'))
}

export function set(map, key, value) {
	if (!key) {
		throw Error(`Invalid key ("${key}").`)
	}

	return map.setIn(key.split('.'), value)
}
