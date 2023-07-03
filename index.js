// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA7ps914SuUOrZN_lsX53DRT9IJ-NnEpeQ",
    authDomain: "resume-parser-3c11a.firebaseapp.com",
    projectId: "resume-parser-3c11a",
    storageBucket: "resume-parser-3c11a.appspot.com",
    appId: "1:387093775200:web:3a92de42d1bd1ba6701405",
};
firebase.initializeApp(firebaseConfig);


document.querySelector("form").addEventListener("submit", function (e) {
e.preventDefault(); // Prevent form submission


function alertfunction(e) {
    alert(e);
  }


var fileInput = document.getElementById("file-input");
var file = fileInput.files[0];


if (file.type !== "application/pdf") {
    alertfunction("Invalid file type. Please select a PDF file.");
    return;
  }


var storageRef = firebase.storage().ref();
var fileRef = storageRef.child(file.name);


fileRef
  .put(file)
  .then(function (snapshot) {
   alertfunction("Upload Successful!");
    // Do something after successful upload
  })
  .catch(function (error) {
   alertfunction("Upload Unsuccessful");
    // Handle error during upload
  });
});
