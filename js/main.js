//Navbar
let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");

menu.addEventListener('click', () => {
    navbar.classList.toggle('open')

    if (menu.classList.contains("fa-bars"))
        menu.classList.replace("fa-bars", "fa-times")

    else
        menu.classList.replace("fa-times", "fa-bars")
})


//Home Section

let imagesDiv = document.querySelectorAll(".images img")
let imageDiv = document.querySelector(".image img")
let homeDiv = document.getElementById("home")

let arrColors = ["#f9f6c8", "#E5D9B6", "#E8D2A6", "#B7B78A", "#EDDBC7"]

for (let index = 0; index < imagesDiv.length; index++) {
    let element = imagesDiv[index];
    console.log(element);

    element.addEventListener("click", (e) => {

        let imgSrc = e.target.getAttribute("src");
        // console.log(imgSrc);
        imageDiv.setAttribute("src", `${imgSrc}`)
        homeDiv.style.backgroundColor = `${arrColors[index]}`
    })
}

//Counting Section
let countingDiv = document.querySelector(".counting")
let nums = document.querySelectorAll(".count")

let started = false; // Function Started ? No

window.onscroll = function () {
    if (!started) {
        nums.forEach((num) => startCount(num));
    }
    started = true;
}

function startCount(element) {
    let goal = element.dataset.goal;
    let count = setInterval(() => {
        element.textContent++;
        if (element.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}



//Our Projects
let divGallery = document.querySelector(".gallery")
let divLayout = document.getElementById("layout");
let divModelImage = document.getElementById("modelImage");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let close = document.getElementById("close");

let arrImages = ["images/img-1.jpg", "images/img-2.jpg", "images/img-3.jpg",
    "images/img-4.jpg", "images/img-5.jpg", "images/img-6.jpg"]

let image;
let counter;

for (let index = 0; index < arrImages.length; index++) {

    image = document.createElement("img")
    image.setAttribute("src", `${arrImages[index]}`)
    divGallery.appendChild(image)

    //Open Image
    image.addEventListener("click", (eventInfo) => {

        let imgSrc = eventInfo.target.getAttribute("src")

        divModelImage.style.backgroundImage = `url(${imgSrc})`
        divLayout.style.display = "flex"

        counter = arrImages.indexOf(imgSrc);
        console.log(counter);
    })

}


//Next Image
function nextImage() {
    counter++;

    if (counter >= arrImages.length) {
        counter = 0;
    }
    divModelImage.style.backgroundImage = `url(${arrImages[counter]})`
}
next.addEventListener("click", nextImage)


//Previous Image
function previousImage() {
    counter--;

    if (counter < 0) {
        counter = arrImages.length - 1;
    }
    divModelImage.style.backgroundImage = `url(${arrImages[counter]})`
}
previous.addEventListener("click", previousImage)


//Close Image
function closeImage() {
    divLayout.style.display = "none"
}
close.addEventListener("click", closeImage)

//KeyBoard Events
document.addEventListener("keydown", (eventInfo) => {
    console.log(eventInfo);
    if (eventInfo.code == "ArrowRight") { nextImage() } //Arrow Right
    else if (eventInfo.code == "ArrowLeft") { previousImage() } //Arrow Left
    else if (eventInfo.code == "Escape") { closeImage() } //close
})



