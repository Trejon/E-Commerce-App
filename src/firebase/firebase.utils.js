import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
  apiKey: "AIzaSyD2lfHq-YGNfBJvWb_fGmstdiMmvXdVFu0",
  authDomain: "crwn-db-84941.firebaseapp.com",
  databaseURL: "https://crwn-db-84941.firebaseio.com",
  projectId: "crwn-db-84941",
  storageBucket: "crwn-db-84941.appspot.com",
  messagingSenderId: "354340426976",
  appId: "1:354340426976:web:da0942c4dc5b70390eec85",
  measurementId: "G-FFDWJP3G97"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;