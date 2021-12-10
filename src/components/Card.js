import React from 'react';
import './Card.css';

function Card(props) {
	const weather = props.weather;
	const dateBuilder = (d) => {
		let months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	};

	return (
		<div>
			{
				typeof weather.main != 'undefined' ? <div className='container'>
					<div className='bg-image'>
						<div className='info'>
							<div className='location-box'>
								<div>
									{weather.name}, {weather.sys.country}
								</div>
								<div>{dateBuilder(new Date())}</div>
							</div>
							<div className='weather-box'>
								<div>Now:{Math.round(weather.main.temp)}°c</div>
								<div> Todays min:{Math.round(weather.main.temp_min)}°c</div>
								<div>Todays max:{Math.round(weather.main.temp_max)}°c</div>
								<div> Feels: {Math.round(weather.main.feels_like)}°c</div>
								<div> Humidity: {Math.round(weather.main.humidity)}%</div>
								<div>Sky: {weather.weather[0].description}</div>
							</div>
						</div>
					</div>
				</div> :
				<div className='container'>
					<div className='bg-image'>
						<div className='error'>
							<h1>Location Not Found</h1>
						</div>
					</div>
				</div>}
		</div>
	);
}

export default Card;
