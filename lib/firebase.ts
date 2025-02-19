import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  // Your Firebase configuration will be injected here
  apiKey: "AIzaSyBSBQlPHwbrkBxeQ54RZw6jGUkfcBAeI-0",
  authDomain: "moror-7892f.firebaseapp.com",
  projectId: "moror-7892f",
  storageBucket: "moror-7892f.firebasestorage.app",
  messagingSenderId: "644937901522",
  appId: "1:644937901522:web:e9fcf90e8d6d187f7b140b",
  measurementId: "G-FEC36WC9S7"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

