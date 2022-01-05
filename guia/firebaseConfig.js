// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5C5qqoGOXs28ht_frNU4XdqJrR9URcPE",
  authDomain: "orquestapuntacana.firebaseapp.com",
  projectId: "orquestapuntacana",
  storageBucket: "orquestapuntacana.appspot.com",
  messagingSenderId: "196404464243",
  appId: "1:196404464243:web:55dfa339590a2bc4ba3806",
  measurementId: "G-PMHWYG2MZX",

  // apiKey: process.env.VUE_APP_APIKEY,
  // authDomain: process.env.VUE_APP_AUTHDOMAIN,
  // databaseURL: process.env.VUE_APP_DATABASEURL,
  // projectId: process.env.VUE_APP_PROJECTID,
  // storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  // appId: process.env.VUE_APP_APPID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
