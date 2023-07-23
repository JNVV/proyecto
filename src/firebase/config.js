// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCe4sy0KvQp7k25E-WFIe5NCzxU6i8eU94",
//   authDomain: "proyecto-a0951.firebaseapp.com",
//   projectId: "proyecto-a0951",
//   storageBucket: "proyecto-a0951.appspot.com",
//   messagingSenderId: "955031734079",
//   appId: "1:955031734079:web:5c7b60cb027f79c117758a"
// };
const firebaseConfig = {
  apiKey: "AIzaSyC_1urlvVkNzIA_5oPBLHRihivEzduXUC8",
  authDomain: "testing-journalapp-b5b77.firebaseapp.com",
  projectId: "testing-journalapp-b5b77",
  storageBucket: "testing-journalapp-b5b77.appspot.com",
  messagingSenderId: "80225133970",
  appId: "1:80225133970:web:e8e3077a36201e87364d4b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth();
export const FirebaseDB = getFirestore(FirebaseApp);