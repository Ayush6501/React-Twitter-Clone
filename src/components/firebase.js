import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDEhiwev5SPJTARu6bEuPPZk89rQRV91YY",
    authDomain: "react-twitter-clone-a6501.firebaseapp.com",
    projectId: "react-twitter-clone-a6501",
    storageBucket: "react-twitter-clone-a6501.appspot.com",
    messagingSenderId: "793247628744",
    appId: "1:793247628744:web:7f1065d572febc776154fd",
    measurementId: "G-T0YPWN4C1G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;

firebase.analytics();
