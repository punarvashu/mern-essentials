import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDZ9uz8r86aOpme1-7eKRXZS46UZRztobk",
    authDomain: "facebook-clone-49709.firebaseapp.com",
    projectId: "facebook-clone-49709",
    storageBucket: "facebook-clone-49709.appspot.com",
    messagingSenderId: "805503145472",
    appId: "1:805503145472:web:cd1303a315a638e0ab2ae5",
    measurementId: "G-NJQW8QXQVK",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;