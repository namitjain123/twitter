import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFlgzilh9FjdANwcXmKTijgbfXdn7Rhb8",
    authDomain: "twitter-clone-b90a0.firebaseapp.com",
    projectId: "twitter-clone-b90a0",
    storageBucket: "twitter-clone-b90a0.appspot.com",
    messagingSenderId: "413400373062",
    appId: "1:413400373062:web:76c67665302e87ad337747",
    measurementId: "G-MKPJ7K77DG"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore();
  export default db;