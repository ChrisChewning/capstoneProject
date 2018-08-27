import * as firebase from 'firebase';

let config = {
    apiKey: "XXXXXXX",
    authDomain: "XXXXX",
    databaseURL: "XXXXX",
    projectId: "XXXXX",
    storageBucket: "XXXX",
    messagingSenderId: "XXXX"
};
firebase.initializeApp(config);

export default firebase;
