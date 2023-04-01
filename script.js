const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ce00b6d8bcmshf06e2c73f313135p1a6f4bjsndff080f47c4a",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };
  
  const options2 = {
    method: "GET",
    headers: {
      Authorization: "KqSKv5wC2NI1jyqbOY8h2gMHMYSdGAn5PIqopw2FRhUifbs4VMAtWBOE",
    },
  };
  
  window.addEventListener("DOMContentLoaded", async () => {
    fetchLocation();
  });
  
  async function fetchLocation() {
    const popularDes = document.getElementById("popular-des");
    let response = await fetch(
      "https://travel-advisor.p.rapidapi.com/locations/search?query=popular%20location&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US",
      options
    );
    let user = await response.json();
    let locations = [];
    for (let i = 0; i < 4; i++) {
      locations.push(user.data[i].result_object.address);
    }
    console.log(locations);
    pexelFetch(locations);
  }
  
  async function pexelFetch(locations) {
    let pictures = [];
    for (let i = 0; i < locations.length; i++) {
      let response2 = await fetch(
        `https://api.pexels.com/v1/search?query=${locations[i]}`,
        options2
      );
      let user2 = await response2.json();
      console.log(user2);
      pictures.push(user2.photos[3].src.landscape);
    }
    displayLocations(locations, pictures);
  }
  
  function displayLocations(location, pictures) {
    for (let i = 0; i < location.length; i++) {
      const popularDes = document.getElementById("popular-des");
      const pic = document.createElement("img");
      const caption = document.createElement("figcaption");
      pic.src = pictures[i];
      pic.style.width = "300px";
      pic.style.height = "300px";
      pic.style.borderRadius = "5px";
      caption.innerText = location[i];
      const frame = document.createElement("div");
      frame.append(pic);
      frame.append(caption);
      popularDes.append(frame);
      popularDes.append(caption);
    }
  }
  
  document.querySelector("form").addEventListener("submit", async (e) => {
      e.preventDefault()
      const searchTerm = document.querySelector("#search").value
      console.log(searchTerm)
      const response3 = await fetch(`https://travel-advisor.p.rapidapi.com/locations/search?query=${searchTerm}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`, options)
      const response4 = await fetch(`https://api.pexels.com/v1/search?query=${searchTerm}`,options2 );
      user3 = await response3.json();
      user4 = await response4.json();
      term = user3
      console.log(user3)
      console.log(user4)
    //   window.location.href = "activities.html"
      // console.log(user3.data[2].result_type)
      setAttrations(user3, user4);
  })
  
  function setAttrations(user3, user4) {
    const picture = document.getElementById("image");
    const locationName = document.getElementById("locationName");
    const locationsDescription = document.getElementById("locationsDescription");
    const activity1 = document.getElementById("activity1");
    const activity2 = document.getElementById("activity2");
    const activity3 = document.getElementById("activity3");
    const accommodations1 = document.getElementById("accommodations1");
    const accommodations2 = document.getElementById("accommodations2");
    const accommodations3 = document.getElementById("accommodations3");
    const restaurants1 = document.getElementById("restaurants1");
    const restaurants2 = document.getElementById("restaurants2");
    const restaurants3 = document.getElementById("restaurants3");
    picture.src = user4.photos[0].src.large;
    picture.style.paddingLeft = "100px";
    picture.style.height = "500px";
    picture.style.width = "700px";
    let name = user3.data[0].result_object.location_string.toUpperCase();
    locationName.innerText = name;
    locationsDescription.innerText = user3.data[0].result_object.geo_description;
  
    // save your data in the browser
    //   window.localStorage.setItem('data', JSON.stringify({foo: 'bar'}))
  
    //   // retrieve data from browser
    //   const data = JSON.parse(window.localStorage.getItem('data'))
  
    for (let i = 0; i < 30; i++) {
      if (user3.data[i].result_type === "lodging") {
        console.log(user3.data[i].result_type);
        accommodations1.src =
          user3.data[i].result_object.photo.images.original.url;
        accommodations2.src =
          user3.data[i + 1].result_object.photo.images.original.url;
        accommodations3.src =
          user3.data[i + 2].result_object.photo.images.original.url;
      } else if (user3.data[i].result_type === "restaurants") {
        console.log(user3.data[i].result_type);
        restaurants1.src = user3.data[i].result_object.photo.images.original.url;
        restaurants2.src =
          user3.data[i + 1].result_object.photo.images.original.url;
        restaurants3.src =
          user3.data[i + 2].result_object.photo.images.original.url;
      } else if (
        user3.data[i].result_type === "things_to_do" ||
        user3.data[i].result_type === "activities"
      ) {
        activity1.src = user3.data[i].result_object.photo.images.original.url;
        activity2.src = user3.data[i + 1].result_object.photo.images.original.url;
        activity3.src = user3.data[i + 2].result_object.photo.images.original.url;
      }
    }
  }

  //Background Changes//
  function changeBackground(){
    const images = [
      'url("https://images.pexels.com/photos/6769034/pexels-photo-6769034.jpeg?auto=compress&cs=tinysrgb&w=1500&h=750&dpr=2")',
      'url("https://images.pexels.com/photos/3250361/pexels-photo-3250361.jpeg?auto=compress&cs=tinysrgb&w=1500")',
      'url("https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&w=1500")'
    ]
    const body = document.querySelector('body')
    const background = images[Math.floor(Math.random()*images.length)];
    body.style.backgroundImage = background;
  }
  setInterval(changeBackground, 1000)