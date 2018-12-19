import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC8eblyIxInCZhFPr6VhmhEnno8nimsedY",
  authDomain: "chatapp-e4910.firebaseapp.com",
  databaseURL: "https://chatapp-e4910.firebaseio.com",
  projectId: "chatapp-e4910",
  storageBucket: "chatapp-e4910.appspot.com",
  messagingSenderId: "118783034607"
};
firebase.initializeApp(config);

export default firebase;
