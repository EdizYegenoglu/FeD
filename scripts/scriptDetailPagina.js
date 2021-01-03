// JavaScript Document tweede pagina

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





// foto klikken
var showFoto = document.getElementById("hoofdAfbeelding")

var eersteFoto = document.querySelector(".eersteFoto")
var tweedeFoto = document.querySelector(".tweedeFoto")

eersteFoto.addEventListener("click", toggleFotoStandaard)

function toggleFotoStandaard(){
    tweedeFoto.style.border = "none";
    eersteFoto.style.border = "1px black solid";
    showFoto.src = "images/producten/ilford(2).png";
}

tweedeFoto.addEventListener("click", toggleFoto)

function toggleFoto(){
      tweedeFoto.style.border = "1px black solid";
      eersteFoto.style.border = "none";
      showFoto.src = "images/producten/ilford(1).png";
}

// foto klikken 

// aantal 
var input = document.querySelector("fieldset input"), count = 1;

var omhoog = document.querySelector("fieldset button:first-of-type")
omhoog.addEventListener("click", inputOmhoog)

function inputOmhoog(){
    count += 1;
    input.value = + count;
}

var omlaag = document.querySelector("fieldset button:last-of-type")
omlaag.addEventListener("click", inputOmlaag)

function inputOmlaag(){
    count -= 1;
    input.value =  count;
}

var teller = document.querySelector("section:last-of-type a span")
var toevoegen = document.querySelector("form > button")

toevoegen.addEventListener("click", voegToeAan)


function voegToeAan(){
    teller.innerHTML = + count;
    input.value = "1";
}


// productkenmerken
var buttons = document.querySelector("#detailPagina section:nth-of-type(5) ul")

var kenmerkenButton = document.querySelector("#detailPagina section:nth-of-type(5) ul li:first-of-type")
var kenmerken = document.querySelector("#detailPagina section:nth-of-type(5) table") 

var bijlagenButton = document.querySelector("#detailPagina section:nth-of-type(5) ul li:nth-of-type(2)")
var bijlagen = document.querySelector("#detailPagina section:nth-of-type(5) article") 

var beoordelingenButton = document.querySelector("#detailPagina section:nth-of-type(5) ul li:last-of-type")
var beoordelingen = document.querySelector("#detailPagina section:nth-of-type(5) > a") 

kenmerkenButton.addEventListener("click", kenmerkenActief)

function kenmerkenActief(){ 
    kenmerken.style.display = "table";
    bijlagen.style.display = "none";
    beoordelingen.style.display = "none";
}

bijlagenButton.addEventListener("click", bijlagenActief)

function bijlagenActief(){ 
    kenmerken.style.display = "none";
    bijlagen.style.display = "block";
    beoordelingen.style.display = "none";
}

beoordelingenButton.addEventListener("click", beoordelingenActief)

function beoordelingenActief(){ 
    kenmerken.style.display = "none";
    bijlagen.style.display = "none";
    beoordelingen.style.display = "block";
}

buttons.addEventListener("click", actief)

function actief(){
    if(kenmerken.style.display === "table"){
        kenmerkenButton.style.borderLeft = "8px solid rgb(243, 156, 17)";
        kenmerkenButton.style.borderRight = "2px solid white";
        kenmerkenButton.style.color = "rgb(243, 156, 17)";

        bijlagenButton.style.color = "black";
        bijlagenButton.style.border = "1px solid black";
        beoordelingenButton.style.color = "black";
        beoordelingenButton.style.border = "1px solid black";

    }
    else if(bijlagen.style.display === "block"){
        bijlagenButton.style.borderLeft = "8px solid rgb(243, 156, 17)";
        bijlagenButton.style.borderRight = "2px solid white";
        bijlagenButton.style.color = "rgb(243, 156, 17)";

        kenmerkenButton.style.color = "black";
        kenmerkenButton.style.border = "1px solid black";
        beoordelingenButton.style.color = "black";
        beoordelingenButton.style.border = "1px solid black";
    }
    else{
        beoordelingenButton.style.borderLeft = "8px solid rgb(243, 156, 17)";
        beoordelingenButton.style.borderRight = "2px solid white";
        beoordelingenButton.style.color = "rgb(243, 156, 17)";

        kenmerkenButton.style.color = "black";
        kenmerkenButton.style.border = "1px solid black";
        bijlagenButton.style.color = "black";
        bijlagenButton.style.border = "1px solid black";
    }
}


const button = document.querySelectorAll("section:nth-of-type(6) article ul li:first-child")
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