export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
export const WEATHER_API_KEY = '5ff7057261bb529bc82714f616ec6bd1';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7a36e12076msh895f8eca4608d4dp1325c2jsn9ba643f1e01e',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/