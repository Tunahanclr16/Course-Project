import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBMoLAyQYNdEjoU1OfEXnjRoamGSaHDUPw",
  authDomain: "course-2c1cc.firebaseapp.com",
  projectId: "course-2c1cc",
  storageBucket: "course-2c1cc.appspot.com",
  messagingSenderId: "716565617045",
  appId: "1:716565617045:web:fb0b84588b37862920be9c",
  measurementId: "G-6PWR18MPZT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

