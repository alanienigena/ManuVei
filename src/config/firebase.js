import  firebase from "firebase"
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyCtDhaovqbdHrfE8iF17okZsdCBHt3rXP4",
    authDomain: "task-f9d4b.firebaseapp.com",
    projectId: "task-f9d4b",
    storageBucket: "task-f9d4b.appspot.com",
    messagingSenderId: "1014130139804",
    appId: "1:1014130139804:web:200860e57f2c24666e0359"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;