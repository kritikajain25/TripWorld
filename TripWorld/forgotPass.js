// script.js
document
  .getElementById("forgotPasswordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    // Clear previous messages
    message.textContent = "";
    message.style.color = "red";

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      message.textContent = "Email field cannot be empty.";
      return;
    }

    if (!emailRegex.test(email)) {
      message.textContent = "Please enter a valid email address.";
      return;
    }

    // Simulate password reset request
    message.style.color = "green";
    message.textContent = "Password reset link has been sent to your email.";
    this.reset(); // Clear the form
  });
