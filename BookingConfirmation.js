const bookNowButton = document.getElementById("bookNowButton");
bookNowButton.addEventListener("click", function () {
    alert("Your booking has been successfully confirmed!");
    window.location.href = "BookingConfirmation.html";
});

function isUserSignedIn() {
    return sessionStorage.getItem('userSignedIn') === 'true'; 
}
function redirectToSignIn() {
    window.location.href = '/signin';
}

