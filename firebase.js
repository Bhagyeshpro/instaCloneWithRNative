import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1WYUBi5WDuUmO8iayk3CSx3H1tfKY9d0",
  authDomain: "instaclone-by-mihir.firebaseapp.com",
  projectId: "instaclone-by-mihir",
  storageBucket: "instaclone-by-mihir.appspot.com",
  appId: "1:242207743788:web:dc5731e451e2c44d9c9689",
  messagingSenderId: "242207743788",
  measurementId: "G-05QHX0FMVK",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
