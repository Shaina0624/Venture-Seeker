const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e8e6ec0d7emshdd88643d0fc4775p1a1b9bjsn3306146e8160',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

window.addEventListener('DOMContentLoaded', async() => {
    const popularDes = document.getElementById('popular-des')
    const popularDes2 = document.getElementById('popular-des2')
    let response = await fetch('https://travel-advisor.p.rapidapi.com/locations/search?query=popular%20location&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US', options)
    let user = await response.json()
    console.log(user);
        for(let i = 0; i < 2; i++){
        const pic = document.createElement('img');
        const caption = document.createElement('figcaption')
        pic.src = user.data[i].result_object.photo.images.small.url
        caption.innerText = user.data[i].result_object.address
        const frame = document.createElement('div');
        frame.append(pic)
        frame.append(caption)
        popularDes.append(frame)
        popularDes.append(caption)
    }
    for(let i = 2; i < 4; i++){
        const pic = document.createElement('img');
        const caption = document.createElement('figcaption')
        pic.src = user.data[i].result_object.photo.images.small.url
        caption.innerText = user.data[i].result_object.address
        const frame = document.createElement('div');
        frame.append(pic)
        frame.append(caption)
        popularDes2.append(frame)
        popularDes2.append(caption)
    }
});

document.querySelector("#search").addEventListener("submit", async (e) => {
    e.preventDefault()
    const searchTerm = e.target[0].value
    console.log(searchTerm)

})