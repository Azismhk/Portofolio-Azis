function sapa() {
    alert("Terima kasih sudah mengunjungi portofolio saya!");
}

function KirimPesan(event) {
    event.preventDefault();

    alert("Pesan berhasil dikirim! Terima Kasih sudah menghubungi saya.");

    event.target.reset();
}

