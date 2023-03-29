const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2df429e771msh05586fa7de4000dp18bf10jsne610e6ce195a',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};
const actCards = document.querySelector(".act-cards");

document.addEventListener("DOMContentLoaded", async (e) => {
   let response = await fetch(
    ``
   );
   let catch = await response.json();
    console.log(catch)
    for(let i = 0; i < 5; i++){
      let links = document.createElement("a")
      let article = 
    }
  })