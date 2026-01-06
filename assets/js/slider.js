const slider = document.querySelector(".slider");


function getAllSlides() {
    return document.querySelectorAll(".slides__slide");
};

document.querySelector(".slider__button--left").addEventListener("click", moveLeft);
document.querySelector(".slider__button--right").addEventListener("click", moveRight);

const allSlides = getAllSlides();
let currentSlide = allSlides.length - allSlides.length + 1;

window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
        moveRight();
    } else if (event.code === "ArrowLeft") {
        moveLeft();
    }
})


function moveRight() {
    const allSlides = getAllSlides();
    slider.append(allSlides[0]);

    changeCurrentSlide("right");
    updateDesc();
};

function moveLeft() {
    const allSlides = getAllSlides();
    slider.prepend(allSlides[allSlides.length - 1]);
    changeCurrentSlide("left");
    updateDesc();
};

function changeCurrentSlide(direction) {
    const allSlides = getAllSlides();

    if (direction === "right") {
        currentSlide === allSlides.length ? (currentSlide = 1) : currentSlide++;
    } else {
        currentSlide === 1 ? (currentSlide = allSlides.length) : currentSlide--;
    };
};

function updateDesc() {
    const allSlides = getAllSlides();
    document.querySelector(".slider__legend-title").innerText = `Current Slide: ${currentSlide}`;
    const desc = allSlides[0].querySelector("img").alt;
    document.querySelector(".slider__legend-text").innerText = desc;
};

updateDesc();