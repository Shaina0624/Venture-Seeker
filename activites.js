const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dad1b6f6b2msh6c84084235fe255p12bdd0jsn0590d92acb5b',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};


document.addEventListener("DOMContentLoaded", async (e) => {
    // let location = e.target[0].value;
    // console.log(location);
   let response = await fetch(`https://travel-advisor.p.rapidapi.com/attractions/list?location_id=298571&currency=USD&lang=en_US&lunit=km&sort=recommended`, options);
   const user = await response.json();
   console.log(user)
   for(let i = 0; i < 30; i++){
    console.log(i)
    let card = document.createElement("div")
    if(!user.data[i].photo || !user.data[i].name || !user.data[i].description || !user.data[i].address || !user.data[i].website) continue;
    card.innerHTML = `<div class="card"><img src="${user.data[i].photo.images.medium.url}"><div class="info"><h1>${user.data[i].name}</h1><p>${user.data[i].description}</p><p>${user.data[i].address}</p><a href="${user.data[i].website}" class="button">Visit</a></div></div>`
    document.querySelector(".carousel").append(card)
   }
   const actCards = document.querySelector(".act-cards");

const carousel = document.querySelector(".carousel"),
firstImg = document.querySelectorAll(".card")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        console.log(firstImg)
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
  })

  
