import React, {Component} from 'react';
import {Button, Form, Icon, Row, Input} from 'react-materialize'
import firebase from 'firebase';
import {connect} from 'react-firebase';
import BigCalendar from 'react-big-calendar';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
// import getEvents from './GCAL';


BigCalendar.momentLocalizer(moment); //could also use globalizeLocalizer



class Calendar extends Component {
  constructor () {
    super()
    this.state = {
      events: []
    }
  }
  // componentDidMount () {
  //   getEvents((events) => {
  //     this.setState({events})
  //   })
  // }

  render() {
    return (
      <div>
      <BigCalendar
        style={{height: '800px', width: '800px', margin: '0px 300px'}}
        // events={['month', 'day', 'agenda']}
         events={[]}
         view='week'
   views={['week']}
   min={new Date(2008, 0, 1, 8, 0)} // 8 AM
   max={new Date(2008, 0, 1, 21, 0)} //8 PM
        // drilldownView="agenda"
        // events={myEventsList}
      startAccessor='startDate'
      endAccessor='endDate'
      />
    </div>
)}
}

// const Calendar = props => (
//   <div>
//     <BigCalendar
//       // events={myEventsList}
//       startAccessor='startDate'
//       endAccessor='endDate'
//     />
//   </div>
// );

export default Calendar;
