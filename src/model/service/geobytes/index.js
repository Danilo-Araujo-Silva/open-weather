import {dispatch} 'model/state/redux/store'

const prefix = "http://gd.geobytes.com/AutoCompleteCity?callback=?&q="

export async function getCitiesStartedWith(query) {
	try {
		dispatch('tasks.running.increment')
		dispatch('api.geobytes.cities.getStartedWith.start')

		const response = await fetch(`${prefix}${query}`);
		const data = await response.json();

		dispatch('api.geobytes.cities.getStartedWith.finish', data)
	} catch (error) {
		dispatch('api.geobytes.cities.getStartedWith.finishWithError', error)
	} finally {
		dispatch('tasks.running.decrement')
	}
}