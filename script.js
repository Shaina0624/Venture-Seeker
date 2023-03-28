const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c3e878a53msh4f5244ae3c2d048p13e108jsn0e61851157af',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

const options2 = {
    method: "GET",
    headers: {
        Authorization: 'KqSKv5wC2NI1jyqbOY8h2gMHMYSdGAn5PIqopw2FRhUifbs4VMAtWBOE'
    },
}

window.addEventListener('DOMContentLoaded', async() => {
     fetchLocation()

});

async function fetchLocation (){
    const popularDes = document.getElementById('popular-des')
    let response = await fetch('https://travel-advisor.p.rapidapi.com/locations/search?query=popular%20location&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US', options);
    let user = await response.json();
    let locations = [];
    // console.log(user);
        for(let i = 0; i < 4; i++){
        locations.push(user.data[i].result_object.address)
    }
    console.log(locations)
    pexelFetch(locations)
}


async function pexelFetch(locations){
    let pictures = []
    for(let i = 0; i < locations.length; i++){
        let response2 = await fetch(`https://api.pexels.com/v1/search?query=${locations[i]}`,options2 );
        let user2 = await response2.json();
        console.log(user2)
        pictures.push(user2.photos[3].src.landscape)
    }
    displayLocations(locations, pictures)

}

function displayLocations(location, pictures){
    for(let i = 0; i < location.length; i++){
        const popularDes = document.getElementById("popular-des")
        const pic = document.createElement('img');
        const caption = document.createElement('figcaption')
        pic.src = pictures[i]
        pic.style.width = '300px'
        pic.style.height = '300px'
        pic.style.borderRadius = "5px";
         caption.innerText = location[i]
        const frame = document.createElement('div');
        frame.append(pic)
        frame.append(caption)
        popularDes.append(frame)
        popularDes.append(caption)
    }

}




document.querySelector("#search").addEventListener("submit", async (e) => {
    e.preventDefault()
    const searchTerm = e.target[0].value
    console.log(searchTerm)
    const response3 = await fetch(`https://travel-advisor.p.rapidapi.com/locations/search?query=${searchTerm}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`, options)
    const user3 = await response3.json();
    console.log(user3)

})


