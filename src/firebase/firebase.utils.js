import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const config = {
    apiKey: "AIzaSyCO7SYADlcaSXUA-0mW7jF8njwCY3Rbwic",
    authDomain: "crwn-db-cd033.firebaseapp.com",
    databaseURL: "https://crwn-db-cd033.firebaseio.com",
    projectId: "crwn-db-cd033",
    storageBucket: "crwn-db-cd033.appspot.com",
    messagingSenderId: "16779371300",
    appId: "1:16779371300:web:67136cc52778de4137c9b1",
    measurementId: "G-5Y7QV31NB8"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;