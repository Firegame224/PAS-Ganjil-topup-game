
let btn1 = document.getElementById('btn1');
let tes = document.getElementById('tes');
let tes1 = document.getElementById('tes1');
let tes2 = document.getElementById('tes2');

let harga= document.getElementById('rega');
let Total= document.getElementById('ttl');
let payment= document.getElementById('paymen');
// harga
let br1 = "Rp.13.000"
let br2 = "Rp.24.000"
let br3 = "Rp.45.000"
let br4 = "Rp.77.000"
let br5 = "Rp.140.000"



// Transaksi klik
function activateMenu(element){
    let items = document.querySelectorAll('.btn');
    items.forEach(item => item.classList.remove('active'));
    
    element.classList.add('active');

    if (document.querySelector('.btn.active#btn1')){
        tes.innerText = br1
        tes1.innerText = br1
        tes2.innerText = br1
        harga.innerText = br1
        Total.innerText = br1
    } else if(document.querySelector('.btn.active#btn2')){
        tes.innerText = br2
        tes1.innerText = br2
        tes2.innerText = br2
        harga.innerText = br2
        Total.innerText = br2
    } else if (document.querySelector('.btn.active#btn3')){
        tes.innerText = br3
        tes1.innerText = br3
        tes2.innerText = br3
        harga.innerText = br3
        Total.innerText = br3
    } else if (document.querySelector('.btn.active#btn4')){
        tes.innerText = br4
        tes1.innerText = br4
        tes2.innerText = br4
        harga.innerText = br4
        Total.innerText = br4
    } else {
        tes.innerText = br5
        tes1.innerText = br5
        tes2.innerText = br5
        harga.innerText = br5
        Total.innerText = br5
    }
}

// Pembayaran klik

function ActivateMenu(element){
    let coba = document.getElementById('cb');
    let items = document.querySelectorAll('.pembut');
    items.forEach(item => item.classList.remove('active'))

    element.classList.add('active')

    if (document.querySelector('.pembut.active#gopay')){
        payment.innerText = "Gopay"
    }else if (document.querySelector('.pembut.active#dana')){
        payment.innerText = "Dana"
    }else {
        payment.innerText = "Ovo"
    }
}
// Pembayaran struk pop up

let subbb = document.getElementById('sbmtt')
let struk = document.getElementById('kotakstruk')

function subb(Padd){
if(Padd === 'triger'){
    struk.style.display='block';
}
else if(Padd === 'triger2') {
    struk.style.display='none';
}
}

// menampilkan input uid di struk

function TampilkanAngka() {
    const inputid= document.getElementById('inpt').value;
    const inputser= document.getElementById('inpt1').value;
    const id = document.getElementById('aidi').textContent = inputid +" ("+ inputser +")";
}

// Menuju Pembayaran

function Bayar(Ser){
    if(Ser === 'ahay' && document.querySelector('.pembut.active#gopay')){
        window.location.href = '../gopay.html';
    } else if (Ser === 'ahay' && document.querySelector('.pembut.active#dana')){
        window.location.href = '../dana.html';
    } else if (Ser === 'ahay' && document.querySelector('.pembut.active#ovo')){
        window.location.href = '../ovo.html';
    }
};


const bayarrr = document.getElementById('pya');

// Ini Timer

let Timerspan = document.querySelector('#tekstimer');
let timerspan = document.querySelector('#tekstimer1');

function Countdown(minute,Inisecond){
    let second = Inisecond;
    let menit = minute;

    const Timerinterval = setInterval(function(){

    second-1; 
    if (second >= 1){
        timerspan.innerHTML = second;
        Timerspan.innerHTML = menit ;
        second--;
    } else if (menit > 0 && second == 0){
        Timerspan.innerHTML = menit--;
        second=59;
    } else if (menit == 0 && second == 0) {
        clearInterval(Timerinterval);
        setTimeout(()=>{
        location.href='Sampletopup.html';
    },3000);
    return;
}
    Timerspan.innerHTML= String(menit).padStart(2, "0");
    timerspan.innerHTML= String(second).padStart(2, "0");
},1000)
} 
Countdown(9,59)

// Popup Lanjut
const lanjut = document.getElementById('lanjut')
const lanjutstruk = document.getElementById('Lanjutstruk')
const strukgopay = document.querySelector('.containerpayment')

function Munculkanpopup(Sini){
    if(Sini === 'Yes'){
    lanjutstruk.style.display='Block';
    strukgopay.style.display='none';
    setTimeout(()=>{
        location.href='../beranda'
    },4000);
    } else {
    location.href='../beranda';
    }
}




// // // Yammm

// let waktu = 1 * 60

// let waktuTotal = 1 * 60; // Timer mulai dari 5 menit (300 detik)
    
// // Fungsi untuk format waktu dalam menit:detik
// function formatWaktu(s) {
//   const menit = Math.floor(s / 60);
//   const detik = s % 60;
//   return `${menit.toString().padStart(2, '0')}:${detik.toString().padStart(2, '0')}`;
// }

// // Update timer setiap detik
// const timerElement = document.getElementById("Timer");
// const interval = setInterval(function() {
//   waktuTotal--; // Kurangi 1 detik
//   timerElement.textContent = formatWaktu(waktuTotal); // Update tampilan timer


//   if (waktuTotal <= 0) {
//     clearInterval(interval);
//     alert("Habis bos")
//     timerElement.textContent = "Waktu Habis!";
//     location.href = 'Sampletopup.html';
//   }
// }, 1000); 