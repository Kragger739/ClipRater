const timeline = gsap.timeline()


timeline.from(".infoCard", {
    opacity: 0,
    y: 200,
    duration: 1,
    ease: "power2.inOut",
    stagger: {
        amount: 0.5,
        grid: "auto",
    }
})

