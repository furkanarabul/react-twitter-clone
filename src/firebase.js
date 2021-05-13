import 'firebase/database';
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCc-vxGjBXpaeEp2sy9HBxOHX82BzsdqGg",
    authDomain: "react-twitter-clone-a8713.firebaseapp.com",
    projectId: "react-twitter-clone-a8713",
    storageBucket: "react-twitter-clone-a8713.appspot.com",
    messagingSenderId: "434197406493",
    appId: "1:434197406493:web:dda6643816a483a36277f4",
    measurementId: "G-Q9RGMR5W6V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db=firebase.firestore()
  export default db;