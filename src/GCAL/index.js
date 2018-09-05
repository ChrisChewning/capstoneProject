import React, {Component} from 'react';


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }


  componentDidMount = () => {
    this.getEvents();
  }





}
