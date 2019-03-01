import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB35apiwRzurbwgK47HavC3uT4YUlkAHsM",
  authDomain: "know-your-government-35104.firebaseapp.com",
  databaseURL: "https://know-your-government-35104.firebaseio.com",
  projectId: "know-your-government-35104",
  storageBucket: "know-your-government-35104.appspot.com",
  messagingSenderId: "690763001616"
};

firebase.initializeApp(config);

export default firebase;