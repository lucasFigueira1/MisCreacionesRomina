// Burger menu
const burgerMenu = document.querySelector(".bars-menu");
let line1 = document.querySelector(".line1__bars-menu");
let line2 = document.querySelector(".line2__bars-menu");
let line3 = document.querySelector(".line3__bars-menu");
let navigation = document.querySelector(".Nav");

burgerMenu.addEventListener("click", () => {
    animateBars();
    displayNav();
    disableScroll();
});

function animateBars () {
    line1.classList.toggle("activeline1__bars-menu");
    line2.classList.toggle("activeline2__bars-menu");
    line3.classList.toggle("activeline3__bars-menu");
}

function displayNav () {
    navigation.classList.toggle("nav-active");
}

// No scroll

function disableScroll () {
    document.body.classList.toggle("stop-scrolling");
}