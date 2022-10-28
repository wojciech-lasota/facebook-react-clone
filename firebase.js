import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA06DxaD0vSlCtJros5TNN2P8ZbKAL2Rtg",
  authDomain: "facebook2-2-yt.firebaseapp.com",
  projectId: "facebook2-2-yt",
  storageBucket: "facebook2-2-yt.appspot.com",
  messagingSenderId: "690706013561",
  appId: "1:690706013561:web:5a1c0c31b8b5b18ad623a8",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();
export { db, storage };
