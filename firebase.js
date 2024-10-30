// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUq4UT6WXLR7TtEfJqUjViWqwDgHHNiTA",
  authDomain: "sara-perplexity-ai-clone.firebaseapp.com",
  projectId: "sara-perplexity-ai-clone",
  storageBucket: "sara-perplexity-ai-clone.appspot.com",
  messagingSenderId: "243071434072",
  appId: "1:243071434072:web:204c7d89b529f63dd0b92d",
  measurementId: "G-P6DBVNRCSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);