
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    projectId: "react-icbf",
    messagingSenderId: "232192285568",
    storageBucket: "react-icbf.appspot.com",
    authDomain: "react-icbf.firebaseapp.com",
    apiKey: "AIzaSyC2PS90hVAMPkwFrFscJhRZ_tNcLE2nCIA",
    appId: "1:232192285568:web:da2b485b381634dd05bf65"
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(firebaseApp);