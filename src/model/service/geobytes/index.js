import {dispatch} from 'model/state/redux/store'

const prefix = 'http://gd.geobytes.com/AutoCompleteCity?callback=?&q='

export async function getCitiesStartedWith(query) {
	try {
		dispatch('tasks.running.increment')
		dispatch('api.geobytes.cities.getStartedWith.start')


		/*
		 jQuery was used instead of fetch because looks like isn't working with fetch properly.
		 The Geobytes API uses jQuery in their examples.
		 */
		const data = await window.jQuery.getJSON(`${prefix}${query}`)

		dispatch('api.geobytes.cities.getStartedWith.finish', data)
	} catch (error) {
		dispatch('api.geobytes.cities.getStartedWith.finishWithError', error)
	} finally {
		dispatch('tasks.running.decrement')
	}
}