import React, { useState } from 'react';
import Card from './components/Card';
const api = {
	key : '7b91084f95564bb1644732b86a0c1f86',
	url : 'https://api.openweathermap.org/data/2.5/'
};

function App() {
	const [ query, setQuery ] = useState('');
	const [ weather, setWeather ] = useState({});
	const [ show, setShow ] = useState(false);

	const search = (evt) => {
		if (evt.key === 'Enter') {
			fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`).then((res) => res.json()).then((result) => {
				setWeather(result);
				setShow(true);
			});
		}
	};

	return (
		<div className='app'>
			<main>
				<div className='search-box'>
					<input
						type='text'
						className='search-bar'
						placeholder='Search...'
						onChange={(e) => setQuery(e.target.value)}
						value={query}
						onKeyPress={search}
					/>
				</div>
				{
					show ? <Card weather={weather} /> :
					' '}
			</main>
		</div>
	);
}

export default App;
