import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyC8g1c94PM6_5zTqjeeONTRLuVVCSaP3Ak",
    authDomain: "news-40f69.firebaseapp.com",
    databaseURL: "https://news-40f69.firebaseio.com",
    projectId: "news-40f69",
    storageBucket: "news-40f69.appspot.com",
    messagingSenderId: "948523848797",
    appId: "1:948523848797:web:0a65928aaee6afbf9fe9b4",
    measurementId: "G-PKS37JL5Q2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({})


  export default firebase