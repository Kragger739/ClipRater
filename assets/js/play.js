const slider = document.querySelector(".slider");

const stars = document.querySelectorAll(".fa-star")

const clips = ["ZV2WvJywqYU", "FYveFPaixRM", "6rDx7oeFnWg", "OcKHnu9d7JA", "dTyoOU82R38"]


function getAllSlides() {
    return document.querySelectorAll(".slides__slide");
};

const starsArray = Array.from(stars);

document.querySelector(".slider__button--left").addEventListener("click", moveLeft);
document.querySelector(".slider__button--right").addEventListener("click", moveRight);

const pauseBtn = document.querySelector(".slider__button--pause");

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

stars.forEach(star => {
    star.addEventListener("click", changeStarState);
});


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


function changeStarState(e) {
    const clickedStar = e.target;
    const clickedIndex = starsArray.indexOf(clickedStar);

    stars.forEach((star, index) => {
        if (index <= clickedIndex) {
            star.classList.remove("fa-regular");
            star.classList.add("fa-solid");
        } else {
            star.classList.add("fa-regular");
            star.classList.remove("fa-solid");
        }
    })

}
var player
const players = []
const numOfClips = clips.length

function createFrames() {
    for (let i = 0; i < numOfClips; i++) {
        player = new YT.Player('player' + i, {
            height: '390',
            width: '640',
            videoId: clips[i],
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
            }
        });
        players.push(player);
    }

}

createFrames()

function onPlayerReady(event) {
    event.target.setVolume(5)
    // event.target.playVideo();
}

//TODO: Make skip to new Video when video has ended
function onPlayerStateChange(event) {
    if (event.data === 0) {
        moveRight()
    }

}