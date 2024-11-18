function signup() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match! Please try again.");
        return;
    }
    const termsAccepted = document.getElementById("terms").checked;
    if (!termsAccepted) {
        alert("You must agree to the Terms and Conditions to continue.");
        return;
    }
    alert("Successful Registered Account!");
    window.location.href = "login.html";
}
