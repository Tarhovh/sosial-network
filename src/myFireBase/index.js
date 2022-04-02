import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDaTcGszQUQBGvzehp7dspQpYvk6On07L4",
  authDomain: "sosial-network-e2964.firebaseapp.com",
  projectId: "sosial-network-e2964",
  storageBucket: "sosial-network-e2964.appspot.com",
  messagingSenderId: "267114802245",
  appId: "1:267114802245:web:187c89edc13f60feb3c72c"
};

firebase.initializeApp(firebaseConfig);

const myFireStore = firebase.firestore();
// console.log(myFireStore)

export default myFireStore;