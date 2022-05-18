// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKdbTV7gacO685i0SkYW50mDeq4UUU6tI",
  authDomain: "verification-6649f.firebaseapp.com",
  projectId: "verification-6649f",
  storageBucket: "verification-6649f.appspot.com",
  messagingSenderId: "492859195508",
  appId: "1:492859195508:web:0d900460675c86a2729121",
  measurementId: "G-7CGVMZKF3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;