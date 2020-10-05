import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_RVW1_-6JkSHsJV1CwHA_DDR_8pZT0u8",
    authDomain: "instagram-awesome.firebaseapp.com",
    databaseURL: "https://instagram-awesome.firebaseio.com",
    projectId: "instagram-awesome",
    storageBucket: "instagram-awesome.appspot.com",
    messagingSenderId: "748442244773",
    appId: "1:748442244773:web:3e9ba8d1912f8ff3141f4c",
    measurementId: "G-RCDJLCJNBJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

const db = firebaseApp.firestore()

const storage = firebaseApp.storage()

export {auth,db,storage}