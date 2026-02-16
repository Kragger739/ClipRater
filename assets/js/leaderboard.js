const leaderboard = document.querySelector(".leaderboard")

async function getData() {
    try {
        const response = await fetch("users.json")
        const data = await response.json();

        leaderboard.innerHTML = ""

        const sortedUsers = [...data].sort(
            (a, b) => b.userRating - a.userRating
        );


        sortedUsers.forEach(entry => {

            const leaderboardEntry = document.createElement("figcaption")
            const template = `
            <figcaption class="userCard">
            <img src="${entry.userImg}" alt="profile Image">
            <h2>${entry.username}</h2>
            <div class="tags">${entry.tags.map(tag => `<span style="margin-left: 10px;">${tag}</span>`).join('')}</div>
            <h2>${entry.userRating}</h2>
            </figcaption>
        `

            leaderboardEntry.innerHTML = template
            leaderboard.append(leaderboardEntry)
            console.log(entry.tags)
        });
    } catch (error) {
        console.error(error)
    }
}

getData();



gsap.from(".leaderboard", {
    opacity: 0,
    y: 200,
    duration: 1,
    ease: "power2.inOut",
})