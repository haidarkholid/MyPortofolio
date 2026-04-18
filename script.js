document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Animasi Hero (Tetap seperti sebelumnya)
    anime.timeline({ loop: false })
        .add({
            targets: '.hero-text .line',
            translateY: [50, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1500,
            delay: anime.stagger(400)
        });

    // 2. Observer untuk Scroll Reveal
    const observerOptions = {
        threshold: 0.2 // Animasi jalan saat 20% elemen terlihat
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Jalankan Anime.js saat elemen masuk viewport
                anime({
                    targets: entry.target,
                    translateY: [30, 0],
                    opacity: [0, 1],
                    easing: 'easeOutQuart',
                    duration: 1000
                });
                observer.unobserve(entry.target); // Hanya animasikan sekali
            }
        });
    }, observerOptions);

    // Targetkan semua elemen dengan class .reveal
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // 3. Animasi Ambient Latar Belakang (Cahaya Bergerak)
    anime({
        targets: '.circle-1',
        translateX: 80, translateY: 50,
        direction: 'alternate', loop: true,
        easing: 'easeInOutSine', duration: 5000
    });

    anime({
        targets: '.circle-2',
        translateX: -80, translateY: -50,
        direction: 'alternate', loop: true,
        easing: 'easeInOutSine', duration: 6000
    });
});