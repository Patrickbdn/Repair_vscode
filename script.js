window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.scrollToTop').classList.add('show');
  } else {
    document.querySelector('.scrollToTop').classList.remove('show');
  }
}

document.querySelector('.scrollToTop').addEventListener('click', function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("rotateImage");

  image.addEventListener("mouseover", () => {
      image.style.transform = "rotateY(360deg)";
  });

  image.addEventListener("mouseout", () => {
      image.style.transform = "rotateY(0deg)";
  });
  // script.js
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

});
