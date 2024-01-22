// JavaScript for password validation
function validatePassword() {
    var password = document.getElementById("password").value;

    // Check if the password meets the criteria
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    // Check if the password contains a capital letter
    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one capital letter.");
        return false;
    }

    // Check if the password contains a small letter
    if (!/[a-z]/.test(password)) {
        alert("Password must contain at least one small letter.");
        return false;
    }

    // Check if the password contains a number
    if (!/\d/.test(password)) {
        alert("Password must contain at least one number.");
        return false;
    }

    // Check if the password contains a special character
    if (!/[@$!%*?&]/.test(password)) {
        alert("Password must contain at least one special character (@ $ ! % * ? &).");
        return false;
    }

    // If all criteria are met, return true
    return true;
}
