import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnzAvYy-pg7gZvbt7Sgzg4qXu_fvaQGmU",
  authDomain: "discord-clone-bb38d.firebaseapp.com",
  projectId: "discord-clone-bb38d",
  storageBucket: "discord-clone-bb38d.appspot.com",
  messagingSenderId: "428683408503",
  appId: "1:428683408503:web:f639483ee5d28158bb0272",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
