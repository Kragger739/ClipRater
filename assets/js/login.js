document.querySelector(".button").addEventListener("click", validateForm);

document.querySelector(".signupForm").addEventListener("focusout", validateForm)


function validateForm(event) {
    const injectRegex = /[;,:(){}[\]]/;
    event.preventDefault();
    clearErrors();

    let data = {}

    let valErrors = {}

    data.salutation = document.querySelector("#salutation").value;
    data.firstName = document.querySelector("#firstName").value;
    data.lastName = document.querySelector("#lastName").value;
    data.email = document.querySelector("#email").value;
    data.region = document.querySelector("#region").value;
    data.city = document.querySelector("#city").value;
    data.address = document.querySelector("#address").value;
    data.plz = document.querySelector("#plz").value;

    if (!data.salutation) {
        valErrors.salutation = "Salutation is required";
    } else if (data.salutation.lenght <= 2) {
        valErrors.salutation = "Salutation must be at least 2 characters long";
    } else if (injectRegex.test(data.salutation)) {
        valErrors.salutation = "invalid input"
    }

    if (!data.firstName) {
        valErrors.firstName = "First name is required";
    } else if (data.firstName.lenght <= 2) {
        valErrors.firstName = "First name must be at least 3 characters long";
    } else if (injectRegex.test(data.firstName)) {
        valErrors.firstName = "invalid input"
    }

    if (!data.lastName) {
        valErrors.lastName = "Last name is required";
    } else if (data.lastName.lenght <= 2) {
        valErrors.lastName = "Last name must be at least 3 characters long";
    } else if (injectRegex.test(data.lastName)) {
        valErrors.lastName = "invalid input"
    }



    if (!data.email) {
        valErrors.email = "email is required";
    } else {
        const emailRegex = /^[^\s@;:,"`]+@[^\s@;:,"`]+\.[^\s@;:,"`]+$/;
        if (!emailRegex.test(data.email)) {
            valErrors.email = "invalid email address"
        } else if (!injectRegex.test(data.email)) {
            valErrors.email = "invalid input"
        }
    }

    if (!data.region) {
        valErrors.region = "region is required";
    } else {
        if (injectRegex.test(data.region)) {
            valErrors.region = "invalid input"
        }
    }


    if (!data.city) {
        valErrors.city = "City is required";
    } else {
        if (injectRegex.test(data.city)) {
            valErrors.city = "invalid input"
        }
    }


    if (!data.address) {
        valErrors.address = "address is required";
    } else {
        if (injectRegex.test(data.address)) {
            valErrors.address = "invalid input"
        }
    }

    if (!data.plz) {
        valErrors.plz = "plz is required";
    } else {
        const plzRegex = /^\d{4}$/;
        if (!plzRegex.test(data.plz)) {
            valErrors.plz = "invalid plz"
        } else if (injectRegex.test(data.plz)) {
            valErrors.plz = "invalid input"
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