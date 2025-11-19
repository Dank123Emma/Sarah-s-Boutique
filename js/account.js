// Toggle login and signup forms
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const showLoginBtn = document.getElementById("show-login");
const showSignupBtn = document.getElementById("show-signup");

// Toggle forms
showLoginBtn.addEventListener("click", () => {
    loginForm.style.display = "flex";
    signupForm.style.display = "none";
    showLoginBtn.classList.add("active");
    showSignupBtn.classList.remove("active");
});
showSignupBtn.addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "flex";
    showSignupBtn.classList.add("active");
    showLoginBtn.classList.remove("active");
});

// Handle signup
signupForm.addEventListener("submit", function(e){
    e.preventDefault();
    const name = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    // Save user in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if(users.find(u => u.email === email)){
        alert("User already exists. Please login.");
        return;
    }
    users.push({name, email, password});
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sign Up successful! Please login.");
    // Switch to login form
    showLoginBtn.click();
});

// Handle login
loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if(user){
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("Invalid email or password.");
    }
});


// Handle logout
const logoutBtn = document.getElementById("logout-btn");
if(logoutBtn){
    logoutBtn.addEventListener("click", function(){
        localStorage.removeItem("currentUser");
        window.location.href = "account.html"; // Redirect to account page
    });
}
// Display user info on account page
const userInfo = document.getElementById("user-info");
if(userInfo){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if(currentUser){
        userInfo.innerHTML = `<h2>Welcome, ${currentUser.name}</h2>
        <p>Email: ${currentUser.email}</p>`;
    } else {
        window.location.href = "account.html"; // Redirect to account page
    }
}
