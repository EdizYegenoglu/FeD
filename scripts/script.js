// JavaScript Document

// hamburgermenu
var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".hamburgermenu")

ham.addEventListener("click", toggleHamburger)

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
  }

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)