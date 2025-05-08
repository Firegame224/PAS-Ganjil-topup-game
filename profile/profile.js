const logbtn = document.getElementById("logout");
let email = document.getElementById("email");
let username = document.getElementById("username");
let phone = document.getElementById("phone");


const getemail = localStorage.getItem("email");
const getusername = localStorage.getItem("username");
const getphone = localStorage.getItem("phone");


email.innerHTML = getemail;
username.innerHTML = getusername;
phone.innerHTML = getphone;
function Logout () {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = 'index.html';
}

function Keluar () {
    window.location.href = '../beranda/';
}
// Update User
