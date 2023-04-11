
document.addEventListener("DOMContentLoaded", function() {
    const password = document.getElementById("password");
    const confirmpassword = document.getElementById("confirmpassword");
    const error = document.getElementById("error");
    confirmpassword.addEventListener("input", (event) => {
        const confirmPasswordValue = event.target.value;
        const passwordValue = password.value;
        console.log(error);
        if (confirmPasswordValue !== passwordValue) {
            confirmpassword.setCustomValidity("*Passwords do not match");
            password.setCustomValidity("*Passwords do not match");
            error.textContent = "*Passwords do not match";
        } else {
            confirmpassword.setCustomValidity("");
            password.setCustomValidity("");
            error.textContent = "";
        }
    });

    password.addEventListener("input", (event) => {
        const confirmPasswordValue = confirmpassword.value;
        const passwordValue = event.target.value;
        console.log("here pass")
        console.log(error);

        if (confirmPasswordValue !== passwordValue) {
            confirmpassword.setCustomValidity("*Passwords do not match");
            password.setCustomValidity("*Passwords do not match");
            error.textContent = "*Passwords do not match";
        } else {
            console.log("match")
            confirmpassword.setCustomValidity("");
            password.setCustomValidity("");
            error.textContent = "";
        }
    });
});