const login = document.getElementById('Login');
const pesan = document.getElementById('pesan');

login.addEventListener('submit',function(event){
    event.preventDefault();

const gmail = document.getElementById('gmail').value;
const password = document.getElementById('password').value;
if (gmail === 'Yamm@gmail.com' && password === '12345') { 
    window.location.href = 'beranda.html'; 
    alert("selamat anda berhasil masuk");
}
else if(gmail==='' && password===''){
    pesan.innerHTML = 'Isi dulu jangan ngawur';
}
else {
    pesan.innerHTML = 'Gmail atau password salah';
}
});






// const login = document.getElementById('Login');

// login.addEventListener('submit',function(event){
//     event.preventDefault();

// const gmail = document.getElementById('gmail').value;
// const password = document.getElementById('password').value;

// if (gmail === 'Yamm@gmail.com' && password === '12345', gmail=== 'Fiky@gmail.com' && password ==='FikyAsu') {
    
//     window.location.href = 'beranda.html'; 
// } else {
    
//     document.getElementById('pesan').innerText = 'Gmail atau Password salah!';
// }
// });