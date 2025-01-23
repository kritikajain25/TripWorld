// script.js
document
  .getElementById("sendLocationBtn")
  .addEventListener("click", function () {
    const statusDiv = document.getElementById("status");

    // Check if geolocation is supported/enabled
    if (!navigator.geolocation) {
      statusDiv.textContent = "Geolocation is not supported by your browser.";
      return;
    }

    // Show status while getting location
    statusDiv.textContent = "Getting your location...";

    // Get location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Email content setup (use EmailJS or a backend service)
        const emailBody = `
        My current location:
        Latitude: ${latitude}
        Longitude: ${longitude}
        Link: https://www.google.com/maps?q=${latitude},${longitude}
      `;

        // Example using EmailJS
        sendEmail(emailBody);

        // Update status
        statusDiv.textContent = "Location sent successfully!";
      },
      (error) => {
        statusDiv.textContent = `Error getting location: ${error.message}`;
      }
    );
  });

// Function to send email (replace with your service integration)
function sendEmail(content) {
  // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' with your EmailJS credentials
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      message: content,
    })
    .then(
      () => alert("Email sent successfully!"),
      (error) => alert(`Failed to send email: ${error}`)
    );
}
