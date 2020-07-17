import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBrDG1NhJ5tYd5sDQCayncgltqOW5GMWCo",
    authDomain: "esteem-books-43455.firebaseapp.com",
    databaseURL: "https://esteem-books-43455.firebaseio.com",
    projectId: "esteem-books-43455",
    storageBucket: "esteem-books-43455.appspot.com",
    messagingSenderId: "181432991690",
    appId: "1:181432991690:web:22b399c2766cc508115933",
    measurementId: "G-BFWBG1GYK0"
  };


// let firestore = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

firebase.initializeApp(firebaseConfig)

export default firebase;