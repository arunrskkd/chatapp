import React from 'react';
import firebase from 'firebase';

//firbase config
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const fire = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;


