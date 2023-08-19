else if (passwordInput.value.length < 8 || !/[!@#$%^&*()\-_=+{};:,<.>]/.test(passwordInput.value)) {
    event.preventDefault();
    alert('Password should be at least 8 characters long and contain at least one special character.');
}
