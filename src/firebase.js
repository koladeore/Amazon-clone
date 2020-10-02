import firebase from 'firebase';
import 'dotenv/config';

// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     databaseURL: process.env.DATABASE_URL,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKETS,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.MESSAGING_APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyBKLrMQJobP5UYIarliNOYHSTrmvx5A95A",
    authDomain: "clone-cbe18.firebaseapp.com",
    databaseURL: "https://clone-cbe18.firebaseio.com",
    projectId: "clone-cbe18",
    storageBucket: "clone-cbe18.appspot.com",
    messagingSenderId: "431841204324",
    appId: "1:431841204324:web:72cde6d2d7c12a57426771",
    measurementId: "G-MCJ8EN1X93"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
