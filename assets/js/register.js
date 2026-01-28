document.querySelector(".button").addEventListener("click", validateForm);

document.querySelector(".signupForm").addEventListener("focusout", validateForm)


function validateForm(event) {
    const injectRegex = /[;,:(){}[\]]/;
    event.preventDefault();
    clearErrors();

    let data = {}
    let valErrors = {}

    data.username = document.querySelector("#username").value;
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