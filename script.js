document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Animasi Teks Masuk (Fade Up Staggered)
    anime.timeline({ loop: false })
        .add({
            targets: '.hero-text .line',
            translateY: [50, 0], // Meluncur dari bawah ke posisi awal
            opacity: [0, 1],     // Dari transparan menjadi terlihat
            easing: "easeOutExpo",
            duration: 1500,
            delay: anime.stagger(400) // Memberikan jeda 400ms antar baris
        });

    // 2. Animasi Ambient Latar Belakang (Cahaya Bergerak)
    anime({
        targets: '.circle-1',
        translateX: 80,
        translateY: 50,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 5000 // Bergerak lambat selama 5 detik
    });

    anime({
        targets: '.circle-2',
        translateX: -80,
        translateY: -50,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 6000 // Bergerak dengan durasi sedikit berbeda agar natural
    });

});