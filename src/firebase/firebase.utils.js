import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.error('error creating user', err.message);
        }
    }
    return userRef;
} 



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;