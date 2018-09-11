import firebaseui from 'firebaseui';
import firebase from 'firebase';


const config = {


    clientId: "894637525353-4dvg87eler6ulqn5f5upchnpjg60acu8.apps.googleusercontent.com",

    scopes: [
               "email",
               "profile",
               "https://www.googleapis.com/auth/calendar"
      ],
      discoveryDocs: [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]

};
firebase.initializeApp(config);


//Exports
//-auth module of Firebase,
//-Google Auth Provider: we can use Google Authentication anywhere in the app now.

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
