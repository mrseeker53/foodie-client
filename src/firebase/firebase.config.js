// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8JzRY-irFyD86G-XDcqcmpUwcdxOaSbg",
    authDomain: "foodie-71a9d.firebaseapp.com",
    projectId: "foodie-71a9d",
    storageBucket: "foodie-71a9d.appspot.com",
    messagingSenderId: "361910864387",
    appId: "1:361910864387:web:3d25292da06d929398dc36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export app
export default app;