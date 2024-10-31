let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex >= slides.length) { 
    slideIndex = 0; 
  }
  slides[slideIndex].classList.add("active");
  setTimeout(showSlides, 3000); 
}
