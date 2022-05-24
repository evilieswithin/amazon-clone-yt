import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWcZ1yOcm5rjMyV8PkTcU0M8IqsE5zX5s",
  authDomain: "amzn-2-yt-b0016.firebaseapp.com",
  projectId: "amzn-2-yt-b0016",
  storageBucket: "amzn-2-yt-b0016.appspot.com",
  messagingSenderId: "472828654427",
  appId: "1:472828654427:web:31ea91e3ae05bc1202a07e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
