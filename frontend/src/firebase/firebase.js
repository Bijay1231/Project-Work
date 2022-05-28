import firebase from 'firebase';

// var firebaseConfig = {
//   apiKey: "AIzaSyClxm5pJLb4QRV3qK2C0A3FO9hg1fH9DbI",
//   authDomain: "otp-varification-5af54.firebaseapp.com",
//   projectId: "otp-varification-5af54",
//   storageBucket: "otp-varification-5af54.appspot.com",
//   messagingSenderId: "473925692677",
//   appId: "1:473925692677:web:2dd37f96336874a5765b6c"
// };
var firebaseConfig = {
    apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
    authDomain: "myapp-project-123.firebaseapp.com",
    databaseURL: "https://myapp-project-123.firebaseio.com",
    projectId: "myapp-project-123",
    storageBucket: "myapp-project-123.appspot.com",
    messagingSenderId: "65211879809",
    appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
    measurementId: "G-8GSGZQ44ST"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
