import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyBHXjSHNOxO5-pw6CgXroKO3dLBxLXJ5dA",
    authDomain: "innovation-ef3ef.firebaseapp.com",
    databaseURL: "https://innovation-ef3ef.firebaseio.com",
    projectId: "innovation-ef3ef",
    storageBucket: "innovation-ef3ef.appspot.com",
    messagingSenderId: "934741543864",
    appId: "1:934741543864:web:4fca26fcaf67b35f399d4d",
    measurementId: "G-PE6PVPMVHD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  export default firebase