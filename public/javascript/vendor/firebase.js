import firebase from "firebase/app";
import "firebase/database";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA81DPqlR9t4vU1gVLKYRYX_ug-KRVU9qc",
  authDomain: "questionnaire-9648c.firebaseapp.com",
  projectId: "questionnaire-9648c",
  storageBucket: "questionnaire-9648c.appspot.com",
  messagingSenderId: "620056134956",
  appId: "1:620056134956:web:1a555f06505670ae2ad889",
  measurementId: "G-39SEPB46GS"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);