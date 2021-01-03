// JavaScript Document eerste pagina

// hamburgermenu
var navbar = document.querySelector("header nav")
var ham = document.querySelector("header button")
var hamClose = document.querySelector("header ul li:first-of-type")
var x = document.getElementById("overlayDing")


ham.addEventListener("click", toggleHamburger)
hamClose.addEventListener("click", toggleHamburger)
x.addEventListener("click", toggleHamburger)

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
    hamClose.classList.toggle("showClose")
  }

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)

// Overlay van zwarte vlak & niet meer kunnen scrollen

ham.addEventListener("click", myFunction)
hamClose.addEventListener("click", myFunction)
x.addEventListener("click", myFunction)


var x = document.getElementById("overlayDing")
var body = document.getElementById("paginaEen")

function myFunction() {
  
  if (x.style.display === "block") {
    x.style.display = "none";
    body.style.overflow = "scroll";
  } else {
    x.style.display = "block";
    body.style.overflow = "hidden";
  }
}
// einde overlay 

// menu/
var dropDown = document.querySelector("nav ul li ul")
var pijl = document.querySelector("nav ul li svg")


pijl.addEventListener("click", toggleDropDown)

function toggleDropDown(){
  if (dropDown.style.display === "block") {
    dropDown.style.display = "none";
    pijl.style.transform = "rotate(0deg)";
  }

  else {
    dropDown.style.display = "block";
    pijl.style.transform = "rotate(180deg)";
    pijl.style.transition = ".6s";
  }
}

var dropDownTwee = document.querySelector("#lijstTwee")
var pijlTwee = document.querySelector("#pijlTwee")

pijlTwee.addEventListener("click", toggleDropDownTwee)

function toggleDropDownTwee(){
  if (dropDownTwee.style.display === "block") {
    dropDownTwee.style.display = "none";
    pijlTwee.style.transform = "rotate(0deg)";
  }

  else {
    dropDownTwee.style.display = "block";
    pijlTwee.style.transform = "rotate(180deg)";
    pijlTwee.style.transition = ".6s";
  }
}
// einde menu 

// slider
var slide = document.querySelector("#paginaEen main section:nth-of-type(1) img:last-of-type")

setInterval(function afbeeldingSlider(){ 
    if (slide.style.opacity === "100") {
      slide.style.opacity = "0";
    }
    else {
      slide.style.opacity = "100";
    }
}, 6000);
// einde slider 

// meer producten
var meerLaden = document.querySelector("body main > button")
var meerProducten = document.querySelector("main section:nth-of-type(5)")

meerLaden.addEventListener("click", toggleMeerLaden)

function toggleMeerLaden(){
  meerProducten.style.display = "grid";
  meerLaden.style.display = "none";
}
// einde meerproducten 

// winkelwagen

const button = document.querySelectorAll("section:nth-of-type(n+4):nth-of-type(-n+5) article ul li:first-child")
var inDruk = document.querySelector(".inWinkelwagen")
var teller = document.querySelector("section:last-of-type a span"),
  count = 0;

button.forEach((inDruk) => {
inDruk.addEventListener("click", voegToe)
});

function voegToe(){
  count += 1;
  teller.innerHTML = + count;
}
// einde winkelwagen 

