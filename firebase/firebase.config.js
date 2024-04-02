import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaNYbf2au0PoPlzGJeiV9CxmC7_nfXqQg",
    authDomain: "auth-moha-milon-e3c75.firebaseapp.com",
    projectId: "auth-moha-milon-e3c75",
    storageBucket: "auth-moha-milon-e3c75.appspot.com",
    messagingSenderId: "886307824470",
    appId: "1:886307824470:web:38d8b1c624e580584c2cf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth