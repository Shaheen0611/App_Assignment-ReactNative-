import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuR5HfrEZ5JO7Qh0_5ghoWQw51Vz-BB0Q",
    authDomain: "todo-crud-117a6.firebaseapp.com",
    projectId: "todo-crud-117a6",
    storageBucket: "todo-crud-117a6.appspot.com",
    messagingSenderId: "246741457037",
    appId: "1:246741457037:web:dead8a595f0c0fe55f2ac4",
    measurementId: "G-PQBH7TX06H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };