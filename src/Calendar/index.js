import React, {Component} from 'react';
import {Button, Form, Icon, Row, Input} from 'react-materialize'
import firebase from 'firebase';
import {connect} from 'react-firebase';
import BigCalendar from 'react-big-calendar';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';


BigCalendar.momentLocalizer(moment); //could also use globalizeLocalizer



class Calendar extends Component {
  constructor(){
    super();
    this.state = {
      }
}



  render() {
    return (
      <div>
      <h1>hi</h1>
      <BigCalendar
        style={{height: '420px'}}
        events={['month', 'day', 'agenda']}
        // events={myEventsList}
      startAccessor='startDate'
      endAccessor='endDate'
      />
    </div>
)}
}

export default Calendar;
