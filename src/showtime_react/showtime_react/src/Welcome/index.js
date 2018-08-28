import React, {Component} from 'react';


const Welcome = () => {

  // render(){
  //   const WelcomeImg={
  //     width: '200px',
  //     height: '200px',
  //     borderRadius: '50%',
  //     marginBottom: '50px',
  //   }


    return (
      <div className="welcomeComponent">
      <h1 className="welcomeBanner">This is the West Wing Fan Page.</h1>
      <img className="welcomeImage" src='http://digitalspyuk.cdnds.net/17/45/980x490/landscape-1510231139-west-wing-cast-tease-today-160622-6adb387c0ab0e22b4bd4f88ccb14345b-1.jpg' />
    </div>
  );
  }


export default Welcome;
