// login.js

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (validateEmail(email) && validatePassword(password)) {
        // Proceed with login logic (you can add authentication logic here)
        alert('Login successful');
    }
});

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        return true;
    } else {
        alert('Please enter a valid email address.');
        return false;
    }
}

// Function to validate password strength
function validatePassword(password) {
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) {
        alert('Password must be at least 8 characters long.');
        return false;
    }
    if (!uppercaseRegex.test(password)) {
        alert('Password must contain at least one uppercase letter.');
        return false;
    }
    if (!lowercaseRegex.test(password)) {
        alert('Password must contain at least one lowercase letter.');
        return false;
    }
    if (!numberRegex.test(password)) {
        alert('Password must contain at least one number.');
        return false;
    }
    if (!specialCharRegex.test(password)) {
        alert('Password must contain at least one special character.');
        return false;
    }

    return true;
}
