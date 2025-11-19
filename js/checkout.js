document.getElementById("checkout-form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
});
// Additional functionality can be added here if needed

// For example, validating form inputs before submission
function validateForm() {
    // Add validation logic here
    return true; // Return false if validation fails
}

document.getElementById("checkout-form").addEventListener("submit", function(e){
    if (!validateForm()) {
        e.preventDefault();
        alert("Please fill out all required fields.");
    }
});


