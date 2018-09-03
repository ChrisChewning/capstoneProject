/* global gapi */

import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
// import firebaseui from 'firebaseui';

import { connect } from 'react-firebase';

import {Route, Redirect, Switch} from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Notepad from './Notepad';
import ToDoList from './ToDoList';
// import Notes from './Notes';
import Calendar from './Calendar';
import Login from './Login';
// import Logout from './Logout';


// =========================  FIREBASE ========================

  // // Initialize Firebase
  // const config = {
  //     apiKey: "AIzaSyAzFb_TW6s_2DvByFaZrwUpLKIC7rHc10Y",
  //     authDomain: "capstone-chewning.firebaseapp.com",
  //     databaseURL: "https://capstone-chewning.firebaseio.com",
  //     projectId: "capstone-chewning",
  //     storageBucket: "capstone-chewning.appspot.com",
  //     messagingSenderId: "240236777398",
  //
  //     clientId: "894637525353-4dvg87eler6ulqn5f5upchnpjg60acu8.apps.googleusercontent.com",
  //
  //     scopes: [
  //                "email",
  //                "profile",
  //                "https://www.googleapis.com/auth/calendar"
  //       ],
  //       discoveryDocs: [
  //   "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  //   ]
  //
  // };
  // firebase.initializeApp(config);

  // //Firebase UI
  // var uiConfig = {
  //   signInSuccessUrl: "localhost:3000",
  //   signInOptions: [
  //     {
  //       provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //       scopes: config.scopes
  //     }
  //   ],
  //   // Terms of service url.
  //   tosUrl: "<your-tos-url>"
  // };
  //
  //
  //
  // // Initialize the FirebaseUI Widget using Firebase.
  // var ui = new firebaseui.auth.AuthUI(firebase.auth());
  //
  //
  //
  // // The start method will wait until the DOM is loaded.
  // //THIS ui.start is looking for the id firebaseui-auth-container. You can put this in any file.
  // ui.start("#firebaseui-auth-container", uiConfig);
  //
  //
  //
  //
  // // This function will trigger when there is a login event
  // firebase.auth().onAuthStateChanged(function(user) {
  //   console.log(user)
  //   // Make sure there is a valid user object
  //   if (user) {
  //     var script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.src = "https://apis.google.com/js/api.js";
  //     // Once the Google API Client is loaded, you can run your code
  //     script.onload = function(e) {
  //       // Initialize the Google API Client with the config object
  //       gapi.client
  //         .init({
  //           apiKey: config.apiKey,
  //           clientId: config.clientID,
  //           discoveryDocs: config.discoveryDocs,
  //           scope: config.scopes.join(" ")
  //         })
  //         // Loading is finished, so start the app
  //         .then(function() {
  //           // Make sure the Google API Client is properly signed in
  //           if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
  //             startApp(user);
  //           } else {
  //             firebase.auth().signOut(); // Something went wrong, sign out
  //           }
  //         });
  //     };
  //     // Add to the document
  //     document.getElementsByTagName("head")[0].appendChild(script);
  //   }
  // });
  //
  // function startApp(user) {
  //   console.log(user);
  //
  //   // Make sure to refresh the Auth Token in case it expires!
  //   firebase.auth().currentUser.getIdToken()
  //   .then(function(){
  //    return gapi.client.calendar.events
  //     .list({
  //       calendarId: "primary",
  //       timeMin: new Date().toISOString(),
  //       showDeleted: false,
  //       singleEvents: true,
  //       maxResults: 10,
  //       orderBy: "startTime"
  //     })
  //   })
  //   .then(function(response) {
  //     console.log(response);
  //   });
  // }
  //
  //
  //
  //
  //
  //
  // export const auth = firebase.auth();
  // export const googleProvier = new firebase.auth.GoogleAuthProvider;

// firebase.initializeApp(config)
// export default firebase;



// ======================= ROUTES & RENDERS ======================

class App extends Component {
  render() {
    return (
      <div>
        < Sidebar />
        <Switch>
          <Route exact path='/home' component = {Home} />
          <Route exact path="/to-dos" component = {ToDoList} />
          <Route exact path='/notepad' component = {Notepad} />
          <Route exact path='/calendar' component = {Calendar} />
        </Switch>


      </div>
    );
  }
}




export default App;
