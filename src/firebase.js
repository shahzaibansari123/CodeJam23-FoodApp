// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAVOvisbIRqKHiKcAigkXvINgO-kTqDoWg",
  authDomain: "codejam23foodapp.firebaseapp.com",
  projectId: "codejam23foodapp",
  storageBucket: "codejam23foodapp.appspot.com",
  messagingSenderId: "84735532636",
  appId: "1:84735532636:web:10af34ab7bd4101c8d1099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase();
// export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);