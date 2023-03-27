const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e8e6ec0d7emshdd88643d0fc4775p1a1b9bjsn3306146e8160',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

fetch('https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng?longitude=109.19553&latitude=12.235588&lunit=km&currency=USD&lang=en_US', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));