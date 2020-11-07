//1.install firebase and then import this module to use it.
/*We will be using two Firebase services for this project :
1.Authentication service
2. Cloud Firestore Service */
import firebase from "firebase";

//2.Firebase config object we grabbed earlier
const firebaseConfig = {
    apiKey: "AIzaSyACYf_GypbfEk_sRZIMKoAHt1ArL7hlBl4",
    authDomain: "discord-clone-cfbde.firebaseapp.com",
    databaseURL: "https://discord-clone-cfbde.firebaseio.com",
    projectId: "discord-clone-cfbde",
    storageBucket: "discord-clone-cfbde.appspot.com",
    messagingSenderId: "24290841655",
    appId: "1:24290841655:web:f528622feb23a572359bb2"
  };
  //3.intialize our firebase App using the configuration details we got from firebase
  //We have firebase.intializeApp method for intilizing App
  /*The function initializeApp will create the firebase app and 
  firestore enables you to write to the database. */ 
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //4.grab the database
  const db=firebaseApp.firestore();
 //5.do authentication
/* Auth enables the authentication so when a user logs in it adds it to Firebase. 
 Provider enables you to sign in using your Google Account. */
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;