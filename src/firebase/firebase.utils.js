import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCL1IOE54nUkfV-KoPtBuI6ooik9F72o6A",
  authDomain: "crown-db-61335.firebaseapp.com",
  databaseURL: "https://crown-db-61335.firebaseio.com",
  projectId: "crown-db-61335",
  storageBucket: "crown-db-61335.appspot.com",
  messagingSenderId: "665952061394",
  appId: "1:665952061394:web:a713683cecf7536f482a0b",
  measurementId: "G-XRF7NCZFKC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
