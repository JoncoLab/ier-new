import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase";
import * as $ from "jquery";

const config = {
    apiKey: "AIzaSyBpHU2f2qR3QZTo5nIV1TWD0EgcJVQ_Qfg",
    authDomain: "international-economic-relati.firebaseapp.com",
    databaseURL: "https://international-economic-relati.firebaseio.com",
    projectId: "international-economic-relati",
    storageBucket: "international-economic-relati.appspot.com",
    messagingSenderId: "413710662977"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
