import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAtz3k6WKn6U9U6LnX5fGrkw7BXdDpsNHM",
  authDomain: "fir-1fbdd.firebaseapp.com",
  databaseURL: "https://fir-1fbdd.firebaseio.com",
  projectId: "fir-1fbdd",
  storageBucket: "fir-1fbdd.appspot.com",
  messagingSenderId: "720113323931",
  appId: "1:720113323931:web:970bb9e2d99eb139f0db3e",
  measurementId: "G-0J1GX3YFXX",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
