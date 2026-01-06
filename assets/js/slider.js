const slider = document.querySelector(".slider");


function getAllSlides() {
    return document.querySelectorAll(".slides__slide");
};

document.querySelector(".slider__button--left").addEventListener("click", moveLeft);
document.querySelector(".slider__button--right").addEventListener("click", moveRight);

const pauseBtn = document.querySelector(".slider__button--pause");
// simple autoplay every 3 seconds
let autoplayId = setInterval(moveRight, 3000);

if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
        if (autoplayId) {
            clearInterval(autoplayId);
            autoplayId = null;
            pauseBtn.classList.remove("fa-solid")
            pauseBtn.classList.remove("fa-pause")
            pauseBtn.classList.add("fa-solid")
            pauseBtn.classList.add("fa-play")
        } else {
            pauseBtn.classList.remove("fa-solid")
            pauseBtn.classList.remove("fa-play")
            pauseBtn.classList.add("fa-solid")
            pauseBtn.classList.add("fa-pause")
            autoplayId = setInterval(moveRight, 3000);

        }
    });
}

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
};

function moveLeft() {
    const allSlides = getAllSlides();
    slider.prepend(allSlides[allSlides.length - 1]);
    changeCurrentSlide("left");
};

function changeCurrentSlide(direction) {
    const allSlides = getAllSlides();

    if (direction === "right") {
        currentSlide === allSlides.length ? (currentSlide = 1) : currentSlide++;
    } else {
        currentSlide === 1 ? (currentSlide = allSlides.length) : currentSlide--;
    };
};

