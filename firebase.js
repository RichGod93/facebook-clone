import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// import { app } from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZ306tIDtI8KdzPq793LlAHWaYMcMoUNo",
  authDomain: "facebook-1-yt.firebaseapp.com",
  projectId: "facebook-1-yt",
  storageBucket: "facebook-1-yt.appspot.com",
  messagingSenderId: "610103499608",
  appId: "1:610103499608:web:97f6c96d08eefb66aa232d",
};

// check if the app is already rendered and initialized
// if the app is, then initialize it
// but if it is not, use the existing app

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
