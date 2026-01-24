const leaderboard = document.querySelector(".leaderboard2")

async function getData() {

    try {
        const response = await fetch("users.json")
        const data = await response.json();

        console.log(data)


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
            <h2>${entry.userRating}</h2>
            </figcaption>
        `

            leaderboardEntry.innerHTML = template
            leaderboard.append(leaderboardEntry)
        });
    } catch (error) {
        console.error(error)
    }
}

getData();
