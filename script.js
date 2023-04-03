const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bddbd07e2fmsh0de35a88f0791aap141a63jsnfe759094cd7d",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

const options2 = {
  method: "GET",
  headers: {
    Authorization: "KqSKv5wC2NI1jyqbOY8h2gMHMYSdGAn5PIqopw2FRhUifbs4VMAtWBOE",
  },
};
//////////////////////////////
///Variables for activities//
////////////////////////////
const activity1 = document.getElementById("activitiesTitle1");
const activityImg1 = document.getElementById("activitiesImg1");
const activitiyDescription1 = document.getElementById("activitiyDescription1");

const activity2 = document.getElementById("activitiesTitle2");
const activityImg2 = document.getElementById("activitiesImg2");
const activitiyDescription2 = document.getElementById("activitiyDescription2");

const activity3 = document.getElementById("activitiesTitle3");
const activityImg3 = document.getElementById("activitiesImg3");
const activitiyDescription3 = document.getElementById("activitiyDescription3");

//////////////////////////////
///Variables for resturant///
////////////////////////////
const resturantImg1 = document.getElementById("resturantImg1");
const resturantTitle1 = document.getElementById("resturantTitle1");
const resturantDescription1 = document.getElementById("resturantDescription1");

const resturantImg2 = document.getElementById("resturantImg2");
const resturantTitle2 = document.getElementById("resturantTitle2");
const resturantDescription2 = document.getElementById("resturantDescription2");

const resturantImg3 = document.getElementById("resturantImg3");
const resturantTitle3 = document.getElementById("resturantTitle3");
const resturantDescription3 = document.getElementById("resturantDescription3");

/////////////////////////////////
///Variables for accomidations///
////////////////////////////////

const accomidationstImg1 = document.getElementById("accomidationsImg1");
const accomidationsTitle1 = document.getElementById("accomidationsTitle1");
const accomidationsDescription1 = document.getElementById(
  "accomidationsDescription1"
);

const accomidationsImg2 = document.getElementById("accomidationsImg2");
const accomidationsTitle2 = document.getElementById("accomidationsTitle2");
const accomidationsDescription2 = document.getElementById(
  "accomidationsDescription2"
);

const accomidationsImg3 = document.getElementById("accomidationsImg3");
const accomidationsTitle3 = document.getElementById("accomidationsTitle3");
const accomidationsDescription3 = document.getElementById(
  "accomidationsDescription3"
);

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
  e.preventDefault();
  const searchTerm = document.querySelector("#search").value;
  const response3 = await fetch(
    `https://travel-advisor.p.rapidapi.com/locations/search?query=${searchTerm}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`,
    options
  );
  const response4 = await fetch(
    `https://api.pexels.com/v1/search?query=${searchTerm}`,
    options2
  );
  user3 = await response3.json();
  user4 = await response4.json();
  setAttrations(user3, user4);
});

function setAttrations(user3, user4) {
  const picture = document.getElementById("image");
  const locationName = document.getElementById("locationName");
  const locationDescription = document.getElementById("locationDescription");
  picture.src = user4.photos[0].src.original;
  let name = user3.data[0].result_object.location_string.toUpperCase();
  locationName.innerText = name;
  locationName.append(locationDescription);
  locationDescription.innerHTML = user3.data[0].result_object.geo_description;
  const activitiesAndRestaurants = new Set();

  for (let i = 0; i < 30; i++) {
    if (
      (activitiesAndRestaurants.has(user3.data[i]) === false &&
        user3.data[i].result_type === "things_to_do") ||
      user3.data[i].result_type === "activities"
    ) {
      activityImg1.src = user3.data[i].result_object.photo.images.original.url;
      activity1.innerText = user3.data[i].result_object.name;
      activitiyDescription1.innerText = `Location:${user3.data[i].result_object.location_string}
          Rating:${user3.data[i].result_object.rating}`;
      activitiesAndRestaurants.add(user3.data[i]); // add the actual object to the Set
      break;
    }
  }

  for (let i = 0; i < 30; i++) {
    if (
      (activitiesAndRestaurants.has(user3.data[i]) === false &&
        user3.data[i].result_type === "things_to_do") ||
      user3.data[i].result_type === "activities"
    ) {
      activityImg2.src = user3.data[i].result_object.photo.images.original.url;
      activity2.innerText = user3.data[i].result_object.name;
      activitiyDescription2.innerText = `Location:${user3.data[i].result_object.location_string}
          Rating:${user3.data[i].result_object.rating}`;
      activitiesAndRestaurants.add(user3.data[i]); // add the actual object to the Set
      break;
    }
  }

  for (let i = 0; i < 30; i++) {
    if (
      (activitiesAndRestaurants.has(user3.data[i]) === false &&
        user3.data[i].result_type === "things_to_do") ||
      user3.data[i].result_type === "activities"
    ) {
      activityImg3.src = user3.data[i].result_object.photo.images.original.url;
      activity3.innerText = user3.data[i].result_object.name;
      activitiyDescription3.innerText = `Location:${user3.data[i].result_object.location_string}
          Rating:${user3.data[i].result_object.rating}`;
      activitiesAndRestaurants.add(user3.data[i]); // add the actual object to the Set
      break;
    }
  }

  for (let i = 0; i < 30; i++) {
    if (
      user3.data[i].result_type === "restaurants" &&
      activitiesAndRestaurants.has(user3.data[i]) === false
    ) {
      resturantImg1.src = user3.data[i].result_object.photo.images.original.url;
      resturantTitle1.innerText = user3.data[i].result_object.name;
      resturantDescription1.innerText = `Location:${user3.data[i].result_object.location_string}
            Rating:${user3.data[i].result_object.rating}`;
      activitiesAndRestaurants.add(user3.data[i]);
      break;
    }
  }
  for (let i = 0; i < 30; i++) {
    if (
      user3.data[i].result_type === "restaurants" &&
      activitiesAndRestaurants.has(user3.data[i]) === false
    ) {
      resturantImg2.src = user3.data[i].result_object.photo.images.original.url;
      resturantTitle2.innerText = user3.data[i].result_object.name;
      resturantDescription2.innerText = `Location:${user3.data[i].result_object.location_string}
            Rating:${user3.data[i].result_object.rating}`;
      activitiesAndRestaurants.add(user3.data[i]);
      break;
    }
  }
  for (let i = 0; i < 30; i++) {
    if (
      user3.data[i].result_type === "restaurants" &&
      activitiesAndRestaurants.has(user3.data[i]) === false
    ) {
      resturantImg3.src = user3.data[i].result_object.photo.images.original.url;
      resturantTitle3.innerText = user3.data[i].result_object.name;
      resturantDescription3.innerText = `Location:${user3.data[i].result_object.location_string}
            Rating:${user3.data[i].result_object.rating}`;
      activitiesAndRestaurants.add(user3.data[i]);
      break;
    }
  }
  for (let i = 0; i < 30; i++) {
    if (
      activitiesAndRestaurants.has(user3.data[i]) === false &&
      user3.data[i].result_type === "lodging"
    ) {
      accomidationsImg1.src =
        user3.data[i].result_object.photo.images.original.url;
      accomidationsTitle1.innerText = user3.data[i].result_object.name;
      accomidationsDescription1.innerText = `Location:${user3.data[i].result_object.location_string}
          Rating:${user3.data[i].result_object.rating}`;
      activitiesAndRestaurants.add(user3.data[i]);
      break;
    }
  }
  for (let i = 0; i < 30; i++) {
    if (
      activitiesAndRestaurants.has(user3.data[i]) === false &&
      user3.data[i].result_type === "lodging"
    ) {
      accomidationsImg2.src =
        user3.data[i].result_object.photo.images.original.url;
      accomidationsTitle2.innerText = user3.data[i].result_object.name;
      accomidationsDescription2.innerText = `Location:${user3.data[i].result_object.location_string}
          Rating:${user3.data[i].result_object.rating}`;
      activitiesAndRestaurants.add(user3.data[i]);
      break;
    }
  }

  for (let i = 0; i < 30; i++) {
    if (
      activitiesAndRestaurants.has(user3.data[i]) === false &&
      user3.data[i].result_type === "lodging"
    ) {
      accomidationsImg3.src =
        user3.data[i].result_object.photo.images.original.url;
      accomidationsTitle3.innerText = user3.data[i].result_object.name;
      accomidationsDescription3.innerText = `Location:${user3.data[i].result_object.location_string}
          Rating:${user3.data[i].result_object.rating}`;
      activitiesAndRestaurants.add(user3.data[i]);
      break;
    }
  }
}
