import firebase from 'firebase/app';
// firebaseの認証機能を使います宣言。今回は使わないかも
// import 'firebase/auth';
// firebaseのデータベースを使います宣言。
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCC8Mwz6Z_7OaWvYdwnmqg2RuWzZ5-N3NQ",
    authDomain: "questionnaire-hinokuma.firebaseapp.com",
    projectId: "questionnaire-hinokuma",
    storageBucket: "questionnaire-hinokuma.appspot.com",
    messagingSenderId: "769739956554",
    appId: "1:769739956554:web:ab6272ac8db9771384a1b3",
    measurementId: "G-ETVJRRPSNY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;
// export const auth = firebase.auth();
export const db = firebase.firestore();