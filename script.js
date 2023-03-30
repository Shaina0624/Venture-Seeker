const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ce00b6d8bcmshf06e2c73f313135p1a6f4bjsndff080f47c4a',
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

let inputDataSearch = "before"

document.querySelector("#search").addEventListener("submit", async (e) => {
    e.preventDefault()
    const searchTerm = e.target[0].value
    inputDataSearch = searchTerm
    console.log(searchTerm)
    const response3 = await fetch(`https://travel-advisor.p.rapidapi.com/locations/search?query=${searchTerm}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`, options)
    const response4 = await fetch(`https://api.pexels.com/v1/search?query=${searchTerm}`,options2 );
    user3 = await response3.json();
    user4 = await response4.json();
    term = user3
    console.log(user3)
    console.log(user4)
    window.location.href = "activities.html"
    // console.log(user3.data[2].result_type)
    setAttrations(user3, user4);
})

console.log(inputDataSearch)

function setAttrations(user3, user4){
    const picture = document.getElementById("image");
    const locationName = document.getElementById('locationName');
    const locationsDescription = document.getElementById('locationsDescription')
    picture.src = user4.photos[0].src.large
    picture.style.paddingLeft = '100px'
    picture.style.height  = '500px';
    picture.style.width  = '700px'
    let name = user3.data[0].result_object.location_string.toUpperCase()
    locationName.innerText = name
    locationsDescription.innerText = user3.data[0].result_object.geo_description;
    for(let i = 0; i < 30; i++ ){
        if(user3.data[i].result_type === 'lodging'){
            console.log(user3.data[i].result_type)

        } else if (user3.data[i].result_type === 'restaurants'){
            console.log(user3.data[i].result_type)

        } else if (user3.data[i].result_type === 'things_to_do' || user3.data[i].result_type === 'activities' || user3.data[i].result_type === 'geos'){
            console.log(user3.data[i].result_type) 
        }
    }
}


