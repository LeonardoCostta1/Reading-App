import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC9iHhHM8q-hS8fPkc08fBJ7BSvSr11tnM",
    authDomain: "reading-3b231.firebaseapp.com",
    projectId: "reading-3b231",
    storageBucket: "reading-3b231.appspot.com",
    messagingSenderId: "1007218420265",
    appId: "1:1007218420265:web:0d28e685410bde9c524a38",
    measurementId: "G-WGLC7TQP53"
  };
  // Initialize Firebase
  if (firebase.apps.length === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
  }
  
  export default Firebase;

  // firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  // export const database  = firebase.firestore()
  // export const auth  = firebase.auth()

