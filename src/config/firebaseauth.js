import React from 'react';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtXAETxe55YLd0S6j0XQEA5EbHKeP0hWQ",
    authDomain: "chatapp-b1e30.firebaseapp.com",
    databaseURL: "https://chatapp-b1e30.firebaseio.com",
    projectId: "chatapp-b1e30",
    storageBucket: "chatapp-b1e30.appspot.com",
    messagingSenderId: "741488441955",
    appId: "1:741488441955:web:ad57c48e0a5ed1d3fe9656",
    measurementId: "G-ED1BPS3PG2"
};


const fire = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;


