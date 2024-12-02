let Gambar = 0;
Ngapain();

function Ngapain() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  Gambar++;
  if (Gambar >= slides.length) { 
    Gambar = 0; 
  }
  slides[Gambar].classList.add("active");
  setTimeout(Ngapain, 3000); 
}
