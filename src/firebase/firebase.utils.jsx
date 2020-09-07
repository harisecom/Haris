import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwm4sXwviG8hEVdnlt1CmL5Biq_BFgVWs",
    authDomain: "haris-db.firebaseapp.com",
    databaseURL: "https://haris-db.firebaseio.com",
    projectId: "haris-db",
    storageBucket: "haris-db.appspot.com",
    messagingSenderId: "61531083651",
    appId: "1:61531083651:web:e7a109d7e85b32b0bb1cb6",
    measurementId: "G-YY6QJJLTHR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;