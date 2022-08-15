import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCGnmwKskDEvZUT2RUr-OtnDKOQvF5h_sg",
  authDomain: "instagram-clone-a134f.firebaseapp.com",
  projectId: "instagram-clone-a134f",
  storageBucket: "instagram-clone-a134f.appspot.com",
  messagingSenderId: "946312372593",
  appId: "1:946312372593:web:a5b9b61c054eb58c5bd6d0",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log("firebase, ", firebase);
console.log("hello");
export { firebase, FieldValue };
