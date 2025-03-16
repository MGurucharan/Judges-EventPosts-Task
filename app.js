document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
        loop: true, // Infinite loop
        autoplay: {
            delay: 0, // No delay
            disableOnInteraction: false, // Keeps autoplay even after manual interaction
        },
        speed: 2000, // Continuous smooth scrolling
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: true,
        effect: "coverflow", // 3D depth effect
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 10 },  // Mobile
            768: { slidesPerView: 2, spaceBetween: 15 },  // Tablets
            1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktops
        },
    });
});
