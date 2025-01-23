const firebaseConfig = {
  apiKey: "AIzaSyBJJRfaCFY7KR9XUuV_yI64yWLaytQ2hnQ",
  authDomain: "booknow-bbb34.firebaseapp.com",
  databaseURL: "https://booknow-bbb34-default-rtdb.firebaseio.com",
  projectId: "booknow-bbb34",
  storageBucket: "booknow-bbb34.firebasestorage.app",
  messagingSenderId: "913708167968",
  appId: "1:913708167968:web:bb0c60e2359ccd50429d45",
  measurementId: "G-QSXLV33RDE",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference for db
var bookNowDB = firebase.database().ref("bookNow");
document.getElementById("bookingForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var contact = getElementVal("contact");
  var email = getElementVal("email");
  var cab_yes = getElementVal("cab_yes");
  var cab_no = getElementVal("cab_no");

  // console.log(name, contact, email, cab_yes, cab_no);

  saveMessages(name, contact, email, cab_yes, cab_no);
}

const saveMessages = (name, contact, email, cab_yes, cab_no) => {
  var newbookNow = bookNowDB.push();

  newbookNow.set({
    name: name,
    contact: contact,
    email: email,
    cab_yes: cab_yes,
    cab_no: cab_no,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Show success message
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("hidden");

    // Optionally, reset the form
    this.reset();

    // Hide QR payment section
    document.getElementById("qrPayment").classList.add("hidden");
  });

document.getElementById("payment").addEventListener("change", function () {
  const qrPayment = document.getElementById("qrPayment");
  if (this.value === "online") {
    qrPayment.classList.remove("hidden");
  } else {
    qrPayment.classList.add("hidden");
  }
});
