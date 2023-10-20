let slideIndex = 1;
let slideTitles = ['On the Run - Coffee Ordering app','Moonshot - Crypto/Stock Portfolio Tracker', 'Kanuck Auto - Used Vehicle sales', 'Tweeter - Ajax Twitter clone']
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let title = document.getElementById("slideTitle");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  title.textContent = slideTitles[slideIndex - 1];
}

document.addEventListener("DOMContentLoaded", function() {
  
  const handleScroll = () => {
    const sectionsRight = document.querySelectorAll('.rightSlide');
    const sectionsLeft = document.querySelectorAll('.leftSlide');

    sectionsRight.forEach(sectionRight => {
      const positionFromTop = sectionRight.getBoundingClientRect().top;
  
      // Check if the element is about 1/4 of the way into the screen
      if (positionFromTop < window.innerHeight / 1.1) {
        sectionRight.classList.remove("enter-from-right");
        sectionRight.classList.remove("hidden");
        sectionRight.classList.add("icon-active");

      } else {
        sectionRight.classList.remove("icon-active");
        sectionRight.classList.add("enter-from-right");
      }
    });

    sectionsLeft.forEach(sectionLeft => {
      const positionFromTop = sectionLeft.getBoundingClientRect().top;

      if(positionFromTop < window.innerHeight / 1.1) {
        sectionLeft.classList.remove("enter-from-left");
        sectionLeft.classList.remove("hidden");
        sectionLeft.classList.add("icon-active");

      } else {
        sectionLeft.classList.remove("icon-active");
        sectionLeft.classList.add("enter-from-left");
      }
    })

  };
  window.addEventListener("scroll", handleScroll);
});

const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.querySelector('.lg\\:flex');

menuToggle.addEventListener('click', () => {
  menuItems.classList.toggle('menu-open');
});
