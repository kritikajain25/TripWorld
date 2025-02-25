let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnIneraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const sendBtn = document.getElementById("send-btn");
const statusText = document.getElementById("status");
const messageBox = document.getElementById("message");

sendBtn.addEventListener("click", () => {
  statusText.textContent = "Fetching location...";
  sendBtn.disabled = true;

  if (!navigator.geolocation) {
    statusText.textContent = "Geolocation is not supported by your browser.";
    sendBtn.disabled = false;
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const message = messageBox.value.trim();

      if (!message) {
        statusText.textContent = "Please enter a message.";
        sendBtn.disabled = false;
        return;
      }

      // Simulated sending (log to console)
      console.log({
        message: message,
        location: `https://www.google.com/maps?q=${latitude},${longitude}`,
      });

      // Display success message
      statusText.textContent = "Report sent successfully!";
      sendBtn.disabled = false;

      // Clear message box
      messageBox.value = "";
    },
    (error) => {
      statusText.textContent = `Error: ${error.message}`;
      sendBtn.disabled = false;
    }
  );
});
