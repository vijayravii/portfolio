// Scroll to Top
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {navFunction(), scrollFunction(), navColor()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Navbar Color Change
var navbar = document.getElementById("navbar");
var nav = document.querySelector(".navbar");
var navCol = document.querySelector(".navbar-white");

function navFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
    nav.style.background = "white";
	nav.style.padding = "0px";
	navCol.classList.remove("navbar-white");
	navCol.classList.add("navbar-yellow");
  } else {
    nav.style.background = "rgba(255, 255, 255,0.5)";
	nav.style.padding = "5px";
	navCol.classList.remove("navbar-yellow");
	navCol.classList.add("navbar-white");
  }
}

function covidAlert() {
  var covid = document.getElementById("covidAlert").style.display = "none";
}