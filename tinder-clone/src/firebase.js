import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB79hDRjH7QRgvRHrzsSVNFku819kckCZ4",
    authDomain: "tinder-clone-7278b.firebaseapp.com",
    projectId: "tinder-clone-7278b",
    storageBucket: "tinder-clone-7278b.appspot.com",
    messagingSenderId: "561061301263",
    appId: "1:561061301263:web:bfa3c2d2871eae2c9a677a",
    measurementId: "G-TCZHR5SDVW"
  };
  
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;