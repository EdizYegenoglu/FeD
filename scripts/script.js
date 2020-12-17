// JavaScript Document

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
    // klikNaast.classList.toggle("showClose")
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
  // if (x.style.opacity === "1") {
  //   x.style.opacity = "0";
  // } else {
  //   x.style.opacity= "1";
  // }
}



// var dropDown = document.querySelector("nav ul li ul li")
// var menuHover = document.querySelector("nav ul li a, nav ul li ul li")
// var menuHoverOut = document.querySelector("nav ul li ul")

// menuHover.addEventListener("mouseover", toggleDropDown)
// menuHoverOut.addEventListener("mouseout", toggleDropDown)

// function toggleDropDown(){
//   if (dropDown.style.display === "block") {
//     dropDown.style.display = "none";
//   } 
//   else {
//     dropDown.style.display = "block";
//   }
// }

