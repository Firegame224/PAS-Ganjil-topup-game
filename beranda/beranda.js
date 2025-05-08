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


document.addEventListener("DOMContentLoaded", () => {
  const profileIcon = document.querySelector(".profile-dropdown .icons");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  profileIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
  });
});

const email = document.getElementsByClassName('email')[0];
const emailValue = localStorage.getItem('email');
email.textContent = "Email: " + emailValue;


const passowrd = document.getElementsByClassName('password')[0];
const passwordValue = localStorage.getItem('password')
passowrd.textContent = "Password: "+passwordValue;

const keluar = document.getElementsByClassName('logout')[0];

function Logout () {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = 'index.html';
}