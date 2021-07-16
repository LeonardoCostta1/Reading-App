
import * as firebase from 'firebase'

import 'firebase/firestore'


 var firebaseConfig = {
    apiKey: "AIzaSyC9iHhHM8q-hS8fPkc08fBJ7BSvSr11tnM",
    authDomain: "reading-3b231.firebaseapp.com",
    projectId: "reading-3b231",
    storageBucket: "reading-3b231.appspot.com",
    messagingSenderId: "1007218420265",
    appId: "1:1007218420265:web:0d28e685410bde9c524a38",
    measurementId: "G-WGLC7TQP53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


  export const database  = firebase.firestore()