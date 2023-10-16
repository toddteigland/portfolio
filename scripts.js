let slideIndex = 1;
let slideTitles = ['On the Run - Coffee Ordering app','Moonshot - Crypto/Stock Portfolio Tracker', 'Kanuck Auto - Used Vehicle sales']
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

//Change About Me layout on scroll
// window.addEventListener("scroll", function () {
//   const row1 = document.getElementById("row1");
//   const row2 = document.getElementById("row2");
//   const box2 = document.getElementById("box2");
//   const box3 = document.getElementById("box3");
//   const title = this.document.getElementById("projects-title");


//   // Check if the page is scrolled
//   if (window.scrollY > 0) {
//     // row1.classList.remove("justify-end");
//     row1.classList.remove("gap-20");
//     box2.classList.remove("w-[600px]");
//     box2.classList.remove("h-[350px]");
//     box3.classList.remove("mt-[-220px]");

//     title.classList.add("mt-40")
//     // row1.classList.add("justify-center");
//     row1.classList.add("gap-10");
//     box2.classList.add("mt-20");
//     box2.classList.add("w-[400px]");
//     box2.classList.add("h-[250px]");


//     // Move the box from row2 to row1
//     row1.appendChild(box3);
//   } else {
//     // row1.classList.add("justify-end");
//     row1.classList.add("gap-20");
//     // row1.classList.remove("justify-center");
//     row1.classList.remove("gap-10");
//     box2.classList.remove("mt-20");
//     box2.classList.remove("w-[400px]");
//     box2.classList.remove("h-[250px]");
//     title.classList.remove("mt-40")
//     // row2.classList.add("justify-end");
//     box2.classList.add("w-[600px]");
//     box2.classList.add("h-[350px]");
//     box3.classList.add("mt-[-220px]");

    
//     // Move the box back to row2 from row1
//     row2.appendChild(box3);
//   }
// });

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

