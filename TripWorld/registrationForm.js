const firebaseConfig = {
  apiKey: "AIzaSyADGeHWwnvB3mBj-Ly843jGhUzEBFd250U",
  authDomain: "registernow-9dd19.firebaseapp.com",
  databaseURL: "https://registernow-9dd19-default-rtdb.firebaseio.com",
  projectId: "registernow-9dd19",
  storageBucket: "registernow-9dd19.firebasestorage.app",
  messagingSenderId: "797938049592",
  appId: "1:797938049592:web:b7d643d72ae8bc8c503ccd",
  measurementId: "G-MDBL1LKDNF",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference for db
var registerNowDB = firebase.database().ref("registerNow");
document
  .getElementById("registrationForm")
  .addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var username = getElementVal("username");
  var email = getElementVal("email");
  var password = getElementVal("password");
  var confirmPassword = getElementVal("confirmPassword");

  console.log(username, email, password, confirmPassword);

  saveMessages(username, email, password, confirmPassword);
}

const saveMessages = (username, email, password, confirmPassword) => {
  var newregisterNow = registerNowDB.push();

  newregisterNow.set({
    username: username,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();
    const message = document.getElementById("message");

    // Clear previous message
    message.textContent = "";

    // Validate fields
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      message.textContent = "All fields are required.";
      return;
    }

    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match.";
      return;
    }

    if (password.length < 6) {
      message.textContent = "Password must be at least 6 characters long.";
      return;
    }

    message.style.color = "green";
    message.textContent = "Registration successful!";
    this.reset(); // Clear the form
  });
