function sapa() {
    alert("Terima kasih sudah mengunjungi portofolio saya!");
}

function KirimPesan(event) {
    event.preventDefault();

    alert("Pesan berhasil dikirim! Terima Kasih sudah menghubungi saya.");

    event.target.reset();
}

let slideSekarang = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function tampilkanSlide(index) {

    if (index >= slides.length) {
        slideSekarang = 0;
    }

    if (index < 0) {
        slideSekarang = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[slideSekarang].classList.add("active");
    dots[slideSekarang].classList.add("active");
}

function geserSlide(jumlah) {
    slideSekarang += jumlah;
    tampilkanSlide(slideSekarang);
}

function slideKe(index) {
    slideSekarang = index;
    tampilkanSlide(slideSekarang);
}


/* Bisa digeser dengan jari di HP */

let posisiAwal = 0;
let posisiAkhir = 0;

const slider = document.querySelector(".slider");

slider.addEventListener("touchstart", function(e) {
    posisiAwal = e.touches[0].clientX;
});

slider.addEventListener("touchend", function(e) {
    posisiAkhir = e.changedTouches[0].clientX;

    let jarak = posisiAwal - posisiAkhir;

    if (jarak > 50) {
        geserSlide(1);
    }

    if (jarak < -50) {
        geserSlide(-1);
    }
});


/* Otomatis berganti setiap 5 detik */

setInterval(function() {
    geserSlide(1);
}, 5000);

