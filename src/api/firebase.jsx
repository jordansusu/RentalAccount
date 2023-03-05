import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9WlTOSUHOZNIzFYj0q70uj5UatVzP1UQ",
  authDomain: "rentalaccount-39d8f.firebaseapp.com",
  projectId: "rentalaccount-39d8f",
  storageBucket: "rentalaccount-39d8f.appspot.com",
  messagingSenderId: "470997503311",
  appId: "1:470997503311:web:306f3fe6d46040a9f5c93a",
  measurementId: "G-3B5S75CXY0"
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase