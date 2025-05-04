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
var logo = document.getElementById("logo");

function navFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
    nav.style.background = "white";
	nav.style.padding = "0px";
	navCol.classList.remove("navbar-white");
	navCol.classList.add("navbar-yellow");
  logo.classList.remove("top-logo");
  } else {
    nav.style.background = "rgba(255, 255, 255,0.5)";
	nav.style.padding = "5px";
	navCol.classList.remove("navbar-yellow");
	navCol.classList.add("navbar-white");
  logo.classList.add("top-logo");
  }
}

function covidAlert() {
  var covid = document.getElementById("covidAlert").style.display = "none";
}

window.addEventListener('load', function () {
  const notification = document.getElementById('updateNotification');
  if (notification) {
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 2000); // 2 seconds
  } else {
    console.log("Notification element not found.");
  }
});

//Lazy loading ChatGPT
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy");

  const loadImage = (image) => {
      image.src = image.dataset.src;
      image.classList.remove("lazy");
  };

  const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1, // 10% of the image should be visible before loading
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              loadImage(entry.target);
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  lazyImages.forEach(image => {
      observer.observe(image);
  });
});

