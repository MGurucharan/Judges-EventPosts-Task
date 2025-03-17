
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");

const getScrollAmount = () => {
    const profile = document.querySelector(".profile");
    const profileWidth = profile.offsetWidth + 40; 
    const gap = 10; 

    if (window.innerWidth > 768) {
        return profileWidth + gap;
    } else {
        return profileWidth + gap - 40;
    }
};

nextBtn.addEventListener("click", () => {
    gsap.to(scrollContainer, {
        scrollLeft: `+=${getScrollAmount()}`,
        duration: 1,
        ease: "power2.inOut"
    });
});

backBtn.addEventListener("click", () => {
    gsap.to(scrollContainer, {
        scrollLeft: `-=${getScrollAmount()}`,
        duration: 1,
        ease: "power2.inOut"
    });
});

scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    gsap.to(scrollContainer, {
        scrollLeft: scrollContainer.scrollLeft + event.deltaY,
        duration: 0.5,
        ease: "power2.inOut"
    });
});









