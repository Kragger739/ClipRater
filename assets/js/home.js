const words = ["PLAY","RATE","CLIMB","WIN"]

gsap.to("#cursor", {opacity: 0, repeat: -1, yoyo: true, duration: 0.5, ease:"power2.inOut"})

let tlMaster = gsap.timeline({repeat: -1})

words.forEach((word => {
    let tlText = gsap.timeline({repeat: 1, yoyo: true})
    tlText.to("#animatedText", {duration: 1.5, text: word})
    tlMaster.add(tlText)
}))