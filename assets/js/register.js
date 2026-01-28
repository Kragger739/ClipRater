let valErrors = {};

let profile = [];

const username = document.querySelector("#username")

document.querySelector(".button").addEventListener("click", (event) => {
    validateForm(event);
    saveData();
});

document.querySelector(".signupForm").addEventListener("focusout", validateForm)


function validateForm(event) {
    const injectRegex = /[;,:(){}[\]]/;
    event.preventDefault();
    clearErrors();

    let data = {}
    valErrors = {};

    data.username = username.value;
    data.password = document.querySelector("#password").value;
    data.email = document.querySelector("#email").value;

    const triggerField = event.target.id;

    if (triggerField === "username" || event.type === "click") {
        if (!data.username) {
            valErrors.username = "Username is required";
        } else if (data.username.length <= 2) {
            valErrors.username = "Username must be at least 3 characters long";
        } else if (injectRegex.test(data.username)) {
            valErrors.username = "invalid input"
        }
    }

    if (triggerField === "password" || event.type === "click") {
        if (!data.password) {
            valErrors.password = "Password is required";
        } else if (data.password.length <= 2) {
            valErrors.password = "Password must be longer than 3 characters";
        } else if (injectRegex.test(data.password)) {
            valErrors.password = "invalid input"
        }
    }



    if (triggerField === "email" || event.type === "click") {
        if (!data.email) {
            valErrors.email = "email is required";
        } else {
            const emailRegex = /^[^\s@;:,"`]+@[^\s@;:,"`]+\.[^\s@;:,"`]+$/;
            if (!emailRegex.test(data.email)) {
                valErrors.email = "invalid email address"
            } else if (injectRegex.test(data.email)) {
                valErrors.email = "invalid input"
            }
        }
    }

    if (Object.keys(valErrors).length === 0) {
        //no errors
    } else {
        displayErrors(valErrors)
    }

}


function displayErrors(errors) {
    for (const field in errors) {
        const inputField = document.querySelector(`#${field}`);
        const errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        errorSpan.textContent = errors[field];
        inputField.after(errorSpan);
    };
};


function clearErrors() {
    document.querySelectorAll("span.error-message").forEach(element => {
        element.remove()
    }
    )
}

function saveData() {
    const savedUsername = localStorage.getItem("profile")

    if (Object.keys(valErrors).length === 0) {
        const newEntry = username.value.trim()
        console.log("Trying to save Data...")

        if (newEntry !== "") {
            const profileData = {
                username: newEntry
            }
            if (savedUsername === null) {
                profile.push(profileData)
                localStorage.setItem("profile", JSON.stringify(profile))
                console.log("%c✅ New profile saved!", "color: #22c55e; font-weight: bold; font-size: 14px;")
            } else {
                console.error(console.error("⚠️ Profile already exists"))
            }

        }


    }
}