/**
 * Landing page UI component.
 */
import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import {Card, CardHeader, CardMedia} from 'material-ui/Card'
import {Grid, Row, Col} from 'react-flexbox-grid'

import MainComponent from 'model/component/main/main.component'

import './landing.component.css'

/**
 *
 */
export default class LandingUI extends MainComponent {

	componentWillMount() {
		this.props.onCityChoosen('Florianopolis')
	}

	/**
	 *
	 */
	render() {
		const weatherDescription = this.props.city.weather.map((item) => {
			return item.main
		}).join(', ')

		return <div className="landing">
			<h1>Open Weather</h1>


			<Card className="card city">
				<CardMedia>
					<div>
						<AutoComplete
							dataSource={this.props.cities}
							onUpdateInput={this.props.onCityChange}
							onNewRequest={this.props.onCityChoosen}
							filter={AutoComplete.caseInsensitiveFilter}
							fullWidth={true}
							hintText="Type the city name..."
							floatingLabelText="City"
						/>
					</div>
				</CardMedia>
			</Card>

			<Card className="card weather">
				<CardHeader
					title={this.props.city.name}
					subtitle={weatherDescription}
				/>
				<CardMedia>
					<Grid fluid className="weather">
						<Row>
							<Col xs={12} md={6}>
								<Row>
									<Col xs={12} className="weather-main-temperature">{`${Number(this.props.city.main.temp).toFixed(0)}°`}</Col>
									<Col xs={12}>{this.props.city.weather.description}</Col>
								</Row>
							</Col>
							<Col xs={12} md={6} className="weather-extra">
								<Row>
									<Col xs={6}>Min:</Col>
									<Col xs={6} className="weather-extra-value">{`${this.props.city.main.temp_min} °C`}</Col>
								</Row>
								<Row>
									<Col xs={6}>Max:</Col>
									<Col xs={6} className="weather-extra-value">{`${this.props.city.main.temp_max} °C`}</Col>
								</Row>
								<Row>
									<Col xs={6}>Humidity:</Col>
									<Col xs={6} className="weather-extra-value">{`${this.props.city.main.humidity}%`}</Col>
								</Row>
								<Row>
									<Col xs={6}>Pressure:</Col>
									<Col xs={6} className="weather-extra-value">{`${this.props.city.main.pressure} hPa`}</Col>
								</Row>
								<Row>
									<Col xs={6}>Clouds:</Col>
									<Col xs={6} className="weather-extra-value">{`${this.props.city.clouds.all}%`}</Col>
								</Row>
							</Col>
						</Row>
					</Grid>
				</CardMedia>
			</Card>
		</div>
	}
}
