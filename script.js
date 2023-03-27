const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e8e6ec0d7emshdd88643d0fc4775p1a1b9bjsn3306146e8160',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};


window.addEventListener('DOMContentLoaded', async() => {

    const popularDes = document.getElementById('popular-des')
    let response = await fetch('https://travel-advisor.p.rapidapi.com/locations/search?query=popular%20location&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US', options)
    let user = await response.json()
    console.log(user);
        for(let i = 0; i < 4; i++){
        const link = document.createElement('a');
        link.innerText = user.data[i].result_object.address
        const list = document.createElement('li');
        list.append(link)
        popularDes.append(list)

    }
});


