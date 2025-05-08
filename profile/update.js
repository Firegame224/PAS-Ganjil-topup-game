let inputNoTelp = "";
let inputName = "";

const getemail = localStorage.getItem("email");
const getusername = localStorage.getItem("username");
const getphone = localStorage.getItem("phone");

document.getElementById("inputMail").value = getemail || "";
document.getElementById("inputUsername").value = getusername || inputName;
document.getElementById("inputPhone").value = getphone || inputNoTelp;

function updateUser(e) {
  e.preventDefault();
  try {
    const username = document.querySelector("#inputUsername").value;
    const phone = document.querySelector("#inputPhone").value;

    localStorage.setItem("username", username);
    localStorage.setItem("phone", phone);

    window.location.href = "./";
  } catch (error) {
    console.log(error);
  }
}
