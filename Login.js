
const accounts = [
    { email: "admin@gmail.com", password: "jaydarwin@", role: "admin" },
    { email: "johnmarkinramos@gmail.com", password: "09483405224", role: "user" },
    { email: "javierleunice@gmail.com", password: "09100256299", role: "user" },
    { email: "fritziecabrerasiador@gmail.com", password: "09318980224", role: "user" },
    { email: "aegellizarte2606@gmail.com", password: "09854709646", role: "user" },
    { email: "mackahronmasangkay@gmail.com", password: "09483440695", role: "user" },
    { email: "dannydeleon432@gmail.com", password: "09632213239", role: "user" },
    { email: "jamillamhae17@gmail.com", password: "09637287860", role: "user" },
    { email: "markangelocorpuz96@gmail.com", password: "09815804253", role: "user" }
];
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value.trim().toLowerCase(); 
    const password = document.getElementById('password').value;
    const account = accounts.find(acc => acc.email.toLowerCase() === email && acc.password === password);
    if (account) {
        alert("Login successful!");
        window.location.href = "InsightPulse.html"; 
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
