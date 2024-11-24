const loginn = document.getElementById('Login');
const daftar = document.getElementById('Daftar');
const pesan = document.getElementById('pesan');

function Pindah(swip) {
    if (swip === '1') {
        loginn.style.display = 'none';
        daftar.style.display = 'block';
    } else if (swip === '2') {
        loginn.style.display = 'block';
        daftar.style.display = 'none';
    }
}

function DaftarUser () {
    const email = document.querySelector('#Daftar #daftar-gmail').value;
    const password = document.querySelector('#Daftar #daftar-password').value;

    if (email && password) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Pendaftaran berhasil! Silakan login.');
        Pindah('2')
    } else {
        alert('Harap isi semua field!');
    }
}


function LoginUser () {
    const email = document.querySelector('#Login #login-gmail').value;
    const password = document.querySelector('#Login #login-password').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        alert('Login berhasil! Selamat datang.');
        window.location.href = 'beranda.html';
    } else {
        pesan.innerHTML = 'Email atau password salah!';
    }
}