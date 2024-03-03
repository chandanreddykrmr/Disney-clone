import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdRPiBB42jtw3JdZKUvb1hWW7q2x_YLQw",
  authDomain: "disneyplus-clone-eafcc.firebaseapp.com",
  projectId: "disneyplus-clone-eafcc",
  storageBucket: "disneyplus-clone-eafcc.appspot.com",
  messagingSenderId: "188341812446",
  appId: "1:188341812446:web:041baadcd3cea06ba3d64f",
  measurementId: "G-XL36GQ8ZMG",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
