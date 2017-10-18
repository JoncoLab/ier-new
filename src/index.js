import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from "firebase";
import * as $ from "jquery";

const config = {
    apiKey: "AIzaSyBpHU2f2qR3QZTo5nIV1TWD0EgcJVQ_Qfg",
    authDomain: "international-economic-relati.firebaseapp.com",
    databaseURL: "https://international-economic-relati.firebaseio.com",
    projectId: "international-economic-relati",
    storageBucket: "international-economic-relati.appspot.com",
    messagingSenderId: "413710662977"
};
firebase.initializeApp(config, "ier-new");

let root = document.getElementById('root');

firebase.auth(firebase.app("ier-new")).signInAnonymously().then(
    function () {
        ReactDOM.render(<App/>, root);
        registerServiceWorker();
    },
    function (err) {
        let code = err.code,
            name = err.name;
        alert("Сталася помилка:\r\n" + code + "\r\n" + name);
    }
);


