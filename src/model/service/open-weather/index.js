import {dispatch} from 'model/state/redux/store'

const apiKey = "d87b9eeaf69ef67c29bc611ab4a60137"
const prefix = `http://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}`

export async function getCurrentWeatherByCityName(query) {
	try {
		dispatch('tasks.running.increment')
		dispatch('api.open-weather.weather.current.byCityName.start')

		const response = await fetch(`${prefix}&q=${query}&units=metric`)
		const data = await response.json()

		dispatch('api.open-weather.weather.current.byCityName.finish', data)
	} catch (error) {
		dispatch('api.open-weather.weather.current.byCityName.finishWithError', error)
	} finally {
		dispatch('tasks.running.decrement')
	}
}
