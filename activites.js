const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2df429e771msh05586fa7de4000dp18bf10jsne610e6ce195a',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};
const actCards = document.querySelector(".act-cards");


document.addEventListener("DOMContentLoaded", async (e) => {
    let location = e.target[0].value;
    console.log(location);
   let response = await fetch(`https://travel-advisor.p.rapidapi.com/attractions/list?location_id=298571&currency=USD&lang=en_US&lunit=km&sort=recommended`, options);
   const user = response.json();
   console.log(user)
  })