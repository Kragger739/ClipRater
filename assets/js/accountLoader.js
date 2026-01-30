let currentAccount = []

currentAccount = JSON.parse(localStorage.getItem("profile"))

loadAccount()


function loadAccount() {

    const profileContainer = document.querySelector("body")

    if (currentAccount == null) {
        console.log("No account created")
    } else {
        const profileCard = document.createElement("div")
        profileCard.classList.add("profileContainer")

        profileCard.innerHTML = `
        <figure class="floatingCard glass" aria-label="Profile card">
            <img src="https://picsum.photos/320/200?random=42" alt="User avatar">
            <figcaption>
                <strong>${currentAccount[0].username}</strong><br>
                <small>Short subtitle</small>
            </figcaption>
        </figure>`
        console.log("name loaded")
        profileContainer.appendChild(profileCard)
    }
}